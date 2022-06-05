import { useState } from "react";
import { Card, Col } from "antd";
import { getPlayerImage } from "./../utils/formatters";
import Draggable from "react-draggable";
import PopoverContent from "./Popover";
//이게 선수 카드 만드는건데 여기서 i버튼이랑 그런거 모달같은거 해야될듯??
const { Meta } = Card;

export default function Player(props) {
  // const { id, selected, shortName, shirtNumber } = props.data;
  const {_id, name, already, Change, back, like} = props.data
  const { pickPlayer, draggable, top, left, positionName } = props;

  const [popoverVisible, setPopoverVisible] = useState(false);
  return (
    // <Draggable disabled={!draggable}>
    <Col
      style={{ top: top, left: left }}
      // className={"playerCard noselect " + (selected ? "selected" : "")}
      // onMouseEnter={() => setPopoverVisible(true)}원래
      // onMouseLeave={() => setPopoverVisible(false)}주석
      onClick={() => pickPlayer(_id)}
    >
      {
        <PopoverContent
          data={{ ...props.data }}
          setPopoverVisible={setPopoverVisible}
          pickPlayer={pickPlayer}
          visible={popoverVisible}
        ></PopoverContent>
      }
      <Card
        hoverable
        cover={
          <div className="avatarWrapper">
          </div>
        }
      >
        {/* <Meta title={shortName} /> */}
        {/* <span className="positionBadge">{positionName}</span>
        <span className="shirtNumberBadge">{shirtNumber}</span> */}
        <span className="positionBadge">{name}</span>
        <span className="shirtNumberBadge">{back}</span>
      </Card>
    </Col>
    // </Draggable>
  );
}
