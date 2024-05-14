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
    <div className="w-full h-16 bg-transparent  top-0 z-50 backdrop-blur-sm px-10 flex items-center justify-between">
      {/* <a href="/" className="flex items-center space-x-4">
        <img
          src="../image.png"
          alt="me"
          width={45}
          height={45}
          className="w-15 h-15"
        />
      </a> */}
      

      <div className="flex items-center space-x-8">
        <button
          onClick={openModal}
          className="text-grey hover:text-yellow-700 transition duration-300"
        >
          <span className="inline-block p-2 border-black border rounded-full">
            צור קשר
          </span>
        </button>
      </div>


      <ContactModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default Navbar;
