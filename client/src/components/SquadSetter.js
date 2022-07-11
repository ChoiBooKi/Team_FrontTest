import Player from "./Player";
import HeaderComponent from "./HeaderComponent";
import { findPlayerIndexById, diffSubstitution, sameSubstitution } from "../utils/arrayFunctions";
import { Layout, Row, Col, message } from "antd";
import { formations as initialFormations } from "../utils/formations";
import axios from 'axios';
import "antd/dist/antd.min.css";
import "./SquadSetter.css";
import { useEffect, useState } from "react";
const { Content } = Layout;

export default function SquadSetter() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);//선수 교체시 선수가 선택되었는지 확인하기위한 state
  const [Flag, SetFlag] = useState(null)//기배치된 선수와 다른선수를 오른쪽 마우스를 눌러서 변경되는것을 방지하기 위한 플래그
  const [mFlag, SetmFlag] = useState()//선수 교체시 오른쪽 마우스만 두번눌렀는지 체크하기위한 플래그
  const [formation, setFormation] = useState(initialFormations[0]);
  const [smoothTransition, setSmoothTransition] = useState(true);
  const [PlayerList, SetPlayerList] = useState()

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

  // const  = [...new Array(11 - PlayerList.length)].map((_, i)=> i+1)객체를 만들어야될듯
  const data = {
    name: '-',
    already: '-',
    back: '-'
  }
  // const emptyData = []
  // const count = 0
  // PlayerList && PlayerList.map((player) => player.already === true ? count++ : null)
  // console.log(count)
  // for(let i = 0; i<11 - PlayerList && PlayerList.length; i++){//already가 true인 애들의 수만 세야돼
  //   emptyData.push(data)
  //   console.log('hi')
  // }
  // console.log(PlayerList && PlayerList.length)
  
  const success = (str) => {
    message.success(str);
  };
  
  const switchPrePlayers = (player, prePlayer) => {//선수판에 있는 선수들끼리 교체
    sameSubstitution(
      formation,
      PlayerList,
      findPlayerIndexById(PlayerList, prePlayer),
      findPlayerIndexById(PlayerList, player)
    );
    if (player !== prePlayer) {
      success("Substitution made");
    }
  };
  // console.log(formation)
  // console.log(PlayerList)
  const switchdiffPlayers = (player, prePlayer) => {//모달 리스트에서 선수교체
    diffSubstitution(
      //여기에 현재 포메이션 넣어주고 prePlayer 인덱스에 있는 포지션값을 select에 넣어줘야 될거같은데
      formation,
      PlayerList,
      findPlayerIndexById(PlayerList, prePlayer),
      findPlayerIndexById(PlayerList, player)
    );
    if (player !== prePlayer) {
      success("Substitution made");
    }
  };

  const selectPlayer = (id, flag, mflag) => {
    if ((Flag === flag && selectedPlayer && mFlag === undefined) || (mFlag !== mflag && selectedPlayer && Flag === flag)) {//아래를 제외한 경우
        if(flag === 'pre'){
          switchPrePlayers(id, selectedPlayer);
          setSelectedPlayer(null);
          SetFlag(null)
          SetmFlag(null)
        } else if (flag === 'modal'){
          if(mFlag !== mflag){
            switchdiffPlayers(id, selectedPlayer);
            setSelectedPlayer(null);
            SetFlag(null)
            SetmFlag(undefined)
          }
        }
    } else {
      if(Flag === null || Flag !== flag || mFlag === mflag){//플래그가 저장안되어있거나, 선수-선수, 모달-모달이 아니거나, 오른쪽 마우스만 두번 클릭했을때
        setSelectedPlayer(id);
        SetFlag(flag)
        SetmFlag(mflag)
      }
    }
  };

  const handleFormationChange = (value) => {//포메이션 변경 및 변경완료 알람
    setFormation(initialFormations[value]);
    success("Formation changed");
  };
  
  const playerItems = PlayerList && PlayerList.map((player, key) => {//PlayerList가 11명이 안되면 카드 생성이 안됨 어떻게 해야되지
    if(player.already === true){
      return (
        <Player
          id={player._id}
          key={key}
          data={player}
          pickPlayer={selectPlayer}
          width={8}
          top={formation.positions[key].top}
          left={formation.positions[key].left}
          positionName={formation.positions[key].name}
        />
      )
    } else {
      return (
        <Player
          id={player._id}
          key={key}
          data={player}
          pickPlayer={selectPlayer}
          width={8}
        />
      )
    }})

  // const noCard = playernum.map()

  return (
    <div className="SquadSetter">
      <Layout>
        <HeaderComponent
          handleFormationChange={handleFormationChange}
          //enableCustomFormation={setIsDragable}
          setSmooth={setSmoothTransition}
        ></HeaderComponent>
        <Content>
          <Row className="formations">
            <Col span={24} className={"playerHolder " + (smoothTransition ? "smooth" : "")}>
              {PlayerList && PlayerList.length >= 11 ? playerItems : playerItems }
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
}
