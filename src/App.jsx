import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {
  

  return (
    <div className='bg-nature bg-cover h-screen w-screen bg-no-repeat flex justify-center items-center'>
     <Routes>
<Route path='/' element={<Home/>} />
     </Routes>
    </div>
  )
}

export default App
