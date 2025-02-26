import { useState } from "react"
import { Card } from "react-bootstrap"

export default function BucketListItem({ascending}){

  const [ascends, setAscends] = useState([])

  return (
    <>
    <h1 className="title-4">Ascends</h1>
      <ul>
        {ascending.map((item,index)=>{
          return <li>{item}</li>
        })}
      </ul>
    </>
  )
}
