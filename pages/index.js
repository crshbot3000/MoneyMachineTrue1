import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [address, setAddress] = useState('');
  const [ethBalance, setEthBalance] = useState('');

  async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const userAddress = await signer.getAddress();
        const balance = await provider.getBalance(userAddress);
        const formattedBalance = ethers.formatEther(balance);

        setAddress(userAddress);
        setEthBalance(formattedBalance);
        setWalletConnected(true);
      } catch (err) {
        console.error('Connection error:', err);
      }
    } else {
      alert('Please install MetaMask to use this feature.');
    }
  }

  return (
    <div style={{ padding: 30, fontFamily: 'Arial' }}>
      <h1>🚀 Money Machine</h1>
      {!walletConnected ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <div>
          <p><strong>Wallet:</strong> {address}</p>
          <p><strong>ETH Balance:</strong> {ethBalance}</p>
        </div>
      )}
    </div>
  );
}
