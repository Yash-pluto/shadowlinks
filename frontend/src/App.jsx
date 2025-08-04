import { useState } from "react";
import "./App.css";
import MainCard from "./components/MainCard.jsx";

function App() {
  return (
    <>
      <div className='min-h-screen w-full pt-0 items-center flex flex-col bg-hellishDark text-hellishText overflow-x-hidden sm:pt-[40px] sm:pb-[40px]'>
        <MainCard />
      </div>
    </>
  );
}

export default App;
