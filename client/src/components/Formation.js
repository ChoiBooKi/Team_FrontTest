import React, { useState }  from 'react';
import "./Formation.css";
import Draggable from 'react-draggable';
import axios from 'axios';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import { playersList } from './data';
import { positionsList } from './data2';

function Formation (props) {
  const [playerList, setPlayerList] = useState(null);
  const [PositionList, SetPositionList] = useState(null)
  const [anchorEl, setAnchorEl] = useState(null);
  const [buttonNum, setbuttonNum] = useState()
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setbuttonNum(event.currentTarget.id)
    event.preventDefault();//브라우저 우클릭을 막아준다.
  };
  const handleClose = () => {
    setAnchorEl();
  };

  const [Status, SetStatus] = useState(true)

  const onStatusHandler = () => {
    SetStatus(!Status)
  }

  useEffect(async () => { //목업 데이터 먼저 넣고 화면 띄운 뒤에 useEffect로 setPlayerList 업데이트
    //position도 받아와야됨
    const res1 = await axios.get("api/readPosition")
    SetPositionList(res1.data)
    const res = await axios.get("/api/readUser")
    setPlayerList(res.data)
    SetName1(res1.data[0].name)
    SetName2(res1.data[1].name)
    SetName3(res1.data[2].name)
    SetName4(res1.data[3].name)
    SetName5(res1.data[4].name)
    SetName6(res1.data[5].name)
    SetName7(res1.data[6].name)
    SetName8(res1.data[7].name)
    SetName9(res1.data[8].name)
    SetName10(res1.data[9].name)
    SetName11(res1.data[10].name)
    Setxy1({x: res1.data[0].x, y: res1.data[0].y})
    Setxy2({x: res1.data[1].x, y: res1.data[1].y})
    Setxy3({x: res1.data[2].x, y: res1.data[2].y})
    Setxy4({x: res1.data[3].x, y: res1.data[3].y})
    Setxy5({x: res1.data[4].x, y: res1.data[4].y})
    Setxy6({x: res1.data[5].x, y: res1.data[5].y})
    Setxy7({x: res1.data[6].x, y: res1.data[6].y})
    Setxy8({x: res1.data[7].x, y: res1.data[7].y})
    Setxy9({x: res1.data[8].x, y: res1.data[8].y})
    Setxy10({x: res1.data[9].x, y: res1.data[9].y})
    Setxy11({x: res1.data[10].x, y: res1.data[10].y})
  }, [])

  const sendDB = () => {
    if(Status === false){
      // let body = {
      //   playerList, //첫번째 요소 포지션 
      //   PositionList
      // }
      axios.post('/api/sendUser', playerList)
      .then(res => {
        console.log(res.data)
      })
    } else {
      axios.get('/api/readUser')
      .then(res => setPlayerList(res.data))
    }
  }
  // 포지션 위치 값 보내는 방법
  const trackPos = (e, data) => {
    console.log(e.target.id)
    switch(e.target.id){
      case "button1" :
        return(
          SetPositionList(PositionList.map((position) =>
            position.circle === 1 ? { ...position, x: data.x, y: data.y} : position))
        )
      case "button2" :
        return(
          SetPositionList(PositionList.map((position) =>
            position.circle === 2 ? { ...position, x: data.x, y: data.y} : position))
        )
      case "button3" :
        return(
          SetPositionList(PositionList.map((position) =>
            position.circle === 3 ? { ...position, x: data.x, y: data.y} : position))
        )
      case "button4" :
        return(
          SetPositionList(PositionList.map((position) =>
            position.circle === 4 ? { ...position, x: data.x, y: data.y} : position))
        )
      case "button5" :
        return(
          SetPositionList(PositionList.map((position) =>
            position.circle === 5 ? { ...position, x: data.x, y: data.y} : position))
        )
      case "button6" :
        return(
          SetPositionList(PositionList.map((position) =>
            position.circle === 6 ? { ...position, x: data.x, y: data.y} : position))
        )
      case "button7" :
        return(
          SetPositionList(PositionList.map((position) =>
            position.circle === 7 ? { ...position, x: data.x, y: data.y} : position))
        )
      case "button8" :
        return(
          SetPositionList(PositionList.map((position) =>
            position.circle === 8 ? { ...position, x: data.x, y: data.y} : position))
        )
      case "button9" :
        return(
          SetPositionList(PositionList.map((position) =>
            position.circle === 9 ? { ...position, x: data.x, y: data.y} : position))
        )
      case "button10" :
        return(
          SetPositionList(PositionList.map((position) =>
            position.circle === 10 ? { ...position, x: data.x, y: data.y} : position))
        )
      default :
        return null
    }
  };

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

  const [Name1, SetName1] = useState()
  const [Name2, SetName2] = useState()
  const [Name3, SetName3] = useState()
  const [Name4, SetName4] = useState()
  const [Name5, SetName5] = useState()
  const [Name6, SetName6] = useState()
  const [Name7, SetName7] = useState()
  const [Name8, SetName8] = useState()
  const [Name9, SetName9] = useState()
  const [Name10, SetName10] = useState()
  const [Name11, SetName11] = useState()

  const [xy1, Setxy1] = useState()
  const [xy2, Setxy2] = useState()
  const [xy3, Setxy3] = useState()
  const [xy4, Setxy4] = useState()
  const [xy5, Setxy5] = useState()
  const [xy6, Setxy6] = useState()
  const [xy7, Setxy7] = useState()
  const [xy8, Setxy8] = useState()
  const [xy9, Setxy9] = useState()
  const [xy10, Setxy10] = useState()
  const [xy11, Setxy11] = useState()

  const onNameHandler = ({_id, id, name, already, Change}) => {
    setPlayerList((prev) => prev.map((player) => player.id === id ? { ...player, already: !already} : player))
    switch(buttonNum){
      case "button1" :
        SetPositionList(PositionList.map((position) =>
        position.circle === 1 ? { ...position, name: name} : position))
        if(Name1 === null){ 
          return SetName1(name)
        } else {
            setPlayerList((prev) => prev.map((player) => player.name === Name1 ? { ...player, already: false} : player))
          return SetName1(name)
        }
      case "button2" :
        SetPositionList(PositionList.map((position) =>
        position.circle === 2 ? { ...position, name: name} : position))
        if(Name2 === null){ 
          return SetName2(name)
        } else {
            setPlayerList((prev) => prev.map((player) => player.name === Name2 ? { ...player, already: false} : player))
          return SetName2(name)
        }
      case "button3" :
        SetPositionList(PositionList.map((position) =>
        position.circle === 3 ? { ...position, name: name} : position))
        if(Name3 === null){ 
          return SetName3(name)
        } else {
            setPlayerList((prev) => prev.map((player) => player.name === Name3 ? { ...player, already: false} : player))
          return SetName3(name)
        }
      case "button4" :
        SetPositionList(PositionList.map((position) =>
        position.circle === 4 ? { ...position, name: name} : position))
        if(Name4 === null){ 
          return SetName4(name)
        } else {
            setPlayerList((prev) => prev.map((player) => player.name === Name4 ? { ...player, already: false} : player))
          return SetName4(name)
        }
      case "button5" :
        SetPositionList(PositionList.map((position) =>
        position.circle === 5 ? { ...position, name: name} : position))
        if(Name5 === null){ 
          return SetName5(name)
        } else {
            setPlayerList((prev) => prev.map((player) => player.name === Name5 ? { ...player, already: false} : player))
          return SetName5(name)
        }
      case "button6" :
        SetPositionList(PositionList.map((position) =>
        position.circle === 6 ? { ...position, name: name} : position))
        if(Name6 === null){ 
          return SetName6(name)
        } else {
            setPlayerList((prev) => prev.map((player) => player.name === Name6 ? { ...player, already: false} : player))
          return SetName6(name)
        }
      case "button7" :
        SetPositionList(PositionList.map((position) =>
        position.circle === 7 ? { ...position, name: name} : position))
        if(Name7 === null){ 
          return SetName7(name)
        } else {
            setPlayerList((prev) => prev.map((player) => player.name === Name7 ? { ...player, already: false} : player))
          return SetName7(name)
        }
      case "button8" :
        SetPositionList(PositionList.map((position) =>
        position.circle === 8 ? { ...position, name: name} : position))
        if(Name8 === null){ 
          return SetName8(name)
        } else {
            setPlayerList((prev) => prev.map((player) => player.name === Name8 ? { ...player, already: false} : player))
          return SetName8(name)
        }
      case "button9" :
        SetPositionList(PositionList.map((position) =>
        position.circle === 9 ? { ...position, name: name} : position))
        if(Name9 === null){ 
          return SetName9(name)
        } else {
            setPlayerList((prev) => prev.map((player) => player.name === Name9 ? { ...player, already: false} : player))
          return SetName9(name)
        }
      case "button10" :
        SetPositionList(PositionList.map((position) =>
        position.circle === 10 ? { ...position, name: name} : position))
        if(Name10 === null){ 
          return SetName10(name)
        } else {
            setPlayerList((prev) => prev.map((player) => player.name === Name10 ? { ...player, already: false} : player))
          return SetName10(name)
        } 
      case "button11" :
        SetPositionList(PositionList.map((position) =>
        position.circle === 11 ? { ...position, name: name} : position))
        if(Name11 === null){ 
          return SetName11(name)
        } else {
            setPlayerList((prev) => prev.map((player) => player.name === Name11 ? { ...player, already: false} : player))
          return SetName11(name)
        }
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
        sendDB()
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
        {playerList && playerList.map((player) => {
          if(player.already === false){
            return (
              <MenuItem
                onClick={() => {
                  handleClose()
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
        //defaultPosition={{x: 145, y: 80}}
        //defaultPosition={{x: xy1&&xy1.x, y: xy1&&xy1.y}}//DB에서 받은 데이터로 초기포지션
        defaultPosition={{x: positionsList[0].x, y:positionsList[0].y}}
        onDrag = {(e, data) => onDragHandler1(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
        onStop={(e, data) => trackPos(e, data)}
        // 포지션 위치 값 보내는 방법
      >
        <div className="move">
          <Button className="button"
            disabled={Status}
            id="button1"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onContextMenu={(e) => handleClick(e)}
          >
            <div id="button1">{Content1}</div>
          </Button>
          <div id="button1">{Name1}</div>
        </div>

      </Draggable>

      <Draggable 
        disabled={Status} 
        //defaultPosition={{x: PositionList&&PositionList[1].x, y: PositionList&&PositionList[1].y}}
        //defaultPosition={{x: xy2&&xy2.x, y: xy2&&xy2.y}}
        onDrag = {(e, data) => onDragHandler2(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
        onStop={(e, data) => trackPos(e, data)}
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
            <div id="button2">{Content2}</div>
          </Button>
          <div id="button2">{Name2}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 25, y: 280}}
        //defaultPosition={{x: PositionList&&PositionList[2].x, y: PositionList&&PositionList[2].y}}
        //defaultPosition={{x: xy3&&xy3.x, y: xy3&&xy3.y}}
        onDrag = {(e, data) => onDragHandler3(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
        onStop={(e, data) => trackPos(e, data)}
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
            <div id="button3">{Content3}</div>
          </Button>
          <div id="button3">{Name3}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        defaultPosition={{ x: 160, y: 360 }}
        //defaultPosition={{x: PositionList&&PositionList[3].x, y: PositionList&&PositionList[3].y}}
        //defaultPosition={{x: xy4&&xy4.x, y: xy4&&xy4.y}}
        onDrag = {(e, data) => onDragHandler4(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
        onStop={(e, data) => trackPos(e, data)}
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
            <div id="button4">{Content4}</div>
          </Button>
          <div id="button4">{Name4}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        //defaultPosition={{x: 350, y: 360}}
        //defaultPosition={{x: PositionList&&PositionList[4].x, y: PositionList&&PositionList[4].y}}
        defaultPosition={{x: xy5&&xy5.x, y: xy5&&xy5.y}}
        onDrag = {(e, data) => onDragHandler5(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
        onStop={(e, data) => trackPos(e, data)}
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
            <div id="button5">{Content5}</div>
          </Button>
          <div id="button5">{Name5}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        //defaultPosition={{x: 500, y: 280}}
        //defaultPosition={{x: PositionList&&PositionList[5].x, y: PositionList&&PositionList[5].y}}
        defaultPosition={{x: xy6&&xy6.x, y: xy6&&xy6.y}}
        onDrag = {(e, data) => onDragHandler6(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
        onStop={(e, data) => trackPos(e, data)}
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
            <div id="button6">{Content6}</div>
          </Button>
          <div id="button6">{Name6}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        //defaultPosition={{x: 30, y: 580}}
        //defaultPosition={{x: PositionList&&PositionList[6].x, y: PositionList&&PositionList[6].y}}
        defaultPosition={{x: xy7&&xy7.x, y: xy7&&xy7.y}}
        onDrag = {(e, data) => onDragHandler7(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
        onStop={(e, data) => trackPos(e, data)}
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
            <div id="button7">{Content7}</div>
          </Button>
          <div id="button7">{Name7}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        //defaultPosition={{x: 160, y: 660}}
        //defaultPosition={{x: PositionList&&PositionList[7].x, y: PositionList&&PositionList[7].y}}
        defaultPosition={{x: xy8&&xy8.x, y: xy8&&xy8.y}}
        onDrag = {(e, data) => onDragHandler8(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
        onStop={(e, data) => trackPos(e, data)}
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
            <div id="button8">{Content8}</div>
          </Button>
          <div id="button8">{Name8}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        //defaultPosition={{x: 350, y: 660}}
        //defaultPosition={{x: PositionList&&PositionList[8].x, y: PositionList&&PositionList[8].y}}
        defaultPosition={{x: xy9&&xy9.x, y: xy9&&xy9.y}}
        onDrag = {(e, data) => onDragHandler9(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
        onStop={(e, data) => trackPos(e, data)}
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
            <div id="button9">{Content9}</div>
          </Button>
          <div id="button9">{Name9}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        //defaultPosition={{x: 485, y: 580}}
        //defaultPosition={{x: PositionList&&PositionList[9].x, y: PositionList&&PositionList[9].y}}
        defaultPosition={{x: xy10&&xy10.x, y: xy10&&xy10.y}}
        onDrag = {(e, data) => onDragHandler10(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
        onStop={(e, data) => trackPos(e, data)}
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
            <div id="button10">{Content10}</div>
          </Button>
          <div id="button10">{Name10}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={true} 
        //defaultPosition={{x: 260, y: 790}}
        //defaultPosition={{x: PositionList&&PositionList[10].x, y: PositionList&&PositionList[10].y}}
        defaultPosition={{x: xy11&&xy11.x, y: xy11&&xy11.y}}
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
            <div id="button11">GK</div>
          </Button>
          <div id="button11">{Name11}</div>
        </div>        
      </Draggable>
    </div>
  )
}


export default Formation