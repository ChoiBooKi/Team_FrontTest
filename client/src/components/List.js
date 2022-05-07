import React, { useState }  from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import './List.css'
import Modal from 'react-modal';
import {info} from './data3'


function List () {
  const [PlayerList, SetPlayerList] = useState(null);
  const [Modalis, SetModalis] = useState(false)
  const [Info, SetInfo] = useState(info)
  const [Content, SetContent] =useState()
  useEffect(async () => {//페이지 들어가자마자 DB에서 포지션, 선수 정보 받아오고 각 원에 이름 넣어주기
    const res = await axios.get("/api/readUser")
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
    Info.map((player) =>//현재 발생한 이벤트 선수의 id값이랑 info에 저장된 id값이 같으면 그 같은 사람의 데이터를 저장
      player.id === e.currentTarget.id ? SetContent({info: player.info, name: player.name, back: player.back}) : null
    )
    SetModalis(true)
  }
  return (
    <div>
      <Modal isOpen={Modalis} onRequestClose={() => SetModalis(false)} ariaHideApp={false}> 
        {Content && Content.name}
        {Content && Content.back}
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
                  <button id={player._id} onClick={(e) => ModalOpen(e)}>i</button>
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
                  <button id={player._id} onClick={(e) => ModalOpen(e)}>i</button>
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