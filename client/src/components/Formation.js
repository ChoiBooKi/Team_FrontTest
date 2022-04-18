import React, { useState }  from 'react';
import "./Formation.css";
import Draggable from 'react-draggable';
import axios from 'axios';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import { playersList } from './data';

function Formation (props) {
  const [playerList, setPlayerList] = useState(playersList);
  const [anchorEl, setAnchorEl] = useState(null);
  const [buttonNum, setbuttonNum] = useState()
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setbuttonNum(event.currentTarget.id)
    event.preventDefault();//브라우저 우클릭을 막아준다.
  };

  const handleClose = ({id, name, already}) => {
    setAnchorEl();

    setPlayerList(playerList.map((player) =>
      player.id === id ? { ...player, already: !already} : player)
    )
    // setPlayerList(playerList.map((player) =>
    // player.already === true ? {...player, already: !already}: player)
    // ) 선수 교체하면 원래있던 선수 다시 false로 변경되게 해야됨
  };

  const [Status, SetStatus] = useState(true)

  const onStatusHandler = () => {
    SetStatus(!Status)
  }

  useEffect(async () => { //목업 데이터 먼저 넣고 화면 띄운 뒤에 useEffect로 setPlayerList 업데이트
    const res = await axios.get("/api/readUser")
    setPlayerList(res.data)
  }, [])

  const readDB = () => {
    if(Status === false){
      let body = {
        playerList //첫번째 요소 포지션 
      }
      axios.post('/api/sendUser', body)
      .then(res => {
        console.log(res.data)
      })
    }
  }
  // 포지션 위치 값 보내는 방법
  // const [Position1, SetPosition1] = useState({ x: 0, y: 0 });

  // const trackPos = (data) => {
  //   SetPosition1({ x: data.x, y: data.y }); 
  // };

  // let body = {
  //   first: Position1
  // }

  // axios.post('/api/position', body)
  // .then(res => {
  //     console.log(res.data)
  // })

  const [Content1, SetContent1] = useState("ST");
  const [Content2, SetContent2] = useState("ST");
  const [Content3, SetContent3] = useState("LM");
  const [Content4, SetContent4] = useState("CM");
  const [Content5, SetContent5] = useState("CM");
  const [Content6, SetContent6] = useState("RM");
  const [Content7, SetContent7] = useState("LB");
  const [Content8, SetContent8] = useState("CB");
  const [Content9, SetContent9] = useState("CB");
  const [Content10, SetContent10] = useState("RB");

  const [Name1, SetName1] = useState("")
  const [Name2, SetName2] = useState("")
  const [Name3, SetName3] = useState("")
  const [Name4, SetName4] = useState("")
  const [Name5, SetName5] = useState("")
  const [Name6, SetName6] = useState("")
  const [Name7, SetName7] = useState("")
  const [Name8, SetName8] = useState("")
  const [Name9, SetName9] = useState("")
  const [Name10, SetName10] = useState("")
  const [Name11, SetName11] = useState("")

  const onNameHandler = ({id, name, already}) => {
    switch(buttonNum){
      case "button1" :
        return SetName1(name)
      case "button2" :
        return SetName2(name)
      case "button3" :
        return SetName3(name)
      case "button4" :
        return SetName4(name)
      case "button5" :
        return SetName5(name)
      case "button6" :
        return SetName6(name)
      case "button7" :
        return SetName7(name)
      case "button8" :
        return SetName8(name)
      case "button9" :
        return SetName9(name)
      case "button10" :
        return SetName10(name)  
      case "button11" :
        return SetName11(name)  
      default:
        return null
    }
  }

  const onContentHandler1 = (props) => {
    SetContent1(props)
  }
  const onDragHandler1 =(data) =>{
    if(data.x>80 && data.y < 120 && data.x <450){
      onContentHandler1("ST")
    } else if(data.x<80 && data.y < 200){
      onContentHandler1("LW")
    } else if(data.x > 450 && data.y < 200){
      onContentHandler1("RW")
    } else if(data.x>80 && data.y > 120 && data.y < 185 && data.x <450){
      onContentHandler1("CF")
    } else if(data.x>80 && data.y > 185 && data.y < 275 && data.x <450){
      onContentHandler1("CAM")
    } else if(data.x<80 && data.y > 200 && data.y < 440){
      onContentHandler1("LM")
    } else if(data.x > 450 && data.y > 200 && data.y < 440){
      onContentHandler1("RM")
    } else if(data.x>80 && data.y > 275 && data.y < 460 && data.x <450){
      onContentHandler1("CM")
    } else if(data.x<80 && data.y > 440){
      onContentHandler1("LB")
    } else if(data.x > 450 && data.y > 440){
      onContentHandler1("RB")
    } else if(data.x>80 && data.y > 460 && data.y < 560 && data.x <450){
      onContentHandler1("CDM")
    } else if(data.x>80 && data.y > 560 && data.x <450){
      onContentHandler1("CB")
    }
  }

  const onContentHandler2 = (props) => {
    SetContent2(props)
  }
  const onDragHandler2 =(data) =>{
    if(data.x>80 && data.y < 120 && data.x <450){
      onContentHandler2("ST")
    } else if(data.x<80 && data.y < 200){
      onContentHandler2("LW")
    } else if(data.x > 450 && data.y < 200){
      onContentHandler2("RW")
    } else if(data.x>80 && data.y > 120 && data.y < 185 && data.x <450){
      onContentHandler2("CF")
    } else if(data.x>80 && data.y > 185 && data.y < 275 && data.x <450){
      onContentHandler2("CAM")
    } else if(data.x<80 && data.y > 200 && data.y < 440){
      onContentHandler2("LM")
    } else if(data.x > 450 && data.y > 200 && data.y < 440){
      onContentHandler2("RM")
    } else if(data.x>80 && data.y > 275 && data.y < 460 && data.x <450){
      onContentHandler2("CM")
    } else if(data.x<80 && data.y > 440){
      onContentHandler2("LB")
    } else if(data.x > 450 && data.y > 440){
      onContentHandler2("RB")
    } else if(data.x>80 && data.y > 460 && data.y < 560 && data.x <450){
      onContentHandler2("CDM")
    } else if(data.x>80 && data.y > 560 && data.x <450){
      onContentHandler2("CB")
    }
  }

  const onContentHandler3 = (props) => {
    SetContent3(props)
  }
  const onDragHandler3 =(data) =>{
    if(data.x>80 && data.y < 120 && data.x <450){
      onContentHandler3("ST")
    } else if(data.x<80 && data.y < 200){
      onContentHandler3("LW")
    } else if(data.x > 450 && data.y < 200){
      onContentHandler3("RW")
    } else if(data.x>80 && data.y > 120 && data.y < 185 && data.x <450){
      onContentHandler3("CF")
    } else if(data.x>80 && data.y > 185 && data.y < 275 && data.x <450){
      onContentHandler3("CAM")
    } else if(data.x<80 && data.y > 200 && data.y < 440){
      onContentHandler3("LM")
    } else if(data.x > 450 && data.y > 200 && data.y < 440){
      onContentHandler3("RM")
    } else if(data.x>80 && data.y > 275 && data.y < 460 && data.x <450){
      onContentHandler3("CM")
    } else if(data.x<80 && data.y > 440){
      onContentHandler3("LB")
    } else if(data.x > 450 && data.y > 440){
      onContentHandler3("RB")
    } else if(data.x>80 && data.y > 460 && data.y < 560 && data.x <450){
      onContentHandler3("CDM")
    } else if(data.x>80 && data.y > 560 && data.x <450){
      onContentHandler3("CB")
    }
  }

  const onContentHandler4 = (props) => {
    SetContent4(props)
  }
  const onDragHandler4 =(data) =>{
    if(data.x>80 && data.y < 120 && data.x <450){
      onContentHandler4("ST")
    } else if(data.x<80 && data.y < 200){
      onContentHandler4("LW")
    } else if(data.x > 450 && data.y < 200){
      onContentHandler4("RW")
    } else if(data.x>80 && data.y > 120 && data.y < 185 && data.x <450){
      onContentHandler4("CF")
    } else if(data.x>80 && data.y > 185 && data.y < 275 && data.x <450){
      onContentHandler4("CAM")
    } else if(data.x<80 && data.y > 200 && data.y < 440){
      onContentHandler4("LM")
    } else if(data.x > 450 && data.y > 200 && data.y < 440){
      onContentHandler4("RM")
    } else if(data.x>80 && data.y > 275 && data.y < 460 && data.x <450){
      onContentHandler4("CM")
    } else if(data.x<80 && data.y > 440){
      onContentHandler4("LB")
    } else if(data.x > 450 && data.y > 440){
      onContentHandler4("RB")
    } else if(data.x>80 && data.y > 460 && data.y < 560 && data.x <450){
      onContentHandler4("CDM")
    } else if(data.x>80 && data.y > 560 && data.x <450){
      onContentHandler4("CB")
    }
  }

  const onContentHandler5 = (props) => {
    SetContent5(props)
  }
  const onDragHandler5 =(data) =>{
    if(data.x>80 && data.y < 120 && data.x <450){
      onContentHandler5("ST")
    } else if(data.x<80 && data.y < 200){
      onContentHandler5("LW")
    } else if(data.x > 450 && data.y < 200){
      onContentHandler5("RW")
    } else if(data.x>80 && data.y > 120 && data.y < 185 && data.x <450){
      onContentHandler5("CF")
    } else if(data.x>80 && data.y > 185 && data.y < 275 && data.x <450){
      onContentHandler5("CAM")
    } else if(data.x<80 && data.y > 200 && data.y < 440){
      onContentHandler5("LM")
    } else if(data.x > 450 && data.y > 200 && data.y < 440){
      onContentHandler5("RM")
    } else if(data.x>80 && data.y > 275 && data.y < 460 && data.x <450){
      onContentHandler5("CM")
    } else if(data.x<80 && data.y > 440){
      onContentHandler5("LB")
    } else if(data.x > 450 && data.y > 440){
      onContentHandler5("RB")
    } else if(data.x>80 && data.y > 460 && data.y < 560 && data.x <450){
      onContentHandler5("CDM")
    } else if(data.x>80 && data.y > 560 && data.x <450){
      onContentHandler5("CB")
    }
  }

  const onContentHandler6 = (props) => {
    SetContent6(props)
  }
  const onDragHandler6 =(data) =>{
    if(data.x>80 && data.y < 120 && data.x <450){
      onContentHandler6("ST")
    } else if(data.x<80 && data.y < 200){
      onContentHandler6("LW")
    } else if(data.x > 450 && data.y < 200){
      onContentHandler6("RW")
    } else if(data.x>80 && data.y > 120 && data.y < 185 && data.x <450){
      onContentHandler6("CF")
    } else if(data.x>80 && data.y > 185 && data.y < 275 && data.x <450){
      onContentHandler6("CAM")
    } else if(data.x<80 && data.y > 200 && data.y < 440){
      onContentHandler6("LM")
    } else if(data.x > 450 && data.y > 200 && data.y < 440){
      onContentHandler6("RM")
    } else if(data.x>80 && data.y > 275 && data.y < 460 && data.x <450){
      onContentHandler6("CM")
    } else if(data.x<80 && data.y > 440){
      onContentHandler6("LB")
    } else if(data.x > 450 && data.y > 440){
      onContentHandler6("RB")
    } else if(data.x>80 && data.y > 460 && data.y < 560 && data.x <450){
      onContentHandler6("CDM")
    } else if(data.x>80 && data.y > 560 && data.x <450){
      onContentHandler6("CB")
    }
  }

  const onContentHandler7 = (props) => {
    SetContent7(props)
  }
  const onDragHandler7 =(data) =>{
    if(data.x>80 && data.y < 120 && data.x <450){
      onContentHandler7("ST")
    } else if(data.x<80 && data.y < 200){
      onContentHandler7("LW")
    } else if(data.x > 450 && data.y < 200){
      onContentHandler7("RW")
    } else if(data.x>80 && data.y > 120 && data.y < 185 && data.x <450){
      onContentHandler7("CF")
    } else if(data.x>80 && data.y > 185 && data.y < 275 && data.x <450){
      onContentHandler7("CAM")
    } else if(data.x<80 && data.y > 200 && data.y < 440){
      onContentHandler7("LM")
    } else if(data.x > 450 && data.y > 200 && data.y < 440){
      onContentHandler7("RM")
    } else if(data.x>80 && data.y > 275 && data.y < 460 && data.x <450){
      onContentHandler7("CM")
    } else if(data.x<80 && data.y > 440){
      onContentHandler7("LB")
    } else if(data.x > 450 && data.y > 440){
      onContentHandler7("RB")
    } else if(data.x>80 && data.y > 460 && data.y < 560 && data.x <450){
      onContentHandler7("CDM")
    } else if(data.x>80 && data.y > 560 && data.x <450){
      onContentHandler7("CB")
    }
  }

  const onContentHandler8 = (props) => {
    SetContent8(props)
  }
  const onDragHandler8 =(data) =>{
    if(data.x>80 && data.y < 120 && data.x <450){
      onContentHandler8("ST")
    } else if(data.x<80 && data.y < 200){
      onContentHandler8("LW")
    } else if(data.x > 450 && data.y < 200){
      onContentHandler8("RW")
    } else if(data.x>80 && data.y > 120 && data.y < 185 && data.x <450){
      onContentHandler8("CF")
    } else if(data.x>80 && data.y > 185 && data.y < 275 && data.x <450){
      onContentHandler8("CAM")
    } else if(data.x<80 && data.y > 200 && data.y < 440){
      onContentHandler8("LM")
    } else if(data.x > 450 && data.y > 200 && data.y < 440){
      onContentHandler8("RM")
    } else if(data.x>80 && data.y > 275 && data.y < 460 && data.x <450){
      onContentHandler8("CM")
    } else if(data.x<80 && data.y > 440){
      onContentHandler8("LB")
    } else if(data.x > 450 && data.y > 440){
      onContentHandler8("RB")
    } else if(data.x>80 && data.y > 460 && data.y < 560 && data.x <450){
      onContentHandler8("CDM")
    } else if(data.x>80 && data.y > 560 && data.x <450){
      onContentHandler8("CB")
    }
  }

  const onContentHandler9 = (props) => {
    SetContent9(props)
  }
  const onDragHandler9 =(data) =>{
    if(data.x>80 && data.y < 120 && data.x <450){
      onContentHandler9("ST")
    } else if(data.x<80 && data.y < 200){
      onContentHandler9("LW")
    } else if(data.x > 450 && data.y < 200){
      onContentHandler9("RW")
    } else if(data.x>80 && data.y > 120 && data.y < 185 && data.x <450){
      onContentHandler9("CF")
    } else if(data.x>80 && data.y > 185 && data.y < 275 && data.x <450){
      onContentHandler9("CAM")
    } else if(data.x<80 && data.y > 200 && data.y < 440){
      onContentHandler9("LM")
    } else if(data.x > 450 && data.y > 200 && data.y < 440){
      onContentHandler9("RM")
    } else if(data.x>80 && data.y > 275 && data.y < 460 && data.x <450){
      onContentHandler9("CM")
    } else if(data.x<80 && data.y > 440){
      onContentHandler9("LB")
    } else if(data.x > 450 && data.y > 440){
      onContentHandler9("RB")
    } else if(data.x>80 && data.y > 460 && data.y < 560 && data.x <450){
      onContentHandler9("CDM")
    } else if(data.x>80 && data.y > 560 && data.x <450){
      onContentHandler9("CB")
    }
  }

  const onContentHandler10 = (props) => {
    SetContent10(props)
  }
  const onDragHandler10 =(data) =>{
    if(data.x>80 && data.y < 120 && data.x <450){
      onContentHandler10("ST")
    } else if(data.x<80 && data.y < 200){
      onContentHandler10("LW")
    } else if(data.x > 450 && data.y < 200){
      onContentHandler10("RW")
    } else if(data.x>80 && data.y > 120 && data.y < 185 && data.x <450){
      onContentHandler10("CF")
    } else if(data.x>80 && data.y > 185 && data.y < 275 && data.x <450){
      onContentHandler10("CAM")
    } else if(data.x<80 && data.y > 200 && data.y < 440){
      onContentHandler10("LM")
    } else if(data.x > 450 && data.y > 200 && data.y < 440){
      onContentHandler10("RM")
    } else if(data.x>80 && data.y > 275 && data.y < 460 && data.x <450){
      onContentHandler10("CM")
    } else if(data.x<80 && data.y > 440){
      onContentHandler10("LB")
    } else if(data.x > 450 && data.y > 440){
      onContentHandler10("RB")
    } else if(data.x>80 && data.y > 460 && data.y < 560 && data.x <450){
      onContentHandler10("CDM")
    } else if(data.x>80 && data.y > 560 && data.x <450){
      onContentHandler10("CB")
    }
  }

  return(
    <div className="formation">
      
      <button onClick={ () => {
        onStatusHandler()
        readDB()
      }}>
        {Status ? "편집" : "편집 완료"}
      </button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
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
        {playerList.map((player) => {
          if(player.already === false){
            return (
              <MenuItem
                onClick={() => {
                  handleClose(player)
                  onNameHandler(player)
                }}
                key={player.id}
              >
                {player.name}
              </MenuItem>
            )
          }
        })}
      </Menu>

      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 145, y: 80}}
        onDrag = {(e, data) => onDragHandler1(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
        // onStop={(e, data) => trackPos(data)}
        // 포지션 위치 값 보내는 방법
      >
        {/* <div className="move">
          <div>{Content1}</div>
        </div> */}
        <div className="move">
          <Button className="button"
            disabled={Status}
            id="button1"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onContextMenu={(e) => handleClick(e)}
          >
            <div>{Content1}</div>
          </Button>
          <div>{Name1}</div>
        </div>

      </Draggable>

      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 380, y: 80}}
        onDrag = {(e, data) => onDragHandler2(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
        // onStop={(e, data) => trackPos(data)}
        // 포지션 위치 값 보내는 방법
      >
        <div className="move">
          <Button className="button"
            disabled={Status}
            id="button2"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onContextMenu={handleClick}
          >
            <div>{Content2}</div>
          </Button>
          <div>{Name2}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 25, y: 280}}
        onDrag = {(e, data) => onDragHandler3(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
      >
        <div className="move">
          <Button className="button"
            disabled={Status}
            id="button3"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onContextMenu={handleClick}
          >
            <div>{Content3}</div>
          </Button>
          <div>{Name3}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        defaultPosition={{ x: 160, y: 360 }}
        onDrag = {(e, data) => onDragHandler4(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
      >
        <div className="move">
          <Button className="button"
            disabled={Status}
            id="button4"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onContextMenu={handleClick}
          >
            <div>{Content4}</div>
          </Button>
          <div>{Name4}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 350, y: 360}}
        onDrag = {(e, data) => onDragHandler5(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
      >
        <div className="move">
          <Button className="button"
            disabled={Status}
            id="button5"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onContextMenu={handleClick}
          >
            <div>{Content5}</div>
          </Button>
          <div>{Name5}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 500, y: 280}}
        onDrag = {(e, data) => onDragHandler6(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
      >
        <div className="move">
          <Button className="button"
            disabled={Status}
            id="button6"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onContextMenu={handleClick}
          >
            <div>{Content6}</div>
          </Button>
          <div>{Name6}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 30, y: 580}}
        onDrag = {(e, data) => onDragHandler7(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
      >
        <div className="move">
          <Button className="button"
            disabled={Status}
            id="button7"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onContextMenu={handleClick}
          >
            <div>{Content7}</div>
          </Button>
          <div>{Name7}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 160, y: 660}}
        onDrag = {(e, data) => onDragHandler8(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
      >
        <div className="move">
          <Button className="button"
            disabled={Status}
            id="button8"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onContextMenu={handleClick}
          >
            <div>{Content8}</div>
          </Button>
          <div>{Name8}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 350, y: 660}}
        onDrag = {(e, data) => onDragHandler9(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
      >
        <div className="move">
          <Button className="button"
            disabled={Status}
            id="button9"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onContextMenu={handleClick}
          >
            <div>{Content9}</div>
          </Button>
          <div>{Name9}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 485, y: 580}}
        onDrag = {(e, data) => onDragHandler10(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
      >
        <div className="move">
          <Button className="button"
            disabled={Status}
            id="button10"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onContextMenu={handleClick}
          >
            <div>{Content10}</div>
          </Button>
          <div>{Name10}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={true} 
        defaultPosition={{x: 260, y: 790}}
      >
        <div className="move">
          <Button className="button"
            disabled={Status}
            id="button11"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onContextMenu={handleClick}
          >
            <div>GK</div>
          </Button>
          <div>{Name11}</div>
        </div>        
      </Draggable>
    </div>
  )
}


export default Formation