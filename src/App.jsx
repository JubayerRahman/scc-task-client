import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <Navbar/>
    <Outlet/>
      <h1 className='text-white'>Hi, I am ohee. I will make a Task Mamagement website.</h1>
    </>
  )
}

export default App
