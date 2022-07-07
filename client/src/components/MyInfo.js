import React, { useState, useRef, useEffect }  from 'react';
import axios from 'axios';

function TeamInfo () {
  const [Info, SetInfo] = useState({
    userName: '',
    nickName: '',
    email: '',
    password: '',
    activityArea: '',
    position: '',
    gender: '',
    birthDate: '',
    isExpert: ''
  })

  const { userName, nickName, email, password, activityArea, position, gender, birthDate, isExpert } = Info
  
  // useEffect(axios.get으로 내정보 불러와야됨)
  useEffect(async() => { 
    // const res = await axios.get("/api/teamInfo")
    // SetTeamInfo(res.data)
    // SetTeamName(res.data[0].teamname)
    // SetIntro(res.data[0].intro)
  }, []);

  const onInfoHandler = (e) => {
    const { id, value } = e.target
    SetInfo({
      ...Info,
      [id] : value
    })
  }

  return(
    <div className='body' >
      <button className = 'btn' onClick={ () => {onStatusHandler()}}>
        {Status ? "편집" : "편집 완료"}
      </button>
      {/* <h1>{TeamInfo && TeamInfo[0].teamname}</h1> */}
      {Status ? <h3 className="teamname">{TeamName && TeamName}</h3> : <input disabled={Status} onChange={onTeamnameHandler} value={TeamName && TeamName} className="teamname1"></input>}
      {/* <input disabled={Status} value={TeamInfo && TeamInfo[0].teamname} className="teamname"></input> */}
      <Avatar 
        className='avatar'
        alt="팀이미지" 
        src={Image} 
        sx={{ width: '15vh', height: '15vh', marginTop:'-1.5vh', marginBottom:'-1.5vh' }} 
        onClick={()=>{fileInput.current.click()}}/>
      <input 
        className='input'
        disabled={Status}
 	      type='file' 
    	  style={{display:'none'}}
        accept='image/jpg,impge/png,image/jpeg' 
        name='profile_img'
        onChange={onChange}
        ref={fileInput}/>
      <div className='teaminfo'>
        <h3 style={{marginRight:"78%", marginTop:"10%"}}>팀 소개</h3>
        <textarea 
          maxLength="200" 
          value={Intro && Intro} //벨류라서 변경이 안됨
          onChange={onIntroHandler}
          disabled={Status}
          style={{resize: "none", width: "350px", border: "2px solid black",   borderRadius:"10px", width: "26vh"}}
          rows="4">
          {/* {TeamInfo && TeamInfo.intro} */}
        </textarea>
        <div style={{display:"flex"}}>
          <h3 style={{marginTop:"5%"}}>팀장</h3>
          <div style={{marginTop:"5.5%", marginLeft:"5%"}}>{TeamInfo && TeamInfo[0].leader}</div>
        </div>
        <div style={{display:"flex"}}>
          <h3>팀 등록일</h3>
          <p style={{marginTop:"0.5%", marginLeft:"5%"}}>{TeamInfo && TeamInfo[0].date}</p>
        </div>
        <div style={{display:"flex"}}>
          <h3>총 선수 수</h3>
          <p style={{marginTop:"0.5%", marginLeft:"5%"}}>{TeamInfo && TeamInfo[0].numofplayer}</p>
        </div>
        <div style={{display:"flex"}}>
          <h3>연령대</h3>
          <p style={{marginTop:"0.5%", marginLeft:"5%"}}>{TeamInfo && TeamInfo[0].age}</p>
        </div>
        {Status ? 
          <div style={{display:"flex"}}>
            <h3>활동지역</h3>
            <p style={{marginTop:"0.5%", marginLeft:"5%"}}>{TeamInfo && TeamInfo[0].region}</p>
          </div>
        : 
          <div style={{display:"flex"}}>
            <h3 style={{marginTop:"0.2%", marginRight: "20px"}}>활동지역</h3>
            <select onChange={onRegionHandler} value={Region} style={{width:"100px", height:"30px"}}>
              {regionList.map((item, id) => (
                <option value={item} key={id}>
                  {item}
                </option>
              ))}
            </select> 
          </div>

        }
      </div>
    </div>
  )
}
export default TeamInfo