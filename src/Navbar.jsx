// Navbar.js

import React, { useState } from "react";
import ContactModal from "./ContactModal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-16 bg-transparent  top-0 z-50 backdrop-blur-sm px-10 items-center justify-between">
      <br />
      <br />
      {/* <a href="/" className="flex items-center space-x-4">
        <img
          src="../image.png"
          alt="me"
          width={45}
          height={45}
          className="w-15 h-15"
        />
      </a> */}



      <div className="flex flex-col items-center justify-center">
        <button
          onClick={openModal}
          className="text-grey hover:text-yellow-700 transition duration-300"
        >
          <span className="mt-4 bg-transparent text-black font-bold py-2 px-3 rounded-full border-2 border-yellow-600 transition duration-300 hover:bg-amber-50 hover:bg-opacity-100 hover:bg-gradient-to-r from-transparent to-amber-100"
          >
            צור קשר
          </span>
        </button>
      </div>


      <ContactModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default Navbar;
