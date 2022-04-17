import React, { useState }  from 'react';
import "./Formation.css";
import Draggable from 'react-draggable';
import axios from 'axios';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import { playersList } from './data';

function Formation () {
  const [playerList, setPlayerList] = useState(playersList);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    event.preventDefault();//브라우저 우클릭을 막아준다.
  };
  const handleClose = (props) => {
    setAnchorEl();
    const {id, name, already} = props
    // setPlayerList(playerList.map((player) =>
    // player.already === true ? {...player, already: !already}: player)
    // ) 
    setPlayerList(playerList.map((player) =>
      player.id === id ? { ...player, already: !already} : player)
    )

    onNameHandler(name)
    //onChange(props)
    //axios.get 으로 받아온 데이터를 setPlayerList로 선수 리스트
    //여기서 받은 프롭스로 변경된 데이터 업데이트
    //axios.post할때 playerList 보내면됨
  };
  // const onChange = (props) => {
  //   const {id, name, already} = props
  //   setPlayerList(playerList.map((player) =>
  //   player.id === id ? { ...player, already: !already} : player)
  //   )
  // }

  const [Status, SetStatus] = useState(true)

  const onStatusHandler = () => {
    SetStatus(!Status)
  }
  
  const readDB = () => {
    if(Status){
      console.log("read")
      axios.get('/api/readUser') // res = axios 이런식으로 해서 res를 가지고 있어야됨 방법 찾아보자
      .then(res => {
        console.log(res.data)
        // const name = res.data.UserName
        // const x = res.data.x
        // const y = res.data.y
        // console.log(name,x,y)
      })
      console.log("포메이션 원에 위에서 받은 선수 데이터 넣어주기")
    } else{
      console.log("send")
      let body = {
        Status: Status,
        first_Position: Content1 //첫번째 요소 포지션 
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

  const [Name, SetName] = useState("")

  const onNameHandler = (props) => {
    SetName(props)
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
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onContextMenu={handleClick}
          >
            <div>{Content1}</div>
            <div>{Name}</div>
          </Button>
        </div>

      </Draggable>
        
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
        {playerList.map((player, idx) => {
          if(player.already === false){
            return (
              <MenuItem 
                onClick={() => handleClose(player)}
                //onClick={() => onChange(player)} 
                key={idx}
              >
                {player.name}
              </MenuItem>
            )
          }
        })}
      </Menu>

      {/* <MenuItem onClick={handleClose}>My account</MenuItem>
      <MenuItem onClick={handleClose}>Logout</MenuItem> */}


      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 380, y: 80}}
        onDrag = {(e, data) => onDragHandler2(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
      >
        <div className="move">
          <div>{Content2}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 25, y: 280}}
        onDrag = {(e, data) => onDragHandler3(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
      >
        <div className="move">
          <div>{Content3}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        defaultPosition={{ x: 160, y: 360 }}
        onDrag = {(e, data) => onDragHandler4(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
      >
        <div className="move">
          <div>{Content4}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 350, y: 360}}
        onDrag = {(e, data) => onDragHandler5(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
      >
        <div className="move">
          <div>{Content5}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 500, y: 280}}
        onDrag = {(e, data) => onDragHandler6(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
      >
        <div className="move">
          <div>{Content6}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 30, y: 580}}
        onDrag = {(e, data) => onDragHandler7(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
      >
        <div className="move">
          <div>{Content7}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 160, y: 660}}
        onDrag = {(e, data) => onDragHandler8(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
      >
        <div className="move">
          <div>{Content8}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 350, y: 660}}
        onDrag = {(e, data) => onDragHandler9(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
      >
        <div className="move">
          <div>{Content9}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 485, y: 580}}
        onDrag = {(e, data) => onDragHandler10(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
      >
        <div className="move">
          <div>{Content10}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={true} 
        defaultPosition={{x: 260, y: 790}}
      >
        <div className="GK">
          <div>GK</div>
        </div>
      </Draggable>
    </div>
  )
}


export default Formation