import { useState, useEffect } from "react";
import { EditIcon } from "../Dashboard/Main/icons/EditIcon";
import { TrashIcon } from "../Dashboard/Main/icons/TrashIcon";
import axios from "axios";
export default function TableNames(){
   const [data,setData] = useState([]);
   const url = 'http://localhost:3000/';

  async function CarregaDados() {

    await axios.get(url+'posts').then(response => console.log(response.data));
   }

   useEffect(()=>{
    CarregaDados();
   },[])
    
    return(




        <tr >
            
                      <td  className="border-b p-3 text-sm">
                        <div className="flex items-center">
                          <div className="shrink-0">
  
                          </div>
                          <div className="ml-0">
                            <p className="whitespace-nowrap">Jean marc</p>
                          </div>
                        </div>
                      </td>
                      <td className="border-b p-3 text-sm">
                        <p className="whitespace-nowrap">Admin</p>
                      </td>
  
  
                       <td className="flex space-x-0 border-b p-3 text-sm">
                       <button
                          
                          className=" text-black hover:text-zinc-600"
                        >
                         
                          <TrashIcon/>
                        </button>
                        <button
                        onClick={CarregaDados}
                          
                          className=" text-black hover:text-zinc-600"
                        >
                        <EditIcon />
                        </button>
                      </td>
                    </tr>
    
)
    }

function carregadados() {
    throw new Error("Function not implemented.");
}
