import React from 'react';
import WalletConnectButton from '../components/WalletConnectButton';
import ProfitDisplay from '../components/ProfitDisplay';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>💸 Welcome to Money Machine 💸</h1>
      <WalletConnectButton />
      <ProfitDisplay />
    </div>
  );
}
