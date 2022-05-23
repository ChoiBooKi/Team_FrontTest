import React from 'react';
// import { useEffect } from 'react';
// import axios from 'axios';
import Formation from "./Formation"
import List from "./List"
import TeamInfo from './TeamInfo';
import ResponsiveAppBar from "./Appbar"
import './TeamManage.css'

function TeamManage () {
  
  // const [a, seta] = useState()
  // useEffect(async () => {//페이지 들어가자마자 DB에서 포지션, 선수 정보 받아오고 각 원에 이름 넣어주기
  //   const res = await axios.get("/api/readUser")
  //   seta(res.data)
  // }, [])
  // console.log(a)

  return(
    // <div style={{ display: "flex", justifyContent: "space-evenly" }}> 
    // 요소간 간격 동일하게 맞춰줌
    <div className='TeamManage'>
      <ResponsiveAppBar/>
      <div className="box">
        {<TeamInfo />}
        {<Formation />}
        {<List />}
      </div>
    </div>
  )
}

export default TeamManage