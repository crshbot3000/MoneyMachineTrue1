// components/WalletConnectButton.js
import { useWeb3Modal } from '@web3modal/react';
import { useAccount } from 'wagmi';

export function WalletConnectButton() {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();

  return (
    <button onClick={() => open()} style={{ padding: '10px 20px', marginTop: '20px' }}>
      {isConnected ? `Connected: ${address.slice(0, 6)}...${address.slice(-4)}` : 'Connect Wallet'}
    </button>
  );
}
