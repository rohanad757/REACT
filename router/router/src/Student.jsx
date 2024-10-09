import React from 'react'
import { useParams } from 'react-router-dom'

const Student = () => {
    let {id} = useParams();
  return (
    <div>
      Params : {id}
    </div>
  )
}

export default Student
