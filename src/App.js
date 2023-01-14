import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/header";

import Login from "./Components/Login/login";
import Transactions from "./Components/Transactions/transactions";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [search, setSearch] = useState(null);

  return (
    <div className="App">
      {!loggedIn && <Login setLoggedIn={setLoggedIn} />}

      <Header setSearch={setSearch} />

      <Transactions search={search} />
    </div>
  );
}

export default App;
