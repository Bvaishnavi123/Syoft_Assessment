import { useState } from "react";

import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Product } from "./Components/Product";

function App() {
  const [user, setLoginUser] = useState({});
  const [auth,setAuth] = useState(false)
 
  return (
    <div >
    
      <Routes>
      <Route
          path="/"
          element={auth?<Product/>:<Register/>}
        ></Route>
       
        <Route
          path="/login"
          element={<Login setLoginUser={setLoginUser} setAuth={setAuth}/>}
        ></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      
    
    </div>
  );
}

export default App;