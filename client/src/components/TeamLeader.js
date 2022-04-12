import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

function TeamLeader() {
  const navigate = useNavigate()
  const [Leader, setLeader] = useState("")
  const onLeaderHandler = (event) => {
    setLeader(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if(Leader === "YES"){
      navigate('/teamextrainfo')
    } else if (Leader === "NO"){
      navigate('/extrainfo')
    } else alert("선택해")
  }
  
  return(
    <>
      <span>팀장이십니까?</span>
      <input type="radio" name="answer" value="YES" onChange={onLeaderHandler}/>네
      <input type="radio" name="answer" value="NO" onChange={onLeaderHandler}/>아니오
      <button type="submit" onClick={onSubmitHandler}>다음</button>
    </>
  )
}

export default TeamLeader