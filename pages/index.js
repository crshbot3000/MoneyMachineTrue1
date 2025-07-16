import React from 'react';
import WalletConnectButton from '../components/WalletConnectButton';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🚀 Welcome to Money Machine</h1>
      <p>This system is live and auto-optimized.</p>

      {/* Wallet Button Here */}
      <WalletConnectButton />
    </div>
  );
}
