// pages/index.js
import React, { useState } from 'react';
import ProfitDisplay from '../components/ProfitDisplay';
import { ethers } from 'ethers';

export default function Home() {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send('eth_requestAccounts', []);
        setAccount(accounts[0]);
      } catch (err) {
        console.error('Wallet connection failed:', err);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🚀 Welcome to Money Machine</h1>
      <p>This system is live and auto-optimized.</p>

      <button onClick={connectWallet
