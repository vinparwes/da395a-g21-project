/* eslint-disable @next/next/no-img-element */
"use client";

import React from 'react';
import { useEffect, useState } from 'react';
import * as horoscopeAPI from './api/apiHoroscope'
import * as nasaAPI from './api/apiNasa'
import * as openAiApi from './api/apiOpenAi'
import StartScreen from './components/LandingPage/OverlayPicker';
import HomePage from './components/HomePage/HomePage';
import OverlayPicker from './components/LandingPage/OverlayPicker';

export default function Home() {
  
  const [start, setStart] = useState(false);

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
  
  /*useEffect(() => {
    openAiApi.getPrompt("Something on me being an Aquarius").then(response => {
      setGptPrompt(response!!);
    }).catch(error => {
      console.error("Error in fetch", error);
    })
  }, [])*/


  return (
    <main>
      <HomePage></HomePage>
    </main>
  );
}
