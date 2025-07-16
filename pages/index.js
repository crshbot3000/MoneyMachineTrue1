import React from 'react';
import ProfitDisplay from './ProfitDisplay';

export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial', padding: '2rem', textAlign: 'center' }}>
      <h1>💸 Welcome to the Money Machine 💸</h1>
      <p>Your automated profit engine is running.</p>
      <ProfitDisplay />
    </main>
  );
}
