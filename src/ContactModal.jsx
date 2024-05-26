import React from "react";
import Modal from "react-modal";

const ContactModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal" 
    >
      <div className="bg-gradient-to-br from-orange-100 via-yellow-100 to-orange-100 p-6 rounded-lg mx-auto my-auto max-w-md">
        <h4 className="text-white text-lg font-bold mb-4">:צרו איתנו קשר</h4>
        <h2 className="text-white text-2xl font-bold">0533144444</h2>
        <h2 className="text-white text-2xl font-bold">mamamam@gmail.com</h2>

        <button
          onClick={onRequestClose}
          className="mt-4 px-4 py-2 bg-white text-gray-800 font-semibold rounded hover:bg-gray-200"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ContactModal;
