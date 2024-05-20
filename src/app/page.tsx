"use client";

import React from 'react';
import { useEffect, useState } from 'react';
import { getDailyHoroscope } from './api/api';

export default function Home() {
  const [horoscope, setHoroscope] = useState('');
  useEffect(() => {
    getDailyHoroscope("foo", "bar").then(response => {
      setHoroscope(response.data.horoscope_data);
    }).catch(error => {
      console.error("Error in fetch", error);
    })
  }, [])


  return (
    <main>
      <h1>Hello World! This is a test!</h1>
      <h2>{horoscope}</h2>
    </main>
  );
}
