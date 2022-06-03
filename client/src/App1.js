import Player from "./components/Player";
import Sub from "./components/Sub";
import HeaderComponent from "./components/HeaderComponent";
import { initialState } from "./utils/initialState";
import { findPlayerIndexById, makeSubstitution } from "./utils/arrayFunctions";
import { Layout, Row, Col, message } from "antd";
import { formations as initialFormations } from "./utils/formations";
import CONSTS from "./utils/consts";

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
  const [isDraggable, setIsDragable] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(CONSTS.LINEUP));
    // setStartingLineup(initialState.startingLineup);
    setStartingLineup(data ?? initialState.startingLineup);
  }, []);

  useEffect(() => {
    localStorage.setItem(CONSTS.LINEUP, JSON.stringify(startingLineup));
  });

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

  const selectPlayer = (id) => {
    if (isDraggable) {
      return;
    }
    if (selectedPlayer) {
      switchPlayers(id, selectedPlayer);
      setSelectedPlayer(null);
    } else {
      setSelectedPlayer(id);
      let selectedIndex = findPlayerIndexById(startingLineup, id);
      startingLineup[selectedIndex].selected = true;

      setStartingLineup([...startingLineup]);
    }
  };

  const handleFormationChange = (value) => {
    setFormation(initialFormations[value]);
    success("Formation changed");
  };

  const playerItems = startingLineup
    .slice(0, 11)
    .map((player, key) => (
      <Player
        key={key}
        data={player}
        width={8}
        pickPlayer={selectPlayer}
        draggable={isDraggable}
        top={formation.positions[key].top}
        left={formation.positions[key].left}
        positionName={formation.positions[key].name}
      />
    ));

  const subItems = startingLineup
    .slice(11)
    .map((player, key) => (
      <Sub key={key} data={player} pickPlayer={selectPlayer} />
    ));

  return (
    <div className="App1">
      <Layout>
        <HeaderComponent
          handleFormationChange={handleFormationChange}
          enableCustomFormation={setIsDragable}
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
            <Col span={5} className="substitutions">
              {subItems}
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
}
