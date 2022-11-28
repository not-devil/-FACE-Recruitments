import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import LoginPage from "./Component/LoginPage";
import HomePage from "./Component/HomePage";
import ProtectedRoutes from "./Component/ProtectedRoutes";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ loggedIn: false });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
