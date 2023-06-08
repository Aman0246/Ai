import axios  from 'axios';
import './App.css'
import Navbars from "./components/Navbars/Navbars"
import Home from './Pages/Home';
import Login from "./Pages/Login"
import Summery from "./Pages/Summery"
import Register from './Pages/Register';
import Image from "./Pages/Aiimage"
import { Routes, Route } from "react-router-dom";
import Paramaker from './Pages/ParaMaker';

axios.defaults.baseURL="http://127.0.0.1:7000"
axios.defaults.withCredentials=true;


function App() {
  return (
    <>
    <Navbars></Navbars>
    <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/login' element={<Login></Login>}></Route>
     <Route path='/summery' element={<Summery></Summery>}></Route>
     <Route path='/register' element={<Register></Register>}></Route>
     <Route path='/image' element={<Image></Image>}></Route>
     <Route path='/paraMaker' element={<Paramaker></Paramaker>}></Route>
    </Routes>

    </>
  );
}

export default App;
