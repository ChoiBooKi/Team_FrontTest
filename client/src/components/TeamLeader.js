import React from "react";

function TeamLeader() {

  return(
    <>
      <span>팀장이십니까?</span>
      <input type="radio" name="answer" value="YES" />네
      <input type="radio" name="answer" value="NO" />아니오
    </>
  )
}

export default TeamLeader