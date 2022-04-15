import React, { useState, useEffect }  from 'react';
import "./Formation.css"
import Draggable from 'react-draggable';

function Formation () {
  const [Status, SetStatus] = useState(true)

  const onStatusHandler = () => {
    SetStatus(!Status)
  }
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y }); 
  };


  const [Content1, SetContent1] = useState("처음");
  const [Content2, SetContent2] = useState("처음2");
  const [Content3, SetContent3] = useState("처음3");
  const [Content4, SetContent4] = useState("처음4");
  const [Content5, SetContent5] = useState("처음5");
  const [Content6, SetContent6] = useState("처음6");
  const [Content7, SetContent7] = useState("처음7");
  const [Content8, SetContent8] = useState("처음8");
  const [Content9, SetContent9] = useState("처음9");
  const [Content10, SetContent10] = useState("처음10");
  const [Content11, SetContent11] = useState("처음11");

  const onContentHandler1 = (props) => {
    SetContent1(props)
  }
  const onStopHandler1 =(data) =>{
    if(data.y >100){
      onContentHandler1("SF")
    }
    if(data.y <100){
      onContentHandler1("처음")
    }
  }

  const onContentHandler2 = (props) => {
    SetContent2(props)
  }
  const onStopHandler2 =(data) =>{
    if(data.x>80 && data.y < 120 && data.x <450){
      onContentHandler2("ST")
    } else if(data.x<80 && data.y < 200){
      onContentHandler2("LW")
    } else if(data.x > 450 && data.y < 200){
      onContentHandler2("RW")
    }
    else {
      onContentHandler2("else")
    }
  }

  const onContentHandler3 = (props) => {
    SetContent3(props)
  }
  const onStopHandler3 =(data) =>{
    if(data.y >100){
      onContentHandler3("SF")
    }
    if(data.y <100){
      onContentHandler3("처음")
    }
  }

  const onContentHandler4 = (props) => {
    SetContent4(props)
  }
  const onStopHandler4 =(data) =>{
    if(data.y >100){
      onContentHandler4("SF")
    }
    if(data.y <100){
      onContentHandler4("처음")
    }
  }

  const onContentHandler5 = (props) => {
    SetContent5(props)
  }
  const onStopHandler5 =(data) =>{
    if(data.y >100){
      onContentHandler5("SF")
    }
    if(data.y <100){
      onContentHandler5("처음")
    }
  }

  const onContentHandler6 = (props) => {
    SetContent6(props)
  }
  const onStopHandler6 =(data) =>{
    if(data.y >100){
      onContentHandler6("SF")
    }
    if(data.y <100){
      onContentHandler6("처음")
    }
  }

  const onContentHandler7 = (props) => {
    SetContent7(props)
  }
  const onStopHandler7 =(data) =>{
    if(data.y >100){
      onContentHandler7("SF")
    }
    if(data.y <100){
      onContentHandler7("처음")
    }
  }

  const onContentHandler8 = (props) => {
    SetContent8(props)
  }
  const onStopHandler8 =(data) =>{
    if(data.y >100){
      onContentHandler8("SF")
    }
    if(data.y <100){
      onContentHandler8("처음")
    }
  }

  const onContentHandler9 = (props) => {
    SetContent9(props)
  }
  const onStopHandler9 =(data) =>{
    if(data.y >100){
      onContentHandler9("SF")
    }
    if(data.y <100){
      onContentHandler9("처음")
    }
  }

  const onContentHandler10 = (props) => {
    SetContent10(props)
  }
  const onStopHandler10 =(data) =>{
    if(data.y >100){
      onContentHandler10("SF")
    }
    if(data.y <100){
      onContentHandler10("처음")
    }
  }

  const onContentHandler11 = (props) => {
    SetContent11(props)
  }
  const onStopHandler11 =(data) =>{
    if(data.y >100){
      onContentHandler11("SF")
    }
    if(data.y <100){
      onContentHandler11("처음")
    }
  }


  return(
    <div className="formation">

      <button onClick={onStatusHandler}>
        {Status ? "편집" : "편집 완료"}
      </button>

      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 145, y: 80}}
        onDrag = {(e, data) => trackPos(data)}
        //onDrag = {(e, data) => onStopHandler1(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 815}}
      >
        <div className="move">
          <div>{Content1}</div>
          <div>x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)}</div> 

        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 380, y: 80}}
        onDrag = {(e, data) => onStopHandler2(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 815}}
        >
        <div className="move">
          <div>{Content2}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 25, y: 280}}
        onDrag = {(e, data) => onStopHandler3(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 815}}
        >
        <div className="move">
          <div>{Content3}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        defaultPosition={{ x: 160, y: 360 }}
        onDrag = {(e, data) => onStopHandler4(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 815}}
        >
        <div className="move">
          <div>{Content4}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 350, y: 360}}
        onDrag = {(e, data) => onStopHandler5(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 815}}
        >
        <div className="move">
          <div>{Content5}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 500, y: 280}}
        onDrag = {(e, data) => onStopHandler6(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 815}}
        >
        <div className="move">
          <div>{Content6}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 30, y: 580}}
        onDrag = {(e, data) => onStopHandler7(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 815}}
        >
        <div className="move">
          <div>{Content7}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 160, y: 660}}
        onDrag = {(e, data) => onStopHandler8(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 815}}
        >
        <div className="move">
          <div>{Content8}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 350, y: 660}}
        onDrag = {(e, data) => onStopHandler9(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 815}}
        >
        <div className="move">
          <div>{Content9}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 485, y: 580}}
        onDrag = {(e, data) => onStopHandler10(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 815}}
        >
        <div className="move">
          <div>{Content10}</div>
        </div>
      </Draggable>

      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 260, y: 790}}
        onDrag = {(e, data) => onStopHandler11(data)}
        bounds = {{top: 0, left: 0, right: 520, bottom: 815}}
        >
        <div className="move">
          <div>{Content11}</div>
        </div>
      </Draggable>
    </div>
  )
}

export default Formation