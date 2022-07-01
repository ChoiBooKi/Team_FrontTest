import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import './BigList.css'
import Modal from 'react-modal';
import Grid from '@mui/material/Grid';
import image from "../img/로고.png"
import IconButton from '@mui/material/IconButton';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';//사람삭제
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';//신청목록
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';//i버튼
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';//등번호

let selected = 0
let checkback
function BigList() {
  const [PlayerList, SetPlayerList] = useState(null);
  const [RegisterList, SetRegisterList] = useState(0);
  const [InfoModal, SetInfoModal] = useState(false)
  const [BackModal, SetBackModal] = useState(false)
  const [RegisterModal, SetRegisterModal] = useState(false)
  const [RemoveModal, SetRemoveModal] = useState(false)
  const [Content, SetContent] = useState()
  const [Id, SetId] = useState()
  const [Back, SetBack] = useState()
  const [NewBack, SetNewBack] = useState()

  useEffect(async () => {//페이지 들어가자마자 DB에서 포지션, 선수 정보 받아오고 각 원에 이름 넣어주기
    const res = await axios.get("/api/readUser")//선수정보
    //유저정보도 받아와야됨
    const sort = res.data.sort(function (a, b) {//DB에서 온 리스트 선발선수 맨위로 정렬
      let x = a.already
      if (x === true) {
        return -1
      }
      return 0
    })
    SetPlayerList(sort)
  }, [])

  const InfoModalClose = () => {
    SetInfoModal(false)
  }
  const InfoModalOpen = (e) => {
    axios.get('/api/readInfo', { // email 받아와서 백으로 보내고 백에서 email로 구분해서 정보 보내줌
      params: {
        email: e.currentTarget.id
      }
    }).then(res => {
      console.log(res.data)
      SetContent(res.data[0])
    })
    //팀정보에서는 그냥 등번호 이름 포지션만 띄우고 선수관리에서 위의 로직을 사용하는것으로 변경하였다 우선 여기에 두고 나중에 가져다쓰자
    //***************************useEffect로 바로 받아오는게 아니라 i버튼 클릭할 때 id값으로 get 요청해서 받아온 값 띄우는걸로 변경, 쿼리에는 id로 넘기기
    SetInfoModal(true)
  }

  const BackModalClose = () => {
    SetBackModal(false)
  }
  const BackModalOpen = (e) => {
    SetBackModal(true)
  }

  const RegisterModalClose = () => {
    SetRegisterModal(false)
  }
  const RegisterModalOpen = (e) => {
    axios.get('/api/registerList')//신청 선수 받아오기
    .then(res => {
      SetRegisterList(res.data)
    })
    SetRegisterModal(true)
  }

  const RemoveModalClose = () => {
    SetRemoveModal(false)
  }
  const RemoveModalOpen = (e) => {
    SetRemoveModal(true)
  }

  const AddPlayer = (e) => {
    let addPlayer = []
    RegisterList.map((player) => player._id === e.currentTarget.id ? addPlayer = [...PlayerList, player] : null)
    SetPlayerList(addPlayer)
    axios.delete('/api/removePlayer', {
      params: {
        _id: e.currentTarget.id
      }
    })
    .then(res => {
      SetRegisterList(res.data)
    })
    .catch(err => console.log(err))
    //백에 선수리스트 업데이트된거 정보 보내주기
  }
  
  const RemovePlayer = (e) => {
    axios.delete('/api/RemovePlayer', {
      params: {
        _id: Id
      }
    })
    .then(res => {
      const sort = res.data.sort(function (a, b) {//DB에서 온 리스트 선발선수 맨위로 정렬
        let x = a.already
        if (x === true) {
          return -1
        }
        return 0
      })
      SetPlayerList(sort)
      SetRemoveModal(false)
    })
    .catch(err => console.log(err))
  }

  const RemoveRegisterPlayer = (e) => {
    // console.log(e.currentTarget.id)
    axios.delete('/api/removePlayer', {
      params: {
        _id: e.currentTarget.id
      }
    })
    .then(res => {
      SetRegisterList(res.data)
    })
    .catch(err => console.log(err))
  }

  const SelectPlayer = (event) => {
    if(Id === event.currentTarget.id){
      SetId()
      selected = 0
    }else{
      SetId(event.currentTarget.id)
      selected = 1
    }
  }

  const OpenChangeBack = (e) => {
    if(Back === null){
      SetId(e.currentTarget.id)
      PlayerList.map((player) => player._id === e.currentTarget.id ? SetBack(player.back) : null)
      let myElement = document.querySelector(".ChangeBack");
      myElement.style.opacity = '1'
      myElement.style.zIndex = '1'
    }else{
      let myElement = document.querySelector(".ChangeBack");
      myElement.style.opacity = '0'
      myElement.style.zIndex = '-1'
      SetBack(null)
    }
  }

  const CloseChangeBack = () => {
    let myElement = document.querySelector(".ChangeBack");
    myElement.style.opacity = '0'
    myElement.style.zIndex = '-1'
    SetBack(null)
  }

  const onChangeBackHandler = (e) => { SetNewBack(e.currentTarget.value) }

  const ChangeBack = () => {
    PlayerList.map((player) => player.back === Number(NewBack) ? alert('이미 존재하는 등번호 입니다.') :
      // SetPlayerList(PlayerList.map((player) => player._id === Id ? {...player, back : NewBack} : null))
      null
    )
    // PlayerList.map((player) => player.back === Back ? checkback = 1 : {...player, back : NewBack},checkback = null)
  }
  console.log(PlayerList)
  return (
    <div className='Biglist'>
      
      <Modal isOpen={InfoModal} onRequestClose={() => SetInfoModal(false)} ariaHideApp={false} className='playerInfo'>
        {/* 플레이어 상세정보 모달 */}
        <div><img src={image} style={{width:'40%'}}></img></div>
        <div style={{display:"flex"}}>
          <h3 style={{marginTop:"3.5%"}}>이름</h3>
          <p style={{marginTop:"3.5%", marginLeft:"5%"}}>{Content && Content.name}</p>
        </div>
        <div style={{display:"flex"}}>
          <h3>성별</h3>
          <p style={{marginLeft:"5%"}}>{Content && Content.gender}</p>
        </div>
        <div style={{display:"flex"}}>
          <h3>생년월일</h3>
          <p style={{marginLeft:"5%"}}>{Content && Content.gender}</p>
        </div>
        <div style={{display:"flex"}}>
          <h3>이메일</h3>
          <p style={{marginLeft:"5%"}}>{Content && Content.email}</p>
        </div>
        <div style={{display:"flex"}}>
          <h3>닉네임</h3>
          <p style={{marginLeft:"5%"}}>{Content && Content.nickName}</p>
        </div>
        <div style={{display:"flex"}}>
          <h3>활동지역</h3>
          <p style={{marginLeft:"5%"}}>{Content && Content.region}</p>
        </div>
        <div style={{display:"flex"}}>
          <h3>선호포지션</h3>
          <p style={{marginLeft:"5%"}}>{Content && Content.like}</p>
        </div>
        <div style={{display:"flex"}}>
          <h3>선출 여부</h3>
          {Content && Content.player === false ? 
          <p style={{marginLeft:"5%"}}>X</p> : 
          <p style={{marginLeft:"5%"}}>O</p>}
        </div>
        <div style={{display:"flex"}}>
          <h3>소개글</h3>
          <p style={{marginLeft:"5%"}}>{Content && Content.info}</p>
        </div>
        <button style={{marginLeft:'38%'}} onClick={InfoModalClose}>확인</button>
      </Modal>

      <Modal isOpen={BackModal} onRequestClose={() => SetBackModal(false)} ariaHideApp={false} className='SetBackNumber'>
        {/* 등번호 설정 모달 */}
        <div>
          <div><img src={image} style={{width:'20%'}}></img></div>
            {PlayerList && PlayerList.map((player) => {
              return(
                <button className='BackBtn' onClick={OpenChangeBack} id={player._id} props = {player.back}>
                  <div className='PlayerBox'>
                    {player.already === true ? <p>선발</p> : <p>후보</p>}
                    <img src={image} style={{width:'100%'}}></img>
                    {player.already === true ? <p>{player.select}</p> : <p>{player.like}</p>}
                    <p>{player.name}</p>
                  </div>
                </button>
              )})
            }
            <div className='ChangeBack'>
              <div><img src={image} style={{width:'40%'}}></img></div>
                <span>기존 등번호</span>
                <span>새 등번호</span>
                <br/>
                <span>{Back && Back}</span>
                <input style={{width:"5vh"}} type="number" id='back' value={NewBack} onChange={onChangeBackHandler}/>
                <br/>
                {/* {NewBack !== '' ? <div>{checkback === 1 ? '이미 존재하는 등번호 입니다.' : '사용 가능한 등번호 입니다.'}</div> : null } */}
              <button onClick={ChangeBack}>확인</button>
              <button onClick={CloseChangeBack}>취소</button>
            </div>
          <button style={{marginLeft:'38%'}} onClick={BackModalClose}>확인</button>
        </div>
      </Modal>

      <Modal isOpen={RegisterModal} onRequestClose={() => SetRegisterModal(false)} ariaHideApp={false} className='RegisterList'>
        {/* 신청목록 모달 */}
        <div><img src={image} style={{width:'40%'}}></img></div>
        <div className='RegisterListDetail'>
          <Grid container alignItems="center" sx={{height: '5vh', border: '2px black solid', backgroundColor: 'lightgray'}} >
            <Grid item xs={3} sx={{ fontWeight: 'bold', fontSize: 15 }}>
              선수명
            </Grid>
            <Grid item xs={3} sx={{ fontWeight: 'bold', fontSize: 15 }}>
              선호 포지션
            </Grid>
            <Grid item xs={3} sx={{ fontWeight: 'bold', fontSize: 15 }}>
              활동지역
            </Grid>
            <Grid item xs={3} sx={{ fontWeight: 'bold', fontSize: 15 }}>
              
            </Grid>
          </Grid>
          {RegisterList && RegisterList.length === 0 ? <p style={{marginTop:'5%'}}>가입 대기중인 선수가 없습니다.</p> : 
            RegisterList && RegisterList.map((player) => {
              return(
              <div className = 'scrol'>
                <Grid container alignItems="center" key={player._id} sx={{height: '5vh', border: '1px black solid' }}>
                  <Grid item xs={3} sx={{fontWeight: 'bold', fontSize: 13}}>
                  {player.name}
                  </Grid>
                  <Grid item xs={3} sx={{fontWeight: 'bold', fontSize: 13}}>
                    {player.like}
                  </Grid>
                  <Grid item xs={3} sx={{fontWeight: 'bold', fontSize: 13}}>
                    {player.region}
                  </Grid>
                  <Grid item xs={3} sx={{fontWeight: 'bold', fontSize: 13}}>
                  <button onClick={AddPlayer} id={player._id}>승인</button>
                  <button onClick={RemoveRegisterPlayer} id={player._id}>거절</button>
                  </Grid>
                </Grid>
              </div>
              )})
            }
        </div>
        <button style={{margin:'70% 45%'}} onClick={RegisterModalClose}>확인</button>
      </Modal>

      <Modal isOpen={RemoveModal} onRequestClose={() => SetRemoveModal(false)} ariaHideApp={false} className='RemovePlayer'>
        {/* 선수 제명 모달 */}
        <div><img src={image} style={{width:'40%'}}></img></div>
        <p>해당 선수를 삭제하시겠습니까?</p>
        <button style={{marginLeft:'38%'}} onClick={RemovePlayer}>확인</button>
        <button onClick={RemoveModalClose}>취소</button>
      </Modal>

      <h1 style={{float: 'left', position:'sticky'}}>선수 관리</h1>

      {selected === 0 ?
        <div style={{float:'right', marginTop: '3%'}}>
          <IconButton
            size="large"
            onClick={(e) => BackModalOpen(e)}
            color="inherit"
          >
            <FormatListNumberedRtlIcon />
          </IconButton>
          <IconButton
          size="large"
          onClick={(e) => RegisterModalOpen(e)}
          color="inherit"
          >
            <LibraryBooksIcon />
          </IconButton>
        </div>
        :
        <IconButton
        size="large"
        onClick={(e) => RemoveModalOpen(e)}
        color="inherit"
        style={{float:'right', marginTop: '3%'}}
        >
          <PersonRemoveIcon />
        </IconButton>
        }

      <Grid container alignItems="center" sx={{height: '5vh', border: '2px black solid', backgroundColor: 'lightgray'}}>
        <Grid item xs={1} sx={{ fontWeight: 'bold', fontSize: 15 }}>
          {/* 선발인지 후보인지 나타내는 빈칸 */}
        </Grid>
        <Grid item xs={1.5} sx={{ fontWeight: 'bold', fontSize: 15 }}>
          등번호
        </Grid>
        <Grid item xs={1.5} sx={{ fontWeight: 'bold', fontSize: 15 }}>
          선호 포지션
        </Grid>
        <Grid item xs={1.5} sx={{ fontWeight: 'bold', fontSize: 15 }}>
          배치 포지션
        </Grid>
        <Grid item xs={2} sx={{ fontWeight: 'bold', fontSize: 15 }}>
          선수명
        </Grid>
        <Grid item xs={2.5} sx={{ fontWeight: 'bold', fontSize: 15 }}>
          이메일
        </Grid>
        <Grid item xs={2} sx={{ fontWeight: 'bold', fontSize: 15 }}>
          상세 정보
        </Grid>
      </Grid>
      <div className = 'scroll'>
        {PlayerList && PlayerList.map((player) => {
          if (player.already === true) {
            return (
              <button 
                className={(player._id === Id ) && selected === 1 ? "listBtn select" : "listBtn"} 
                key={player._id}
                id={player._id} 
                onClick={SelectPlayer}>
              <Grid container alignItems="center" sx={{height: '5vh' }}>
                <Grid item xs={1} sx={{fontWeight: 'bold', fontSize: 13}}>
                  선발
                </Grid>
                <Grid item xs={1.5} sx={{fontWeight: 'bold', fontSize: 13}}>
                  {player.back}
                </Grid>
                <Grid item xs={1.5} sx={{fontWeight: 'bold', fontSize: 13}}>
                  {player.like}
                </Grid>
                <Grid item xs={1.5} sx={{fontWeight: 'bold', fontSize: 13}}>
                  {player.select}
                </Grid>
                <Grid item xs={2} sx={{fontWeight: 'bold', fontSize: 13}}>
                  {player.name}
                </Grid>
                <Grid item xs={2.5} sx={{fontWeight: 'bold', fontSize: 13}}>
                  {player.email}
                </Grid>
                <Grid item xs={2}>
                  <IconButton
                    size="large"
                    id={player.email}
                    onClick={(e) => InfoModalOpen(e)}
                    color="inherit"
                  >
                    <AssignmentIndIcon />
                  </IconButton>
                </Grid>
              </Grid>
              </button>
            )
          }
          else if (player.already === false) {
            return (
              <button 
                className={(player._id === Id ) && selected === 1 ? "listBtn select" : "listBtn"} 
                key={player._id}
                id={player._id} 
                onClick={SelectPlayer}>
              <Grid container alignItems="center" sx={{height: '5vh' }}>
                <Grid item xs={1} sx={{fontSize: 13}}>
                  후보
                </Grid>
                <Grid item xs={1.5} sx={{fontSize: 13}}>
                  {player.back}
                </Grid>
                <Grid item xs={1.5} sx={{fontSize: 13}}>
                  {player.like}
                </Grid>
                <Grid item xs={1.5} sx={{fontSize: 13}}>
                  ----
                </Grid>
                <Grid item xs={2} sx={{fontSize: 13}}>
                  {player.name}
                </Grid>
                <Grid item xs={2.5} sx={{fontSize: 13}}>
                  {player.email}
                </Grid>
                <Grid item xs={2}>
                  <IconButton
                      size="large"
                      id={player.email}
                      onClick={(e) => InfoModalOpen(e)}
                      color="inherit"
                  >
                    <AssignmentIndIcon />
                  </IconButton>
                </Grid>
              </Grid>
              </button>
            )
          }
        })}
      </div>
    </div>
  )
}

export default BigList