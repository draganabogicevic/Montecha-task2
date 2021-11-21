import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary.jsx";
import ErrorDisplay from "./components/ErrorDisplay.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import SearchedUser from "./pages/SearchedUser.jsx";
import Home from "./pages/Home.jsx";
import User from "./entities/User"
import { getUser } from "./service/service"
import * as links from "./service/links.js"


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [searchText, setSearchText] = useState([]);
  const [ user, setUser] = useState([]);
  const [ error, setError ] = useState("");

  const searchUser = () => {
    if(searchText === "") {
      setUser("");
      setError("Please add user name")
    }
    getUser(links.USERS_LINK + searchText)
    .then(response => {
      console.log(response)
      if(response.message) {
        setError(response.message);
      } else {
        setUser(new User(response));
        setError(null);
        setSearchText("");
    }
  })
  }

  const handleSearch = (filteredText) => {
    setSearchText(filteredText);
  }

 
  console.log(user)
  return (
    <ErrorBoundary>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage onSearch={handleSearch} searchText={searchText} searchUser={searchUser} user={user}/>} />
        <Route path="/search:id" element={<SearchedUser user={user}  error={error}/>}/>
        <Route element={<ErrorDisplay message="Page not found" />}/>
      </Routes>
      <Footer />
    </ErrorBoundary> 
  );
}

export default App;
