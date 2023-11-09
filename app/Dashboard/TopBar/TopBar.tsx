"use client"
import React, { useState } from "react";

import { Logos } from "@/app/Logo";
import ButtonDropProfile from "@/app/Components/buttonDrop";
import ButtonMenu from "@/app/Components/buttonMenu";
import { Sidebar } from "../SideBar/Sidebar";



export function TopBar() {
  
  
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  
  return (
    
    <header className="z-14 relative  h-14 w-screen bg-white shadow-lg">
      {/* // eslint-disable-next-line tailwindcss/no-custom-classname */}
      <div className="mx-34 flex h-14 w-full px-3">
        <div className="relative flex w-full items-center pl-1 sm:ml-0 sm:pr-2">
          <div className="relative left-0 flex h-full w-full">
            <div className="group relative flex h-full w-12 items-center ">

            <button onClick={() => toggleMenu}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</button>
<nav
        className={`${open ? "block" : "hidden"} mt-[67px] inset-y-0 left-0
        z-40 fixed  h-full bg-neutral-200 w-[192px] animate-fade-right animate-duration-[250ms]    `}
      >
        <div className=" flex flex-col">
        {open &&  <Sidebar />}
        </div>
      </nav>
              
            </div>
          <Logos />
            <div className="group ml-60 relative flex h-full w-full items-center lg:w-64">
              
              <svg
                className="pointer-events-none absolute left-0 ml-4   h-4 w-4 fill-current text-black sm:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg>
              <input
                type="text"
                className="block w-full rounded-2xl bg-gray-100 py-1.5 pl-10 pr-4 leading-normal text-black opacity-90 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Pesquisar"
              />
             
            </div>
           
          </div>
          <div className="relative flex space-x-4 items-center">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
        <ButtonDropProfile />
          </div>
         
        </div>
      </div>
    </header>
  );
}
