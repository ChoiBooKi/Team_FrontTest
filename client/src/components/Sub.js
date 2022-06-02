import React from "react";
import { Card, Col } from "antd";

export default function Sub(props) {
  const { id, shirtNumber, shortName, selected } = props.data;
  const { pickPlayer } = props;

  return (
    <Col
      span={24}
      className={"playerCardSubs " + (selected ? "selected" : "")}
      onClick={() => pickPlayer(id)}
    >
      <Card hoverable className="subsCard">
        <span className="shirtNumber">{shirtNumber}</span>
        <span className="subsName"> {shortName}</span>
      </Card>
    </Col>
  );
}
