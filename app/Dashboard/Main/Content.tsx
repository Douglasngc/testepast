
interface ContentProps {
    title: string;
  }
  import { Pagination } from "./Pagination";
  import { EditIcon } from "@/app/Dashboard/Main/icons/EditIcon";
  import { TrashIcon } from "@/app/Dashboard/Main/icons/TrashIcon";
  
  export function Content(_props: ContentProps) {
    return (<div>
      <div className="h-16 w-94 bg-zinc-200 text-4xl text-orange-500 rounded-t-3xl pl-4  flex space-x-0 items-center">
        <h2>Empresas</h2>  
        <div className="pt-1">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" fill="rgb(255,120,0)"viewBox="0 0 24 24">
            <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 11 L 7 11 L 7 13 L 11 13 L 11 17 L 13 17 L 13 13 L 17 13 L 17 11 L 13 11 L 13 7 L 11 7 z"></path>
          </svg>
          </div>
      </div>
      <div className="mt-2">
         
        <div className="container mt-10 ">
  
       
          <div className="py-0">
          
            <div className=" mb-10">
           
              <div className="max-w-full overflow-x-auto rounded-lg">
                
                <table className="w-full leading-normal text-black">
                  <thead>
                    <tr>
  
                      <th
                        scope="col"
                        className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                      >
                        Empresas
                      </th>
                      <th
                        scope="col"
                        className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                      >
                        Código Externo
                      </th>
                      <th
                        scope="col"
                        className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                      >
                       Ações
                      </th>
                      <th
                        scope="col"
                        className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                      />
                    </tr>
                  </thead>
                  <tbody className="text-black">
                    <tr>
                      <td className="border-b border-gray-200 p-5 text-sm">
                        <div className="flex items-center">
                          <div className="shrink-0">
  
                          </div>
                          <div className="ml-0">
                            <p className="whitespace-nowrap">Jean marc</p>
                          </div>
                        </div>
                      </td>
                      <td className="border-b border-gray-200 p-5 text-sm">
                        <p className="whitespace-nowrap">Admin</p>
                      </td>
  
  
                      <td className="border-b border-gray-200 p-5 text-sm">
                        <a
                          href="#"
                          className="flex space-x-0 text-indigo-600 hover:text-indigo-900"
                        >
                          <EditIcon />
                          <TrashIcon />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-gray-200 p-5 text-sm">
                        <div className="flex items-center">
                          <div className="shrink-0">
  
                          </div>
                          <div className="ml-0">
                            <p className="whitespace-nowrap">Marcus coco</p>
                          </div>
                        </div>
                      </td>
                      <td className="border-b border-gray-200 p-5 text-sm">
                        <p className="whitespace-nowrap">Designer</p>
                      </td>
  
  
                      <td className="border-b border-gray-200 p-5 text-sm">
                        <a
                          href="#"
                          className="flex space-x-0 text-indigo-600 hover:text-indigo-900"
                        >
                          <EditIcon />
                          <TrashIcon />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-gray-200 p-5 text-sm">
                        <div className="flex items-center">
                          <div className="shrink-0">
  
                          </div>
                          <div className="ml-0">
                            <p className="whitespace-nowrap">Eric marc</p>
                          </div>
                        </div>
                      </td>
                      <td className="border-b border-gray-200 p-5 text-sm">
                        <p className="whitespace-nowrap">Developer</p>
                      </td>
  
                      <td className="border-b border-gray-200 p-5 text-sm">
                        <a
                          href="#"
                          className="flex space-x-0 text-indigo-600 hover:text-indigo-900"
                        >
                          <EditIcon />
                          <TrashIcon />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-gray-200 p-5 text-sm">
                        <div className="flex items-center">
                          <div className="shrink-0">
  
                          </div>
                          <div className="ml-0">
                            <p className="whitespace-nowrap">Julien Huger</p>
                          </div>
                        </div>
                      </td>
                      <td className="border-b border-gray-200 p-5 text-sm">
                        <p className="whitespace-nowrap">User</p>
                      </td>
  
                      <td className="border-b border-gray-200 p-5 text-sm">
                        <a
                          href="#"
                          className="flex space-x-0 text-indigo-600 hover:text-indigo-900"
                        >
                          <EditIcon />
                          <TrashIcon />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-gray-200 p-5 text-sm">
                        <div className="flex items-center">
                          <div className="shrink-0">
  
                          </div>
                          <div className="ml-0">
                            <p className="whitespace-nowrap">Jean marc</p>
                          </div>
                        </div>
                      </td>
                      <td className="border-b border-gray-200 p-5 text-sm">
                        <p className="whitespace-nowrap">Admin</p>
                      </td>
  
                      <td className="border-b border-gray-200 p-5 text-sm">
                        <a
                          href="#"
                          className="flex space-x-0 text-indigo-600 hover:text-indigo-900"
                        >
                          <EditIcon />
                          <TrashIcon />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-gray-200 p-5 text-sm">
                        <div className="flex items-center">
                          <div className="shrink-0">
  
                          </div>
                          <div className="ml-0">
                            <p className="whitespace-nowrap">Marcus coco</p>
                          </div>
                        </div>
                      </td>
                      <td className="border-b border-gray-200 p-5 text-sm">
                        <p className="whitespace-nowrap">Designer</p>
                      </td>
  
                      <td className="border-b border-gray-200 p-5 text-sm">
                        <a
                          href="#"
                          className="flex space-x-0 text-indigo-600 hover:text-indigo-900"
                        >
                          <EditIcon />
                          <TrashIcon />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-gray-200 p-5 text-sm">
                        <div className="flex items-center">
                          <div className="shrink-0">
  
                          </div>
                          <div className="ml-0">
                            <p className="whitespace-nowrap">Eric marc</p>
                          </div>
                        </div>
                      </td>
                      <td className="border-b border-gray-200 p-5 text-sm">
                        <p className="whitespace-nowrap">Developer</p>
                      </td>
  
                      <td className="border-b border-gray-200 p-5 text-sm">
                        <a
                          href="#"
                          className="flex space-x-0 text-indigo-600 hover:text-indigo-900"
                        >
                          <EditIcon />
                          <TrashIcon />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-gray-200 p-5 text-sm">
                        <div className="flex items-center">
                          <div className="shrink-0">
  
                          </div>
                          <div className="ml-0">
                            <p className="whitespace-nowrap">Julien Huger</p>
                          </div>
                        </div>
                      </td>
                      <td className="border-b border-gray-200 p-5 text-sm">
                        <p className="whitespace-nowrap">User</p>
                      </td>
                      
                      <td className="border-b border-gray-200 p-5 text-sm">
                        <a
                          href="#"
                          className="flex space-x-0 text-indigo-600 hover:text-indigo-900"
                        >
                          <EditIcon />
                          <TrashIcon /> 
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
               <Pagination />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
  