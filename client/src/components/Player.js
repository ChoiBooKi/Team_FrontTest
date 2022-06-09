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
  // const { id, selected, shortName, shirtNumber } = props.data;
  // const { pickPlayer, draggable, top, left, positionName } = props;


let fal = []
  
export default function Player(props) {
  const [Id, SetId] = useState()
  const [Candidate, SetCandidate] = useState()
  const [anchorEl, setAnchorEl] = useState(null); //리스트 띄울지 안띄울지
  const {_id, name, already, Change, back, like} = props.data
  const { pickPlayer,top, left, positionName, modalPlayer } = props;
  let a = 0
  if(already === false){
    if(fal.length === 0) {
      fal.push(props.data)
    } else {
      fal.push(props.data)
      //fal에 already가 true인 값이 있는지 확인
      // fal = fal.filter(item => item !== true)
      fal = [...new Set(fal)]
    }
  }
  const open = Boolean(anchorEl); //리스트 띄우고 끄고

  const handleClick = (event) => { //리스트 띄우기
    setAnchorEl(event.currentTarget);
    a = 1
    modalPlayer(event.currentTarget.id, a)
    fal = fal.filter(item => item._id !== event.currentTarget.id)
    event.preventDefault();//브라우저 우클릭을 막아준다.
  };
  const idsend = (event) => {
    pickPlayer(event.currentTarget.id)
  }

  const handleClose = () => {//리스트 끄기
    setAnchorEl();
  };

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
                  handleClose()
                  modalPlayer(player._id, a)
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
        //onClick={() => pickPlayer(Id)}
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
            onClick={(e) => idsend(e)}
          >
            <span className="positionBadge">{name}</span>
            <span className="playerCardAction">{positionName}</span>
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
