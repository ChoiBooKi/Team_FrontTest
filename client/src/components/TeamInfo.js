import React, { useState, useRef, useEffect }  from 'react';
import Avatar from '@mui/material/Avatar';
import "./TeamInfo.css"
import axios from 'axios';

function TeamInfo () {
  const [Image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")//기본이미지
  const [TeamInfo, SetTeamInfo] = useState()
  const [Status, SetStatus] = useState(true)
  const fileInput = useRef(null)

  // useEffect(axios.get으로 팀인포 불러와야됨)
  useEffect(async() => { 
    const res = await axios.get("/api/teamInfo")
    SetTeamInfo(res.data)
    console.log(res.data)
  }, []);
  console.log(TeamInfo && TeamInfo.leader)
  const onChange = (e) => {
    if(e.target.files[0]){
      setImage(e.target.files[0])
    }else{ //업로드 취소할 시
      setImage("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
      return
    }
    //화면에 프로필 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2){
        setImage(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  const onStatusHandler = () => {
    SetStatus(!Status)
    if(Status === false){
      console.log('편집완료 누름')
      // axios.post로 변경된거 보내야됨
    } else {
      console.log('편집누름')
      // axios.get으로 받아와야됨
    }
  }

  //팀소개 글자수제한, 팀장, 팀 등록일, 총 선수 수, 연령대, 활동 지역
  return(
    <div className='body' >
      {/* <button onClick={ () => {
          onStatusHandler()
      }}>
        {Status ? "편집" : "편집 완료"}
      </button>
      <h1>{TeamInfo && TeamInfo[0].teamname}</h1>
      <Avatar 
        className='avatar'
        alt="팀이미지" 
        src={Image} 
        sx={{ width: 200, height: 200 }} 
        onClick={()=>{fileInput.current.click()}}/>
      <input 
        className='input'
 	      type='file' 
    	  style={{display:'none'}}
        accept='image/jpg,impge/png,image/jpeg' 
        name='profile_img'
        onChange={onChange}
        ref={fileInput}/>
      <div className='teaminfo'>
        <h2 style={{marginRight:"50%", marginTop:"10%"}}>팀 소개</h2>
        <textarea 
          maxLength="200" 
          value={TeamInfo && TeamInfo[0].intro} //벨류라서 변경이 안됨
          disabled={Status}
          style={{resize: "none", width: "400px", marginLeft: "100px", border: "2px solid black",   borderRadius:"10px"}}
          rows="6"> */}
          {/* {TeamInfo && TeamInfo.intro} */}
        {/* </textarea>
        <div style={{display:"flex"}}> */}
          {/* 각각 가로로 보이게 해야됨 지금너무 야매스타일 */}
          {/* <h2 style={{margin:"5%", marginLeft:"17%"}}>팀장</h2>
          <div style={{marginTop:"5.5%"}}>{TeamInfo && TeamInfo[0].leader}</div>
        </div>
        <div style={{display:"flex"}}>
          <h2 style={{margin:"5%", marginLeft:"17%"}}>팀 등록일</h2>
          <p style={{marginTop:"5.5%"}}>{TeamInfo && TeamInfo[0].date}</p>
        </div>
        <div style={{display:"flex"}}>
          <h2 style={{margin:"5%", marginLeft:"17%"}}>총 선수 수</h2>
          <p style={{marginTop:"5.5%"}}>{TeamInfo && TeamInfo[0].numofplayer}</p>
        </div>
        <div style={{display:"flex"}}>
          <h2 style={{margin:"5%", marginLeft:"17%"}}>연령대</h2>
          <p style={{marginTop:"5.5%"}}>{TeamInfo && TeamInfo[0].age}</p>
        </div>
        <div style={{display:"flex"}}>
          <h2 style={{margin:"5%", marginLeft:"17%"}}>활동지역</h2>
          <p style={{marginTop:"5.5%"}}>{TeamInfo && TeamInfo[0].region}</p>
        </div> 
      </div> */}
    </div>
  )
}
export default TeamInfo