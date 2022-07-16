import React, { useState, useRef, useEffect }  from 'react';
import axios from 'axios';
import Calendar from './Calendar'
import { useNavigate } from "react-router-dom";

function NoCalendar () {
  const navigate = useNavigate()
  // navigate('/make')
  const onClickHandler = (e) => {
    //사용자한테 input으로 캘린더 id값 받아서 버튼 클릭하면 백한테
    //push 하고 db에 캘린더 id 있는 사람들만 캘린더로 라우터되게
  }

  return(
    <div className='box' >
      <div>생성한 캘린더가 없습니다</div>
      <button id = 'make' onClick={onClickHandler}>팀 생성하기</button>
      <button id = 'register' onClick={onClickHandler}>팀 가입하기</button>
    </div>
  )
}
export default NoCalendar