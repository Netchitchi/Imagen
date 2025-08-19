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
          <div className=""> <Title /> </div>

          {image?.images && (
          <ScrollArea className="h-[200px] w-[350px] rounded-md border"> 
            <Image src={image.images} alt="Generated image" width={600} height={500} /> 
          </ScrollArea>)}  

          <div className="flex justify-center">
            <div className="flex flex-row justify-evenly items-center border w-full h-15 lg:w-6/12 rounded-3xl  hover:shadow-amber-50 ">

              <input type="text" placeholder="Enter your prompt" className="h-9/12 md:w-10/12  outline-0"/>
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

