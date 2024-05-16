"use client"; // Add this line if Home component also uses hooks or imports Client Components

import React from 'react';
import Api from './api/api';

export default function Home() {
  return (
    <main>
      <h1>Hello World! This is a test!</h1>
      <Api />
    </main>
  );
}
