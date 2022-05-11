import React, { useState }  from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import './List.css'
import Modal from 'react-modal';
import {info} from './data3'


function List () {
  const [PlayerList, SetPlayerList] = useState(null);
  const [Modalis, SetModalis] = useState(false)
  const [Content, SetContent] =useState()
  useEffect(async () => {//페이지 들어가자마자 DB에서 포지션, 선수 정보 받아오고 각 원에 이름 넣어주기
    const res = await axios.get("/api/readUser")//선수정보
    //유저정보도 받아와야됨
    const sort = res.data.sort(function(a, b){//DB에서 온 리스트 선발선수 맨위로 정렬
      let x = a.already
      if(x === true){
        return -1
      }
      return 0
    })
    SetPlayerList(sort)
  }, [])

  const ModalClose = () => {
    SetModalis(false)
  }
  const ModalOpen = (e) => {
    axios.get('/api/readInfo',{ // email 받아와서 백으로 보내고 백에서 email로 구분해서 정보 보내줌
      params: {
        email: e.currentTarget.id
      }
    }).then(res => {
        console.log(res.data)
        SetContent(res.data[0])
      })
    //***************************useEffect로 바로 받아오는게 아니라 i버튼 클릭할 때 id값으로 get 요청해서 받아온 값 띄우는걸로 변경, 쿼리에는 id로 넘기기
    SetModalis(true)
  }
  return (
    <div>
      <Modal isOpen={Modalis} onRequestClose={() => SetModalis(false)} ariaHideApp={false}> 
        {Content && Content.name}
        {Content && Content.gender}
        {Content && Content.email}
        {Content && Content.nickname}
        {Content && Content.region}
        {Content && Content.like}
        {Content && Content.player}
        {Content && Content.info}
      </Modal>
      <div className='list'>
        <h2>선수 리스트</h2>
        <ul>
          {PlayerList && PlayerList.map((player) => {
            if(player.already === true){
              return (
                <li className = "selected" key={player._id}>
                  선발
                  {player.name}
                  {player.select}
                  {player.back}
                  <button id={player.email} onClick={(e) => ModalOpen(e)}>i</button>
                </li>
              )
            } 
            else if(player.already === false){
              return (
                <li className = "candidate" key={player._id}>
                  후보
                  {player.name}
                  {player.like}
                  {player.back}
                  <button id={player.email} onClick={(e) => ModalOpen(e)}>i</button>
                </li>
              )
            }
          })}
        </ul>
      </div>
    </div>
  )
}

export default List