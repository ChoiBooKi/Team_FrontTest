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
let fal = []
export default function Player(props) {
  // const [PlayerList, SetPlayerList] = useState()
  // 후보 선수를 fal이 아니라 state로 변경
  const [Id, SetId] = useState()
  // const { id, selected, shortName, shirtNumber } = props.data;
  const {_id, name, already, Change, back, like} = props.data
  const { pickPlayer,top, left, positionName } = props;
  // const { pickPlayer, draggable, top, left, positionName } = props;
  if(already === false){
    fal.push(props.data)
    //중복되는 값은 저장되지 않게 짜야합니다
  }
  console.log(fal)
  const [popoverVisible, setPopoverVisible] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null); //리스트 띄울지 안띄울지
  const open = Boolean(anchorEl); //리스트 띄우고 끄고

  const handleClick = (event) => { //리스트 띄우기
    setAnchorEl(event.currentTarget);
    SetId(event.currentTarget.id)//배치된 선수의 id값을 저장
    event.preventDefault();//브라우저 우클릭을 막아준다.
  };

  const handleClose = (props) => {//리스트 끄기
    // SetPlayerList((prev) => prev.map((player) => player._id === props._id ? { ...player, already: true} : player))//이거는안됨
    // SetPlayerList((prev) => prev.map((player) => player._id === Id ? { ...player, already: false} : player))//이거는됨
    // console.log(Id)
    // console.log(props._id)
    // console.log(props)
    setAnchorEl();
  };

  // useEffect(async () => {
  //   const res = await axios.get("/api/readUser")//쿼리로 팀이름 넣어줘야됨
  //   SetPlayerList(res.data)
  // }, [])

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
      {/* {already === false ?
        <MenuItem
          onClick={() => {
            handleClose(props.data)
            pickPlayer(Id, props.data)
          }}
          key={_id}
        >
          {name}
          {like}
        </MenuItem>
      : <div>바보</div>
      } */}
      {fal && fal.map((player) => {
          if(player.already === false){
            return (
              <MenuItem
                onClick={() => {
                  handleClose(player)
                  pickPlayer(Id, player)
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
    {already === true ?
      <Col
        style={{ top: top, left: left }}
        className={"playerCard noselect selected"}
        // onMouseEnter={() => setPopoverVisible(true)}원래
        // onMouseLeave={() => setPopoverVisible(false)}주석
        //onClick={(e) => pickPlayer(e)}
      >
        {/* {
          <PopoverContent
            data={{ ...props.data }}
            setPopoverVisible={setPopoverVisible}
            //pickPlayer={pickPlayer}
            visible={popoverVisible}
          ></PopoverContent>
        } */}
        <Card
          hoverable
          cover={
            <div className="avatarWrapper">
            </div>
          }
        >
          {/* <Meta title={shortName} /> */}
          <Button className="button"
            id={_id}
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onContextMenu={(e) => handleClick(e)}
          >
            <span className="positionBadge">{name}</span>
            <span className="playerCardAction">{like}</span>
            {/* 선호포지션 넣어줘야돼 */}
            <span className="shirtNumberBadge">{back}</span>
          </Button>
        </Card>
      </Col>
    : null
    }
    {/* // </Draggable> */}
    </>
  );
}
