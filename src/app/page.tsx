"use client";

import React, { useEffect, useState } from 'react';
import { getDailyHoroscope } from './api/api';
import StartScreen from './components/StartScreen/StartScreen';

export default function Home() {
  const [horoscope, setHoroscope] = useState('');
  const [start, setStart] = useState(false);

  useEffect(() => {
    getDailyHoroscope("foo", "bar").then(response => {
      setHoroscope(response.data.horoscope_data);
    }).catch(error => {
      console.error("Error in fetch", error);
    })
  }, []);

  if (!start) {
    return (
      <main>
        <StartScreen />
        <button onClick={() => setStart(true)}>Start</button>
      </main>
    );
  }

  return (
    <main>
      <h1>Hello World! This is a test!</h1>
      <h2>{horoscope}</h2>
    </main>
  );
}
