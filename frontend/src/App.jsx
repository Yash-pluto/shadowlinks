import { useState } from "react";
import "./App.css";
import MainCard from "./components/MainCard.jsx";

function App() {
  return (
    <>
      <div className='pt-[0px] items-center flex flex-col h-screen bg-hellishDark text-hellishText sm:pt-[40px]'>
        <MainCard />
      </div>
    </>
  );
}

export default App;
