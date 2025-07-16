import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

export default function WalletConnectButton() {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (!window.ethereum) return alert("MetaMask is required!");
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    setAccount(address);
  };

  return (
    <div>
      <button onClick={connectWallet}>
        {account ? `Connected: ${account.substring(0, 6)}...` : 'Connect Wallet'}
      </button>
    </div>
  );
}
