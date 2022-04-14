import React, { useState }  from 'react';
import "./Formation.css"
import Draggable from 'react-draggable';

function Formation () {
  const [Status, SetStatus] = useState(true)
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [position2, setPosition2] = useState({ x: 0, y: 0 });
  const onStatusHandler = () => {
    SetStatus(!Status)
  }
  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y }); 
  };

  const trackPos2 = (data) => {
    setPosition2({ x: data.x, y: data.y }); 
  };
  return(
    <div className="formation">
      <button onClick={onStatusHandler}>
        {Status ? "편집" : "편집 완료"}
      </button>
      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 0, y: 0}}
        onDrag={(e, data) => trackPos(data)}
        bounds = {{top: 0, left: -280, right: 280, bottom: 840}}
      >
        <div className="move">
          <div>1</div>
          <div>x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)}</div> 
        </div>
      </Draggable>
      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 0, y: 0}}
        onDrag={(e, data) => trackPos2(data)}
        bounds = {{top: -50, left: -280, right: 280, bottom: 790}}
        >
        <div className="move">
          <div>2</div>
          <div>x: {position2.x.toFixed(0)}, y: {position2.y.toFixed(0)}</div> 
        </div>
      </Draggable>
      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 0, y: 0}}
        bounds = {{top: -100, left: -280, right: 280, bottom: 740}}
        >
        <div className="move">
          3
        </div>
      </Draggable>
      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 0, y: 0}}
        bounds = {{top: -150, left: -280, right: 280, bottom: 690}}
        >
        <div className="move">
          4
        </div>
      </Draggable>
      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 0, y: 0}}
        bounds = {{top: -200, left: -280, right: 280, bottom: 640}}
        >
        <div className="move">
          5
        </div>
      </Draggable>
      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 0, y: 0}}
        bounds = {{top: -250, left: -280, right: 280, bottom: 590}}
        >
        <div className="move">
          6
        </div>
      </Draggable>
      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 0, y: 0}}
        bounds = {{top: -300, left: -280, right: 280, bottom: 540}}
        >
        <div className="move">
          7
        </div>
      </Draggable>
      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 0, y: 0}}
        bounds = {{top: -350, left: -280, right: 280, bottom: 490}}
        >
        <div className="move">
          8
        </div>
      </Draggable>
      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 0, y: 0}}
        bounds = {{top: -400, left: -280, right: 280, bottom: 440}}
        >
        <div className="move">
          9
        </div>
      </Draggable>
      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 0, y: 0}}
        bounds = {{top: -450, left: -280, right: 280, bottom: 390}}
        >
        <div className="move">
          10
        </div>
      </Draggable>
      <Draggable 
        disabled={Status} 
        defaultPosition={{x: 0, y: 0}}
        bounds = {{top: -500, left: -280, right: 280, bottom: 340}}
        >
        <div className="move">
          11
        </div>
      </Draggable>
    </div>
  )
}

export default Formation