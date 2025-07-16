'use client';

import { useAccount, useConnect } from 'wagmi';
import { Web3Modal } from '@web3modal/standalone';

const projectId = 'cc3efe1b4ce0cfe11e6d260d7c3a6a82'; // ✅ Replace with your WalletConnect Project ID

const web3Modal = new Web3Modal({ projectId });

export default function WalletConnectButton() {
  const { isConnected, address } = useAccount();
  const { connect, connectors } = useConnect();

  const connectWallet = () => {
    web3Modal.openModal();
  };

  return (
    <button onClick={connectWallet} style={{ padding: '10px 20px', marginTop: '20px' }}>
      {isConnected ? `Connected: ${address.slice(0, 6)}...${address.slice(-4)}` : 'Connect Wallet'}
    </button>
  );
}
