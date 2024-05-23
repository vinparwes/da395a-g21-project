import React, { useState, useEffect } from 'react';
import { Modal } from 'flowbite-react';

interface NasaViewProps {
    nasaData : string
}

export default function NasaView({ nasaData }: NasaViewProps) {
    return (
        <>
            <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                {"NASA Astronomy Picture of the Day"}
            </h5>

            <div className="font-normal text-white dark:text-gray-400">
                <h2 className="text-xl font-bold">{nasaData.title}</h2>
                <p>{nasaData.date}</p>
                <img src={nasaData.url} alt={nasaData.title} className="w-full h-auto mt-4 rounded-lg" />
                <p className="mt-4">{nasaData.explanation}</p>
            </div>
        </>
    );
}
