import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24  mx-auto fixed w-screen px-24 bg-[#faf6f0]">
      <h1 className="w-full ">
        <img src="/logo.png" alt="" width={150} />
      </h1>
      <ul className="hidden md:flex items-center">
        <li className="p-4">
          <Link activeClass="active" to="Hero" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer">
            Home
          </Link>
        </li>
        <li className="p-4">
          <Link activeClass="active" to="New_Collection" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer">
            New Collection
          </Link>
        </li>
        <li className="p-4">
          <Link activeClass="active" to="Collection" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer">
            Collection
          </Link>
        </li>
        <li className="p-4">
          {" "}
          <Link activeClass="active" to="Location" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer">
            Location
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={!nav ? "fixed top-0 left-0 w-[60%] h-full border-r border-r-[#ddd0c0] bg-[#faf6f0] ease-in-out duration-500" : "fixed top-0 left-[-100%] w-[60%] h-full border-r border-r-[#ddd0c0] bg-[#faf6f0] ease-in-out duration-500"}
      >
        <h1 className="w-full m-5 ">
          <img src="/logo.png" alt="" width={150} />
        </h1>
        <ul className=" uppercase p-4">
          <li className="p-4  border-b border-[#ddd0c0]">
            <Link activeClass="active" to="Hero" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer">
              Home
            </Link>
          </li>
          <li className="p-4  border-b border-[#ddd0c0]">
            <Link activeClass="active" to="New_Collection" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer">
              New Collection
            </Link>
          </li>
          <li className="p-4  border-b border-[#ddd0c0]">
            <Link activeClass="active" to="Collection" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer">
              Collection
            </Link>
          </li>
          <li className="p-4 ">
            {" "}
            <Link activeClass="active" to="Location" spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer">
              Location
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
