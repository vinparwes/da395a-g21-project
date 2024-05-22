/* eslint-disable @next/next/no-img-element */
"use client";
import './globals.css';
import React, { useState, useEffect, useMemo } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import HomePage from './components/HomePage/HomePage';
import { Container, Engine, MoveDirection, ISourceOptions, OutMode } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

export default function Home() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
            
          },

        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 0.1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 2500,
        },
        opacity: {
          value: { min: 0.5, max: 1 },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.1, max: 1.5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );
  if (init) {
    return (
      <>
        <Particles
          id="tsparticles"
          options={options}
        />
        <main>
          <HomePage></HomePage>
        </main>
      </>
    );
  }

  return <></>;
}


