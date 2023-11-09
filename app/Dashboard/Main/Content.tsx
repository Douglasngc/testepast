
interface ContentProps {
    title: string;
  }
import TableNames from "@/app/Components/tablenames";
  import { Pagination } from "./Pagination";
 
  
  export function Content(_props: ContentProps) {
    return (
    <div>
      <div className="h-12 w-full bg-zinc-200 border-b text-4xl text-orange-500 rounded-t-3xl pl-4  flex space-x-0 items-center">
        <h2>Empresas</h2>  
        <div className="pt-1">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" fill="rgb(255,120,0)"viewBox="0 0 24 24">
            <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 11 L 7 11 L 7 13 L 11 13 L 11 17 L 13 17 L 13 13 L 17 13 L 17 11 L 13 11 L 13 7 L 11 7 z"></path>
          </svg>
          </div>
      </div>

           
                
                <table className="  border-b border w-full ">
                  <thead >
                    <tr>

                      <th
                        
                        className="border-b p-3  text-left text-sm font-normal uppercase"
                      >
                        Empresas
                      </th>
                      <th
                        
                        className="border-b  p-3 text-left text-sm font-normal uppercase"
                      >
                        Código Externo
                      </th>
                      <th
                        
                        className=" border-b p-3   text-left text-sm font-normal uppercase"
                      >
                       Ações
                      </th>
                      <th                        
                        className=" w-2 p-3     "
                      />
                    </tr>
                  </thead>
                  <tbody className="w-full  text-black">
                    <TableNames   />
                  
                    
                  </tbody>
                 
                </table>
                <Pagination />    
              
              </div>
           
         
     
    );
  }
  