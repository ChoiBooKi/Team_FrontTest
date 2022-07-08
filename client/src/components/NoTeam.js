import React, { useState, useRef, useEffect }  from 'react';
import axios from 'axios';

function NoTeam () {
  
  const onClickHandler = (e) => {
    console.log(e.currentTarget.id)
    if(e.currentTarget.id === 'make'){
      //팀 생성하는 곳으로 route
    }else if (e.currentTarget.id === 'register'){
      //팀 가입하는 곳으로, 즉 팀 리스트로 route
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