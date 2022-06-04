import React from "react";
import { Card, Col } from "antd";

export default function Sub(props) {
  // const { id, shirtNumber, shortName, selected } = props.data;
  const {_id, name, already, Change, back, like} = props.data
  const { pickPlayer } = props;

  return (
    <Col
      span={24}
      //className={"playerCardSubs " + (selected ? "selected" : "")}
      onClick={() => pickPlayer(_id)}
    >
      <Card hoverable className="subsCard">
        <span className="shirtNumber">{back}</span>
        <span className="subsName"> {name}</span>
        <span className="subsName"> {like}</span>
      </Card>
    </Col>
  );
}
