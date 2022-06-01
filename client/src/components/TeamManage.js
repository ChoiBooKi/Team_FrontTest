import React from 'react';
// import { useEffect } from 'react';
// import axios from 'axios';
import Formation from "./Formation"
import List from "./List"
import TeamInfo from './TeamInfo';
// import ResponsiveAppBar from "./Appbar"
// import { styled } from "@mui/material/styles";
// import { red, green, purple, blue } from "@mui/material/colors";
import './TeamManage.css'

function TeamManage () {
  
  // const [a, seta] = useState()
  // useEffect(async () => {//페이지 들어가자마자 DB에서 포지션, 선수 정보 받아오고 각 원에 이름 넣어주기
  //   const res = await axios.get("/api/readUser")
  //   seta(res.data)
  // }, [])
  // console.log(a)
  // const Root = styled("div")(({ theme }) => ({
  //   padding: theme.spacing(1),
  //   [theme.breakpoints.down("md")]: {
  //     backgroundColor: red[500],
  //   },
  //   [theme.breakpoints.up("md")]: {
  //     backgroundColor: blue[500],
  //     flexDirection: "column",
  //   },
  //   [theme.breakpoints.up("lg")]: {
  //     backgroundColor: green[500],
  //     color: red,
  //   },
  // }));

  return(
    // <div style={{ display: "flex", justifyContent: "space-evenly" }}> 
    // 요소간 간격 동일하게 맞춰줌
    <div className='TeamManage'>
      {/* <Root className="box"> */}
      <div className="box">
        {<List />}
        {<Formation />}
        {/* 포메이션은 살려두고 포메이션 버튼으로 눌러서 변경하는 방식으로 변경 */}
        {<TeamInfo />}
      {/* </Root> */}
      </div>
    </div>
  )
}

export default TeamManage