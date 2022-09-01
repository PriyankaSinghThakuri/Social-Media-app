import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import NewsFeed from "./components/NewsFeed/NewsFeed";
import NoMatchPage from "./components/NoMatchPage/NoMatchPage";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <div className="route-container">
          <Routes>
            <Route exact path="/" element={<SignIn />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/newsfeed" element={<NewsFeed />} />
            {/* <Route exact path="/cart" element={<ShoppingCart />} />
            <Route exact path="/customers" element={<CustomerList />} /> */}
            <Route path="/*" element={<NoMatchPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
