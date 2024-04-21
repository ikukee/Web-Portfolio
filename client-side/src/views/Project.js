import React from 'react'
import {useParams} from "react-router-dom"
export const Project = () => {
  const {id} = useParams();
  return (
    <div>Project {id}</div>
  )
}
