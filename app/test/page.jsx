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
          <div className="mt-auto md:mt-0"> <Title /> </div>

          {image?.images && (
          <ScrollArea className="h-[200px] w-[350px] rounded-md border"> 
            <Image src={image.images} alt="Generated image" width={600} height={500} /> 
          </ScrollArea>)}  

          <div className="flex justify-center bg-amber-500 mt-auto mb-5 md:mb-0 md:mt-0">
            <div className="flex flex-row justify-evenly items-center border w-full h-15 lg:w-6/12 rounded-3xl bg-violet-400  hover:shadow-amber-50 ">

              <input type="text" placeholder="Enter your prompt" className="h-9/12 md:w-10/12  outline-0 bg-red-600"/>
              <button className="bg-black h-[40px] w-[40px] rounded-full grid place-items-center text-white">
                <ArrowUp className="text-white"/>
              </button>

            </div>
          </div>
          

    

        </div>
      
      </div > 
    </>
    
  
);
}

