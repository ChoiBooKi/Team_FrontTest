import { useState } from "react";
import { Card, Col } from "antd";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';

let fal = []
let selected = 0
export default function Player(props) {
  const [anchorEl, setAnchorEl] = useState(null); //리스트 띄울지 안띄울지
  const {_id, name, already, back} = props.data
  const { pickPlayer,top, left, positionName } = props;
  const [ Id, SetId] = useState()
  const [ CheckId, SetCheckId] = useState()
  const [selected, Setselected] = useState()

  if(already === false){
      fal.push(props.data)
      fal = [...new Set(fal)]
  } 

  const open = Boolean(anchorEl); //리스트 띄우고 끄고

  const idsend = (event) => {//기배치된 선수 끼리 변경할때
    let flag = 'pre'
    pickPlayer(event.currentTarget.id, flag)
    SetId(event.currentTarget.id)
    //한선수를 두번 골랐는지 확인하는 if문
    //한선수를 골랐다가 다른선수 오른쪽 클릭했을 땐 어떻게 해야되는지 모르겠네
    //id 값으로 해당 선수의 class이름에 접근하는 방법 알아보기
    if(CheckId === event.currentTarget.id){
      Setselected(0)
      SetCheckId()
      console.log('yes')
    } else {
      SetCheckId(event.currentTarget.id)
      Setselected(1)
      console.log('no')
    }
  }

  // const selectOff = () => {
  //   selected = 0
  // }

  const modalidsend = (id) => {//리스트에서 선택할 때
    let flag = 'modal'
    let mflag = 'list'
    pickPlayer(id, flag, mflag)
    Setselected(1)
  }

  const remove = (id) => {//모달 선수 교체해서 띄우는 거
    fal = fal.filter(item => item._id !== id)
  }

  const handleClick = (event) => { //리스트 띄우기, 모달 선택됐다고 보낼 때
    console.log(selected)
    if(selected === 1){
      Setselected(0)
    }
    event.preventDefault();//브라우저 우클릭을 막아준다.
    setAnchorEl(event.currentTarget);
    let flag = 'modal'
    let mflag = 'pre'
    pickPlayer(event.currentTarget.id, flag, mflag)
    SetId(event.currentTarget.id)
    // selected = 1
    SetCheckId(event.currentTarget.id)
    if(CheckId === event.currentTarget.id){
      Setselected(0)
      SetCheckId()
    } else {
      SetCheckId(event.currentTarget.id)
      Setselected(1)
    }
  };

  const handleClose = () => {//리스트 끄기
    SetId(null)
    Setselected(0)
    setAnchorEl();
  };

  return (
    <>
      <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      // onClick={e => color(e)}
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
        className={(_id === Id ) && selected === 1 ? "playerCard noselect selected" : "playerCard noselect"}
      >
        <Card>
          <Button className="button"
            id={_id}
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onContextMenu={(e) => handleClick(e)}
            onClick={(e) => idsend(e)}
          >
            <div style={{color: 'white'}}>
              <span>{name}</span>
              <span>{positionName}</span>
              {/* <br/> 등번호 뺄지 넣을지는 이미지 적용시켜본뒤에 결정*/}
              <span>{back}</span>
            </div>
          </Button>
        </Card>
      </Col>
    : null
    }
    </>
  );
}
