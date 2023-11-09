/* eslint-disable @next/next/no-img-element */


import { SidebarItems } from "./SidebarItems";
import css from "@/app/style.module.css";




const style = {
  
  
  container: "bg-gray-100 h-34 w-34 pb-1 ",
  close: "hidden p-1 lg:block lg:w-64 lg:z-auto",
  open: "w-34 absolute z-40 sm:w-5/12 ",
  default: "bg-gray-100 scrollbar  overflow-auto h-screen   ",
};

export function Sidebar() {
 
  return (
    <aside
      className={`${style.default}
      
        ${css.scrollbar}
        `}
    >
      <div className={style.container}>

        <SidebarItems />
      </div>



      <div className="mb-4 pr-5">
      <div className="text-center py-10">
        <p className="text-xs">Powered by</p>
       
        <img
          src="https://www.npxtech.com.br/images/logo.png"
          alt="Logo"
          className="mx-auto h-8"
        />
      </div>
    </div>

    </aside>
  );
}
