import './App.css'
import Navbars from "./components/Navbars/Navbars"
import Login from "./Pages/Login"
import Register from './Pages/Register';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbars></Navbars>
    <Routes>
     <Route path='/login' element={<Login></Login>}></Route>
     <Route path='/register' element={<Register></Register>}></Route>


    </Routes>

    </>
  );
}

export default App;
