/* eslint-disable @next/next/no-img-element */
"use client";

import React from 'react';
import { useEffect, useState } from 'react';
import { getDailyHoroscope } from './api/apiHoroscope';
import StartScreen from './components/StartScreen/StartScreen';
export default function Home() {
  const [horoscope, setHoroscope] = useState('');
  const [start, setStart] = useState(false);

  useEffect(() => {
    horoscopeAPI.getDailyHoroscope('Aquarius').then(response => {
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
      <h1>Horoscope</h1>
      <span>{horoscope}</span>
      <h1>Horoscope Daily</h1>
      <span>{horoscopeDaily}</span>
      <h1>APOD Image</h1>
      <img src={ apodImage } alt="Foo"></img>
      <h1>APOD Text</h1>
      <span>{apod}</span>
      <h1>APOD Dated Text</h1>
      <h2>{apodDated}</h2>
      <h1>APOD Dated Image</h1>
      <img src={ apodDatedImage } alt="Foo"></img>
    </main>
  );
}
