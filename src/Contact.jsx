import React, { useState } from "react";
import ContactModal from "./ContactModal";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-16 bg-transparent top-0 z-50 
     px-30 items-center justify-between">
      <div className="flex flex-col items-center justify-center">
        <br />

        {isModalOpen ? (
          <ContactModal isOpen={isModalOpen} onCloseModal={closeModal} />
        ) : (
          <button
            onClick={openModal}
            className="text-gray hover:text-yellow-700 transition duration-300"
          >
            <span className="mt-4  text-black font-bold py-2 px-3 rounded-lg
       border-2 border-yellow-600 transition
        duration-300 hover:bg-amber-50 hover:bg-opacity-100 
        hover:bg-gradient-to-r from-transparent to-amber-100">
              צור קשר
            </span>
          </button>
        )}
      </div>
    </div>
  );

};

export default Contact;
