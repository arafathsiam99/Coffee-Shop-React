import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Menu", link: "/menu" },
    { name: "Gallery", link: "/" },
    { name: "Contact", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className=" w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-primary-color py-4 md:px-10 px-7 ">
        <h2 className="text-white font-bold text-2xl cursor-pointer flex items-center gap-1">
          ☕ Coffee
        </h2>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden  text-white"
        >
          {open ? <IoClose className="w-7 h-7"/> : <IoMdMenu className="w-7 h-7"/>}
        </div>
        {/* link items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-2 pt-4 absolute md:static md:bg-primary-color bg-white md:text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9  ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold" key={link.name}>
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default Navbar;
