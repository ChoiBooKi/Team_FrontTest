import Player from "./components/Player";
import Sub from "./components/Sub";
import HeaderComponent from "./components/HeaderComponent";
import { initialState } from "./utils/initialState";
import { findPlayerIndexById, makeSubstitution } from "./utils/arrayFunctions";
import { Layout, Row, Col, message } from "antd";
import { formations as initialFormations } from "./utils/formations";
import CONSTS from "./utils/consts";
import axios from 'axios';

import "antd/dist/antd.css";

import "./styles-new.css";

import { useEffect, useState } from "react";

const { Content } = Layout;

export default function App1() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [startingLineup, setStartingLineup] = useState(
    initialState.startingLineup
  );
  // const [subs, setSubs] = useState(initialState.subs);
  const [formation, setFormation] = useState(initialFormations[0]);
  const [smoothTransition, setSmoothTransition] = useState(true);
  //const [isDraggable, setIsDragable] = useState(false);
  const [PlayerList, SetPlayerList] = useState()

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(CONSTS.LINEUP));
    // setStartingLineup(initialState.startingLineup);
    setStartingLineup(data ?? initialState.startingLineup);
  }, []);

  useEffect(() => {
    localStorage.setItem(CONSTS.LINEUP, JSON.stringify(startingLineup));
  });

  useEffect(async () => {
    const res = await axios.get("/api/readUser")//쿼리로 팀이름 넣어줘야됨
    const sort = res.data.sort(function(a, b){//DB에서 온 리스트 선발선수 맨위로 정렬
      let x = a.already
      if(x === true){
        return -1
      }
      return 0
    })
    SetPlayerList(sort)
  }, [])

  const success = (str) => {
    message.success(str);
  };

  const switchPlayers = (player, withPlayer) => {
    makeSubstitution(
      startingLineup,
      findPlayerIndexById(startingLineup, withPlayer),
      findPlayerIndexById(startingLineup, player)
    );
    if (player !== withPlayer) {
      success("Substitution made");
    }
  };

  const selectPlayer = (Id, player) => {
    // if (isDraggable) {
    //   return;
    // }
    // if (selectedPlayer) {
    //   switchPlayers(id, selectedPlayer);
    //   setSelectedPlayer(null);
    // } else {
    //   setSelectedPlayer(id);
    //   let selectedIndex = findPlayerIndexById(startingLineup, id);
    //   startingLineup[selectedIndex].selected = true;

    //   setStartingLineup([...startingLineup]);
    // }
    // 선수 변경하는 로직
    // console.log(e.target)
    SetPlayerList((prev) => prev.map((item) => item._id === player._id ? { ...item, already: !item.already} : player))//이거는안됨
    SetPlayerList((prev) => prev.map((player) => player._id === Id ? { ...player, already: false} : player))//이거는됨
    console.log(Id)
    console.log(player)
  };

  const handleFormationChange = (value) => {
    setFormation(initialFormations[value]);
    success("Formation changed");
  };

  // const playerItems = startingLineup
  //   .slice(0, 11)
  //   .map((player, key) => (
  //     <Player
  //       key={key}
  //       data={player}
  //       width={8}
  //       pickPlayer={selectPlayer}
  //       draggable={isDraggable}
  //       top={formation.positions[key].top}
  //       left={formation.positions[key].left}
  //       positionName={formation.positions[key].name}
  //     />
  //   ));

  const playerItems = PlayerList && PlayerList.map((player, key) => {
    if(player.already === true){
      return (
        <Player
          // onClick={() => {
          //   handleClose()
          //   onNameHandler(player)
          // }}
          id={player._id}
          key={key}
          data={player}
          pickPlayer={selectPlayer}
          width={8}
          //draggable={isDraggable}
          top={formation.positions[key].top}
          left={formation.positions[key].left}
          positionName={formation.positions[key].name}
          //이거 위에 3개는 왜안되는지 아직도 모르겠어
        />
      )
    } else {
      return (
        <Player
          // onClick={() => {
          //   handleClose()
          //   onNameHandler(player)
          // }}
          id={player._id}
          key={key}
          data={player}
          pickPlayer={selectPlayer}
          width={8}
          //draggable={isDraggable}
        />
      )
    }
    })

  // const subItems = startingLineup
  //   .slice(11)
  //   .map((player, key) => (
  //     <Sub key={key} data={player} pickPlayer={selectPlayer} />
  //   ));

  // const subItems = PlayerList && PlayerList.map((player, key) => {
  //   if(player.already === false){
  //     return (
  //       <Sub
  //         // onClick={() => {
  //         //   handleClose()
  //         //   onNameHandler(player)
  //         // }}
  //         key={player._id}
  //         data={player}
  //         pickPlayer={selectPlayer}
  //       >
  //         {player.name}
  //         {player.like}
  //       </Sub>
  //     )}
  //   })

  return (
    <div className="App1">
      <Layout>
        <HeaderComponent
          handleFormationChange={handleFormationChange}
          //enableCustomFormation={setIsDragable}
          setSmooth={setSmoothTransition}
        ></HeaderComponent>
        <Content style={{ padding: "30px 30px" }}>
          <Row gutter={16} className="mainHolder">
            <Col
              span={19}
              className={"playerHolder " + (smoothTransition ? "smooth" : "")}
            >
              <Row
                gutter={32}
                className={"formation formation-" + formation.value}
              >
                {playerItems}
              </Row>
            </Col>
            {/* <Col span={5} className="substitutions">
              {PlayerList && subItems} 
              // 이거 col대신에 모달로 바꿔야됨
            </Col> */}
          </Row>
        </Content>
      </Layout>
    </div>
  );
}
