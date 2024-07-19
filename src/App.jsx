import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/index.js";
import LandingPage from "./pages/LandingPage.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Outlet />
      </main>
    </>
  );
}

export default App;
