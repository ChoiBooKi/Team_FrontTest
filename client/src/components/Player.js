import { useState } from "react";
import { Card, Col } from "antd";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';

let fal = []
  
export default function Player(props) {
  const [anchorEl, setAnchorEl] = useState(null); //리스트 띄울지 안띄울지
  const {_id, name, already, back} = props.data
  const { pickPlayer,top, left, positionName } = props;

  if(already === false){
      fal.push(props.data)
      fal = [...new Set(fal)]
  } 

  const open = Boolean(anchorEl); //리스트 띄우고 끄고

  const idsend = (event) => {//기배치된 선수 끼리 변경할때
    let flag = 'pre'
    pickPlayer(event.currentTarget.id, flag)
  }

  const modalidsend = (id) => {//리스트에서 선택할 때
    let flag = 'modal'
    let mflag = 'list'
    pickPlayer(id, flag, mflag)
  }

  const remove = (id) => {//모달 선수 교체해서 띄우는 거
    fal = fal.filter(item => item._id !== id)
  }

  const handleClick = (event) => { //리스트 띄우기, 모달 선택됐다고 보낼 때
    setAnchorEl(event.currentTarget);
    let flag = 'modal'
    let mflag = 'pre'
    pickPlayer(event.currentTarget.id, flag, mflag)
    event.preventDefault();//브라우저 우클릭을 막아준다.
  };

  const handleClose = () => {//리스트 끄기
    setAnchorEl();
  };

  return (
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
      {fal && fal.map((player) => {
          if(player.already === false){
            return (
              <MenuItem
                onClick={(e) => {
                  handleClose()
                  modalidsend(player._id)
                  remove(player._id)
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
      >
        <Card
          hoverable
          cover={
            <div className="avatarWrapper">
            </div>
          }
        >
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
            <span className="shirtNumberBadge">{back}</span>
          </Button>
        </Card>
      </Col>
    : null
    }
    </>
  );
}
