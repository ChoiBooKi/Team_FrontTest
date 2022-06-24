import React, { useState, useRef, useEffect }  from 'react';
import Avatar from '@mui/material/Avatar';
import "./TeamInfo.css"
import axios from 'axios';

function TeamInfo () {
  const regionList = [" ", "서울", "경기", "전라", "경상"]//디비한테 '도' 명만 쿼리로 보내주면 상세지역은 get으로 받아와서 처리
  const [TeamInfo, SetTeamInfo] = useState()
  const [Status, SetStatus] = useState(true)
  const [TeamName, SetTeamName] = useState()
  const [Intro, SetIntro] = useState()
  const [Image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")//기본이미지
  const [Region, setRegion] = useState("")
  const fileInput = useRef(null)
  const formdata = new FormData()
  
  // useEffect(axios.get으로 팀인포 불러와야됨)
  useEffect(async() => { 
    const res = await axios.get("/api/teamInfo")
    SetTeamInfo(res.data)
    SetTeamName(res.data[0].teamname)
    SetIntro(res.data[0].intro)
  }, []);
  
  const onRegionHandler = (e) => { setRegion(e.target.value) }
  const onTeamnameHandler = (e) => { SetTeamName(e.target.value) }
  const onIntroHandler = (e) => { SetIntro(e.target.value) }

  const onChange = (e) => {
    if(e.target.files[0]){
      setImage(e.target.files[0].name)
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
      let body = {
        TeamInfo: TeamInfo,
        TeamName: TeamName,
        Intro: Intro,
        Region: Region
      }
      formdata.append("image", Image)// 이미지 폼 데이터에 담기
      formdata.append("body", JSON.stringify(body))// 바디 폼 데이터에 담기
      // axios.post로 변경된거 보내야됨
      // axios.post('/api/팀정보', formdata)
      // .then(res => {
      //   if(res.data.success){
      //     console.log(res.data)
      //   }
      // })
      // .catch(err => console.log(err))
    } else {
      console.log('편집누름')
      // axios.get으로 받아와야됨
      // axios.get('/api/teamInfo')
      // .then(res => {
      //   SetTeamInfo(res.data)
      //   SetTeamName(res.data[0].teamname)
      //   SetIntro(res.data[0].intro)
      // })
      // .catch(err => console.log(err))
    }
  }

  //팀소개 글자수제한, 팀장, 팀 등록일, 총 선수 수, 연령대, 활동 지역
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