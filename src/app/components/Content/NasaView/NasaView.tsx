import React, { useState, useEffect } from "react";

export default function NasaView({ nasaData }: any) {
  return (
    <>
    <div className ='border-2 border-white'> 
      <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white p-2">
        {"NASA Astronomy Picture of the Day"}
      </h5>
      <div className="font-normal text-white dark:text-gray-400 p-2">
        <h2 className="text-l font-bold">{nasaData.title}</h2>
        <p>{nasaData.date}</p>
        <img
          src={nasaData.url}
          alt={nasaData.title}
          className="w-full h-auto mt-4 rounded-lg"
        />
        <p className="mt-4">{nasaData.explanation}</p>
      </div>
    
    </div>
    </>
  );
}
