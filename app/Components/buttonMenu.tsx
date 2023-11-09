"use client";
import { useState } from "react";
import { Sidebar } from "../Dashboard/SideBar/Sidebar";



export default function ButtonMenu() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="">
        <div  className=" hover:bg-gray-300 hover:rounded-full block h-7 w-7 cursor-pointer"
        onClick={toggleMenu}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</div>


      <nav
        className={`${open ? "block" : "hidden"} mt-[67px] inset-y-0 left-0
        z-40 fixed  h-full bg-neutral-200 w-[192px] animate-fade-right animate-duration-[250ms]    `}
      >
        <div className=" flex flex-col">
        {open &&  <Sidebar mobileOrientation={"start"} />}
        </div>
      </nav>
    </div>
  );
}