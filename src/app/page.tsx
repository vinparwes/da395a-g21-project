/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import HomePage from './components/HomePage/HomePage';
import { Container, Engine, MoveDirection, ISourceOptions, OutMode } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

export default function Home() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container?: Container) => {
    console.log(container);
  };

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
          //onClick: {
          //  enable: true,
          //  mode: "push",
          //},

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
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 200,
        },
        opacity: {
          value: {min: 0.5, max: 1},
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.5, max: 1 },
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


