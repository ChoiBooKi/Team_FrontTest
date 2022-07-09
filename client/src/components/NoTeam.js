import React, { useState, useRef, useEffect }  from 'react';
import axios from 'axios';
import MakeTeam from './MakeTeam'
import { useNavigate } from "react-router-dom";

function NoTeam () {
  const navigate = useNavigate()
  navigate('/make')
  const onClickHandler = (e) => {
    console.log(e.currentTarget.id)
    if(e.currentTarget.id === 'make'){
      //팀 생성하는 곳으로 route
      navigate('/make')
    }else if (e.currentTarget.id === 'register'){
      //팀 가입하는 곳으로, 즉 팀 리스트로 route
      navigate('/teamlist')
    }
  }

  return(
    <div className='box' >
      <div>가입한 팀이 없습니다.</div>
      <button id = 'make' onClick={onClickHandler}>팀 생성하기</button>
      <button id = 'register' onClick={onClickHandler}>팀 가입하기</button>
    </div>
  )
}
export default NoTeam