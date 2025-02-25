import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function NewBucketListItem({ascend,
    setAscend,
    category,
    setCategory, 
    ascends, 
    setAscends}){

        const navigate = useNavigate()
    // const [ascend, setAscend] = useState([])
    // const [ascends, setAscends] = useState([])
    // const [Category, setCategory] = useState('select')

    const handleAddAscend = (evt)=>{
        evt.preventDefault()
        setAscends(prevAscends =>[...ascends,ascend])
        console.log(ascends)
        navigate("/show")
    }

    return(
        <>
            <form>

                <label htmlFor=""> New Ascend: </label>
                <input 
                type="text" 
                value={ascend}
                onChange={(evt)=>
                setAscend(evt.target.value)}/><br/>

                <label htmlFor="">Category: </label>

                <select 
                name="" 
                id="" 
                value={category}
                onChange={
                    (evt)=> 
                    setCategory(evt.target.value)}>

                    <option 
                    value='select'>
                        --select--
                    </option>

                    <option 
                    value="Travel & Adventure">
                        Travel & Adventure
                    </option>
                    <option 
                    value="Personal Growth">
                        Personal Growth 
                    </option>
                    <option 
                    value="Health & Fitness">
                        Health & Fitness
                    </option>

                </select><br/>

                <button 
                type="submit"
                onClick={handleAddAscend}>
                    Add Ascend
                </button>
            </form>
        </>
    )
}