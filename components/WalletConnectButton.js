// components/WalletConnectButton.js
import { useEffect, useState } from 'react';

export default function WalletConnectButton() {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const [selectedAccount] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(selectedAccount);
      } catch (error) {
        console.error("User rejected the request.");
      }
    } else {
      alert('Please install MetaMask to use this feature.');
    }
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <button onClick={connectWallet}>
        {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect Wallet'}
      </button>
    </div>
  );
}
