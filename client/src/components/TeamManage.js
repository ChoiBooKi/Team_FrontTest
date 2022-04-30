import React from 'react';
import Formation from "./Formation"
import List from "./List"

function TeamManage () {

  return(
    <div style={{float: "left"}}>
      {<Formation />}
      {<List />}
    </div>
  )
}

export default TeamManage