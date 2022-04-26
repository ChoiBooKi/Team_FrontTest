import React, { useState }  from 'react';
import "./Formation.css";
import Draggable from 'react-draggable';
import axios from 'axios';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import { useEffect } from 'react';

function Formation (props) {
  const [playerList, setPlayerList] = useState(null);//선수 이름, 선호 포지션, 등번호, 배치되어있는지 등
  const [PositionList, SetPositionList] = useState(null)//원 번호, 원의 좌표, 원에 등록되어있던 선수 등
  const [anchorEl, setAnchorEl] = useState(null); //리스트 띄울지 안띄울지
  const [buttonNum, setbuttonNum] = useState() //각 원의 인덱스를 의미
  const open = Boolean(anchorEl); //리스트 띄우고 끄고
  const handleClick = (event) => { //리스트 띄우고, 선택한 원의 번호 저장
    setAnchorEl(event.currentTarget);
    setbuttonNum(event.currentTarget.id)
    event.preventDefault();//브라우저 우클릭을 막아준다.
  };
  const handleClose = () => {//리스트 끄기
    setAnchorEl();
  };

  const [Status, SetStatus] = useState(true)

  const onStatusHandler = () => {//편집 버튼 누르면 상태 변화
    SetStatus(!Status)
  }

  useEffect(async () => {//페이지 들어가자마자 DB에서 포지션, 선수 정보 받아오고 각 원에 이름 넣어주기
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
  }, [])

  const sendDB = () => {//DB에 변경된 정보 보내기
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

  const trackPos = (e, data) => {//원이 멈췄을 때 불리는 함수, 변경된 원의 좌표값 각 원 정보에 저장
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
  //각 원의 현재 포지션
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
  
  //각 원의 현재 등록된 선수의 이름
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

  //리스트에서 선택된 선수를 원에 띄우는 함수
  const onNameHandler = ({_id, id, name, already, Change}) => {
    if(window.confirm("선택한 선수와 변경하시겠습니까?")){
      setPlayerList((prev) => prev.map((player) => player.id === id ? { ...player, already: !already} : player))
      //현재 등록되어있던 선수를 다시 비등록으로 변경해주는 로직
      switch(buttonNum){
        case "button1" :
          //if(프롭스로 들어온 선호 포지션과 현재 원의 Content가 맞지 않으면 window.confirm 실행)
          SetPositionList(PositionList.map((position) =>//각 원에 어떤 선수가 배치되어 있는지 포지션 리스트에 저장
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
  }

  // const [Up, SetUp] = useState(0)
  // const [Mid, SetMid] = useState(0)
  // const [Down, SetDown] = useState(0)

  // const onFormationHandler = (data) => {
  //   if(PositionList[0].y<185){
  //     if(data.y>185 && data.y< 560){
  //       SetUp(Up-1)
  //       SetMid(Mid+1)
  //     }
  //   } else{
  //     if (data.y<185){
  //       SetUp(Up+1)
  //     }
  //   }
  //   if(PositionList[0].y>185 && PositionList[0].y<560){
  //     if(data.y > 560){
  //       SetMid(Mid - 1)
  //       SetDown(Down + 1)
  //     }
  //   } else {
  //     SetMid(Mid+1)
  //     SetDown(Down - 1)
  //   }
  // }
  
  // console.log(Up, Mid, Down)
  //포지션 변경해주는 핸들러
  const onContentHandler1 = (props) => {
    SetContent1(props)
  }
  //현재 원의 좌표값에 따라 포지션을 변경
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
                {player.id}
                {/* {player.id} -> 포지션으로 바꿔주면 됨 */}
              </MenuItem>
            )
          }
        })}
      </Menu>

      {PositionList &&
        <Draggable 
          disabled={Status}
          defaultPosition={{x: PositionList&&PositionList[0].x, y:PositionList&&PositionList[0].y}}
          onDrag = {(e, data) => {
            onDragHandler1(data)
            //onFormationHandler(data)
          }}
          bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
          onStop={(e, data) => {
            trackPos(e, data)
            //onFormationHandler(data)
          }}
        >
          <div className="hexagon">
              <Button className="button"
                disabled={Status}
                id="button1"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onContextMenu={(e) => handleClick(e)}
              >
                <div id="button1">{Content1}<br/>{playerList && playerList[0].id}<br/>{Name1}</div>
              </Button>
          </div>
        </Draggable>
      }

      {PositionList &&
        <Draggable 
          disabled={Status} 
          defaultPosition={{x: PositionList&&PositionList[1].x, y: PositionList&&PositionList[1].y}}
          onDrag = {(e, data) => onDragHandler2(data)}
          bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
          onStop={(e, data) => trackPos(e, data)}
        >
          <div className="hexagon">
            <Button className="button"
              disabled={Status}
              id="button2"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onContextMenu={handleClick}
            >
              <div id="button2">{Content2}<br/>{playerList && playerList[1].id}<br/>{Name2}</div>
            </Button>
          </div>
        </Draggable>
      }

      {PositionList &&
        <Draggable 
          disabled={Status}
          defaultPosition={{x: PositionList&&PositionList[2].x, y: PositionList&&PositionList[2].y}}
          onDrag = {(e, data) => onDragHandler3(data)}
          bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
          onStop={(e, data) => trackPos(e, data)}
        >
          <div className="hexagon">
            <Button className="button"
              disabled={Status}
              id="button3"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onContextMenu={handleClick}
            >
              <div id="button3">{Content3}<br/>{playerList && playerList[2].id}<br/>{Name3}</div>
            </Button>
          </div>
        </Draggable>
      }

      {PositionList &&
        <Draggable 
          disabled={Status}
          defaultPosition={{x: PositionList&&PositionList[3].x, y: PositionList&&PositionList[3].y}}
          onDrag = {(e, data) => onDragHandler4(data)}
          bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
          onStop={(e, data) => trackPos(e, data)}
        >
          <div className="hexagon">
            <Button className="button"
              disabled={Status}
              id="button4"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onContextMenu={handleClick}
            >
              <div id="button4">{Content4}<br/>{playerList && playerList[3].id}<br/>{Name4}</div>
            </Button>
          </div>
        </Draggable>
      }

      {PositionList &&
        <Draggable 
          disabled={Status}
          defaultPosition={{x: PositionList&&PositionList[4].x, y: PositionList&&PositionList[4].y}}
          onDrag = {(e, data) => onDragHandler5(data)}
          bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
          onStop={(e, data) => trackPos(e, data)}
        >
          <div className="hexagon">
            <Button className="button"
              disabled={Status}
              id="button5"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onContextMenu={handleClick}
            >
              <div id="button5">{Content5}<br/>{playerList && playerList[4].id}<br/>{Name5}</div>
            </Button>
          </div>
        </Draggable>
      }

      {PositionList &&
        <Draggable 
          disabled={Status}
          defaultPosition={{x: PositionList&&PositionList[5].x, y: PositionList&&PositionList[5].y}}
          onDrag = {(e, data) => onDragHandler6(data)}
          bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
          onStop={(e, data) => trackPos(e, data)}
        >
          <div className="hexagon">
            <Button className="button"
              disabled={Status}
              id="button6"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onContextMenu={handleClick}
            >
              <div id="button6">{Content6}<br/>{playerList && playerList[5].id}<br/>{Name6}</div>
            </Button>
          </div>
        </Draggable>
      }

      {PositionList &&
        <Draggable 
          disabled={Status}
          defaultPosition={{x: PositionList&&PositionList[6].x, y: PositionList&&PositionList[6].y}}
          onDrag = {(e, data) => onDragHandler7(data)}
          bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
          onStop={(e, data) => trackPos(e, data)}
        >
          <div className="hexagon">
            <Button className="button"
              disabled={Status}
              id="button7"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onContextMenu={handleClick}
            >
              <div id="button7">{Content7}<br/>{playerList && playerList[6].id}<br/>{Name7}</div>
            </Button>
          </div>
        </Draggable>
      }

      {PositionList &&
        <Draggable 
          disabled={Status}
          defaultPosition={{x: PositionList&&PositionList[7].x, y: PositionList&&PositionList[7].y}}
          onDrag = {(e, data) => onDragHandler8(data)}
          bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
          onStop={(e, data) => trackPos(e, data)}
        >
          <div className="hexagon">
            <Button className="button"
              disabled={Status}
              id="button8"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onContextMenu={handleClick}
            >
              <div id="button8">{Content8}<br/>{playerList && playerList[7].id}<br/>{Name8}</div>
            </Button>
          </div>
        </Draggable>
      }

      {PositionList &&
        <Draggable 
          disabled={Status} 
          defaultPosition={{x: PositionList&&PositionList[8].x, y: PositionList&&PositionList[8].y}}
          onDrag = {(e, data) => onDragHandler9(data)}
          bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
          onStop={(e, data) => trackPos(e, data)}
        >
          <div className="hexagon">
            <Button className="button"
              disabled={Status}
              id="button9"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onContextMenu={handleClick}
            >
              <div id="button9">{Content9}<br/>{playerList && playerList[8].id}<br/>{Name9}</div>
            </Button>
          </div>
        </Draggable>
      }

      {PositionList &&
        <Draggable 
          disabled={Status} 
          defaultPosition={{x: PositionList&&PositionList[9].x, y: PositionList&&PositionList[9].y}}
          onDrag = {(e, data) => onDragHandler10(data)}
          bounds = {{top: 0, left: 0, right: 520, bottom: 740}}
          onStop={(e, data) => trackPos(e, data)}
        >
          <div className="hexagon">
            <Button className="button"
              disabled={Status}
              id="button10"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onContextMenu={handleClick}
            >
              <div id="button10">{Content10}<br/>{playerList && playerList[5].id}<br/>{Name10}</div>
            </Button>
          </div>
        </Draggable>
      }

      {PositionList &&
        <Draggable 
          disabled={true} 
          defaultPosition={{x: PositionList&&PositionList[10].x, y: PositionList&&PositionList[10].y}}
        >
          <div className="hexagon">
            <Button className="buttonGK"
              disabled={Status}
              id="button11"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onContextMenu={handleClick}
              //color = "white"
            >
              <div id="button11">GK<br/>{playerList && playerList[5].id}<br/>{Name11}</div>
            </Button>
          </div>        
        </Draggable>
      }
    </div>
  )
}


export default Formation