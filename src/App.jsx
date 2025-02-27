import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { MakeNavbar } from './components/MakeNavbar'
import Home from './Home'
import BucketListItem from './components/BucketListItem';
import NewBucketListItem from './components/NewBucketListItem';
import { useState, useEffect} from 'react';
import { createContext, useContext } from 'react';
import AscendContext from './components/AscendContext';

function App() {


  const [ascend, setAscend] = useState([])
  const [category, setCategory] = useState('select')
  const [ascends, setAscends] = useState([])

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
        <NewBucketListItem/>}/>

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
