
import { TopBar } from '@/app/Dashboard/TopBar/TopBar'
import { Sidebar } from '@/app/Dashboard/SideBar/Sidebar'
import { Content } from './Main/Content';

const style = {
  mainContainer:
    " flex-1 overflow-auto w-full h-screen",
  container: "bg-white h-screen w-screen overflow-hidden relative",
  main: " overflow-auto pt-4 px-2 md:pb-8 md:px-4 lg:px-6 ",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({children}:LayoutProps) 
 
{
  return (
    

    <div className={style.container}>
       <TopBar />
      <div className="flex items-start">

        <Sidebar  />
        <div className={style.mainContainer}>

          <main className={style.main}>
            <Content title={'main'} />  
            
            </main>
        </div>
      </div>
    </div>
  )
}
