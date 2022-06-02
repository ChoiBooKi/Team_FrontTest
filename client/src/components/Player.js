import { useState } from "react";
import { Card, Col } from "antd";
import { getPlayerImage } from "./../utils/formatters";
import Draggable from "react-draggable";
import PopoverContent from "./Popover";

const { Meta } = Card;

export default function Player(props) {
  const { id, selected, shortName, shirtNumber } = props.data;
  const { pickPlayer, draggable, top, left, positionName } = props;

  const [popoverVisible, setPopoverVisible] = useState(false);
  return (
    // <Draggable disabled={!draggable}>
    <Col
      style={{ top: top, left: left }}
      className={"playerCard noselect " + (selected ? "selected" : "")}
      // onMouseEnter={() => setPopoverVisible(true)}
      // onMouseLeave={() => setPopoverVisible(false)}
      onClick={() => pickPlayer(id)}
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
            <img
              alt="example"
              className="playerAvatar nodrag"
              src={getPlayerImage(id)}
            />
          </div>
        }
      >
        <Meta title={shortName} />
        <span className="positionBadge">{positionName}</span>
        <span className="shirtNumberBadge">{shirtNumber}</span>
      </Card>
    </Col>
    // </Draggable>
  );
}
