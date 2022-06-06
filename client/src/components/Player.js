import { useEffect, useState } from "react";
import axios from 'axios';
import { Card, Col } from "antd";
import { getPlayerImage } from "./../utils/formatters";
import Draggable from "react-draggable";
import PopoverContent from "./Popover";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
//이게 선수 카드 만드는건데 여기서 i버튼이랑 그런거 모달같은거 해야될듯??
const { Meta } = Card;

export default function Player(props) {
  const [PlayerList, SetPlayerList] = useState()
  const [Id, SetId] = useState()
  // const { id, selected, shortName, shirtNumber } = props.data;
  const {_id, name, already, Change, back, like} = props.data
  const { pickPlayer, draggable, top, left, positionName } = props;

  const [popoverVisible, setPopoverVisible] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null); //리스트 띄울지 안띄울지
  const open = Boolean(anchorEl); //리스트 띄우고 끄고

  const handleClick = (event) => { //리스트 띄우고, 선택한 원의 번호 저장
    setAnchorEl(event.currentTarget);
    SetId(event.currentTarget.id)
    console.log(event.currentTarget.id)
    event.preventDefault();//브라우저 우클릭을 막아준다.
  };

  const handleClose = (e) => {//리스트 끄기
    SetPlayerList((prev) => prev.map((player) => player._id === _id ? { ...player, already: !already} : player))//이거는됨
    SetPlayerList((prev) => prev.map((player) => player.id === Id ? { ...player, already: false} : player))//이거는안됨
    setAnchorEl();
  };

  useEffect(async () => {
    const res = await axios.get("/api/readUser")//쿼리로 팀이름 넣어줘야됨
    SetPlayerList(res.data)
  }, [])

  return (
    // <Draggable disabled={!draggable}>
    <>
      <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={e => handleClose(e)}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      PaperProps={{
        style: {
          maxHeight: "200px",
          width: '20ch',
        },
      }}
    //스크롤 만드는것
    >
      {PlayerList && PlayerList.map((player) => {
        if(player.already === false){
          return (
            <MenuItem
              onClick={() => {
                handleClose()
              }}
              key={player._id}
            >
              {player.name}
              {player.like}
            </MenuItem>
          )
        }
      })}
    </Menu>
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
        <Button className="button"
          //disabled={Status}
          id={_id}
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onContextMenu={(e) => handleClick(e)}
        >
          <span className="positionBadge">{name}</span>
          <span className="shirtNumberBadge">{back}</span>
        </Button>
      </Card>
    </Col>
    {/* // </Draggable> */}
    </>
  );
}
