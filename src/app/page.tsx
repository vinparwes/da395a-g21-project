/* eslint-disable @next/next/no-img-element */
"use client";

import React from 'react';
import { useEffect, useState } from 'react';
import { getDailyHoroscope } from './api/apiHoroscope';

import Image from 'next/image';

import * as horoscopeAPI from './api/apiHoroscope'
import * as nasaAPI from './api/apiNasa'


export default function Home() {
  const [horoscope, setHoroscope] = useState('')
  const [horoscopeDaily, setHoroscopeDaily] = useState('')
  const [apod, setApod] = useState('')
  const [apodImage, setApodImage] = useState('')
  const [apodDated, setApodDated] = useState('')
  const [apodDatedImage, setApodDatedImage] = useState('')
  
  const [gptPrompt, setGptPrompt] = useState('')


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

  /*
  useEffect(() => {
    getDailyHoroscope("foo").then(response => {
      setHoroscope(response.data.horoscope_data);
    }).catch(error => {
      console.error("Error in fetch", error);
    })
  }, [])
  */

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
