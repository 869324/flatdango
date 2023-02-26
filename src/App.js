import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Components/Header/header";

import Login from "./Components/Login/login";
import Add from "./Components/Add/add";
import { Route, Routes, useNavigate } from "react-router-dom";
import Register from "./Components/Register/register";
import Movies from "./Components/Movies/movies";

function App() {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  useEffect(() => {
    if (!Object.keys(user).length) {
      navigate("/login");
    }
  }, [user]);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
