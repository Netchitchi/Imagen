"use client";
import { useEffect, useState } from "react";
import Image from "next/image"; 
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowUp } from "lucide-react";
import { POST } from "../api/ai/route";
import Navbar from "@/components/custom/navbar";
import Title from "@/components/custom/title";

export default function Test() {
  const [inputValue, setInputValue] = useState("");

  const [image, setImage] = useState();
  // useEffect(() => {
  //   console.log(image);
  // }, [image]);

  
  return (
    <>
      
      <div className="flex flex-col justify-center mx-10 h-screen">
        <div className="flex-none mt-10"> <Navbar /> </div>
        
        <div className="flex-1 flex flex-col justify-center gap-10 ">
          <div className="flex justify-center mt-auto md:mt-0"> <Title /> </div>

          {image?.images && (
          <ScrollArea className="h-[200px] w-[350px] rounded-md border"> 
            <Image src={image.images} alt="Generated image" width={600} height={500} /> 
          </ScrollArea>)}  
          

          <div className="flex flex-row justify-center items-center h-[64px] border px-5 rounded-[40px] hover:shadow-[0px_0px_4px_0.8px_#bfe2fd] transition-all duration-600 ease-in-out cursor-pointer mt-auto mb-10 md:mb-0 md:mt-0" >
            <input 
            type="text" 
            placeholder="Generate shorts by prompt" 
            className="flex-1 bg-transparent text-black placeholder-gray-400 outline-none text-sm justify-center lg:w-1/3" 
            onChange={(e) => setInputValue(e.target.value)} /> 

            <button 
              disabled={true} 
              // onClick={generateImage} 
              className="flex items-center justify-center
                w-8 h-8 rounded-full border 
                transition-all duration-200 bg-black
              "
              > 
              <ArrowUp className="w-4 h-4" color="#ffffff"/> 
            </button> 
          </div> 

        </div>
      
      </div > 
    </>
    
  
);
}

