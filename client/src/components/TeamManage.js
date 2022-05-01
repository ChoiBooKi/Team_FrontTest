import React from 'react';
import Formation from "./Formation"
import List from "./List"

function TeamManage () {

  return(
    <div style={{display: 'flex'}}>
      {<Formation />}
      {<List />}
    </div>
  )
}

export default TeamManage