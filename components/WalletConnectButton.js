import { useState, useEffect } from 'react';

export default function WalletConnectButton() {
  const [account, setAccount] = useState(null);

  async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (err) {
        console.error('Wallet connection failed:', err);
      }
    } else {
      alert('Please install MetaMask to use this feature.');
    }
  }

  return (
    <button onClick={connectWallet} style={{ padding: '10px 20px', marginTop: '20px' }}>
      {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect Wallet'}
    </button>
  );
}
