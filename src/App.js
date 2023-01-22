import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Components/Header/header";

import Login from "./Components/Login/login";
import Transactions from "./Components/Transactions/transactions";
import Add from "./Components/Add/add";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [search, setSearch] = useState(null);
  const [add, setAdd] = useState(false);

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/transactions", {})
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  return (
    <div className="App">
      {!loggedIn && <Login setLoggedIn={setLoggedIn} />}
      {add && (
        <Add
          setAdd={setAdd}
          addTransaction={addTransaction}
          transactions={transactions}
        />
      )}

      <Header setSearch={setSearch} setAdd={setAdd} />

      <Transactions search={search} transactions={transactions} />
    </div>
  );
}

export default App;
