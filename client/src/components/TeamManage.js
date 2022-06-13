import React from 'react';
// import Formation from "./Formation"
import List from "./List"
import TeamInfo from './TeamInfo';
import './TeamManage.css'
import SquadSetter from './SquadSetter'

function TeamManage () {

  return(
    <div className='TeamManage'>
      <div className="box">
        {<List />}
        {/* {<Formation />} */}
        {<SquadSetter/>}
        {<TeamInfo />}
      </div>
    </div>
  )
}

export default TeamManage