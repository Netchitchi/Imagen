"use client"
import React, { useEffect, useState } from "react";

export default function Title() {

  const messages = ['Dê vida a sua imaginção','Crie imagens', 'Imagens realistas', 'Tudo em segundos']
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const timeOutId = setTimeout(()=>{
      setIndex( (prevIndex) => prevIndex === messages.length - 1?0: prevIndex + 1);
    }, 2000)

    return () => clearTimeout(timeOutId);
  }, [index]);

  return(
    <div className="flex flex-col items-center">
      <h1 className="text-3xl"> Generate images </h1>
      <p className="text-xl"> {messages[index]} </p>
    </div>
  );
}