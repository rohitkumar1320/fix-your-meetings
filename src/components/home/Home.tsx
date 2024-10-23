import Popup from "../popup/Popup";
import React, { useState } from "react";
import "./Home.css";



const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="relative">
      <h1 className="gradient-text text-transparent text-4xl font  font-bold font-medium animate-gradient ">
        Welcome to Meeting Scheduling
      </h1>

      <button
        onClick={openPopup}
        className=" ml-52 p-4 rounded-xl border-0 bg-white text-black hover:bg-black hover:text-white border-2 hover:shadow-2xl cursor-pointer "
      >
        Get Your Meeting
      </button>

      {isPopupOpen && <Popup onClose={closePopup} />}
    </div>
  );
};

export default Home;