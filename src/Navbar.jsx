import React, { useState } from "react";
import Contact from "./Contact";
import Products from "./Products";
import Katalog from "./Katalog";

const Navbar = () => {
  const [showKatalog, setShowKatalog] = useState(false);

  const handleKatalogClick = () => {
    setShowKatalog(true);
  };

  return (
    <>
      <div className="w-full h-[65px] bg-[#fff2cc]/40 fixed backdrop-blur-sm z-50 px-10 top-0">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          <a href="/" className="flex flex-row items-center">
            <img
              src="../assets/badazjeru.jpg"
              alt="logo"
              width={100}
              height={100}
              sizes="100vw"
            />
          </a>
          <ul className="flex ml-auto">
            <li className="mr-6">
              <a className="text-stone-700 hover:text-yellow-600" href="#">
                רשימת חנויות
              </a>
            </li>
            <li className="mr-6">
              <button
                className="text-stone-700 hover:text-yellow-600 hover:underline"
                onClick={handleKatalogClick}
              >
                קטלוג
              </button>
            </li>
          </ul>
          <div className="flex flex-row gap-5">
            <Contact />
          </div>
        </div>
      </div>
      {showKatalog && <Katalog />}
    </>
  );
};

export default Navbar;
