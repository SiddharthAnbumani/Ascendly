import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { MakeNavbar } from './MakeNavbar'
import Home from './Home'
import BucketListItem from './BucketListItem';
import NewBucketListItem from './NewBucketListItem';
import { useState, useEffect} from 'react';
import { createContext, useContext } from 'react';
import AscendContext from './AscendContext';

function App() {


  const [ascend, setAscend] = useState([])
  const [ascends, setAscends] = useState([])
  const [category, setCategory] = useState('select')

  useEffect(() => {
    console.log("Ascends updated:", ascends);
  }, [ascends]);


  

  return (
    <AscendContext.Provider 
    value={{
      ascend,
      setAscend,
      ascends,
      setAscends,
      category,
      setCategory}
    }>
      <BrowserRouter>
      <MakeNavbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route 
        path='/new'
        element={
        <NewBucketListItem 
        // ascend={ascend} 
        // setAscend={setAscend} 
        // Category={Category} 
        // setCategory={setCategory}
        // ascends={ascends}
        // setAscends={setAscends}
        />}/>

        <Route 
        path='/show' 
        element={
        <BucketListItem
        ascending={ascends}/>}/>
      </Routes>
    </BrowserRouter>
    </AscendContext.Provider>
  )
}

export default App
