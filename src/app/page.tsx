/* eslint-disable @next/next/no-img-element */
"use client";

import React from 'react';
import { useEffect, useState } from 'react';
import * as horoscopeAPI from './api/apiHoroscope'
import * as nasaAPI from './api/apiNASA'
import * as openAiApi from './api/apiChatGPT'
import StartScreen from './components/StartScreen/StartScreen';

export default function Home() {
  
  const [start, setStart] = useState(false);
  const [horoscope, setHoroscope] = useState('')
  const [horoscopeDaily, setHoroscopeDaily] = useState('')
  const [apod, setApod] = useState('')
  const [apodImage, setApodImage] = useState('')
  const [apodDated, setApodDated] = useState('')
  const [apodDatedImage, setApodDatedImage] = useState('')
  const [gptPrompt, setGptPrompt] = useState('')

  /*
  useEffect(() => {
    horoscopeAPI.getDailyHoroscope('Aquarius').then(response => {
      setHoroscope(response.data.horoscope_data);
    }).catch(error => {
      console.error("Error in fetch", error);
    })
  }, [])

  useEffect(() => {
    horoscopeAPI.getDailyHoroscopeWithDay('Aquarius', "TOMORROW").then(response => {
      setHoroscopeDaily(response.data.horoscope_data);
    }).catch(error => {
      console.error("Error in fetch", error);
    })
  }, [])

  useEffect(() => {
    nasaAPI.getApod().then(response => {
      setApod(response.explanation);
      setApodImage(response.url)
    }).catch(error => {
      console.error("Error in fetch", error);
    })
  }, [])

  useEffect(() => {
    nasaAPI.getApodWithDate("2024-01-01").then(response => {
      setApodDated(response.explanation);
      setApodDatedImage(response.url)
    }).catch(error => {
      console.error("Error in fetch", error);
    })
  }, [])
  
  useEffect(() => {
    openAiApi.getPrompt("Something on me being an Aquarius").then(response => {
      setGptPrompt(response!!);
    }).catch(error => {
      console.error("Error in fetch", error);
    })
  }, [])

  */
  
 
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
      <h1>Gpt Prompt</h1>
      <span>{ gptPrompt }</span>
    </main>
  );
}
