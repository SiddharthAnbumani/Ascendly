import { useState } from "react"

export default function BucketListItem({ascending}){

  const [ascends, setAscends] = useState([])

  return (
    <div>
      <h1 className="title-4">Ascends</h1>
      <ul>
        {ascending.map((item,index)=>{
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}
