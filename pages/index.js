// pages/index.js
import { useEffect } from 'react';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { WalletConnectButton } from '../components/WalletConnectButton';

const projectId = 'cc3efe1b4ce0cfe11e6d260d7c3a6a82'; // Replace with your real WalletConnect project ID

const chains = [mainnet];

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: '1', chains }),
  publicClient
});

const ethereumClient = new EthereumClient(wagmiConfig, chains);

export default function Home() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <main style={{ padding: '50px', fontFamily: 'sans-serif', textAlign: 'center' }}>
          <h1>🚀 Welcome to Money Machine</h1>
          <p>This system is live and auto-optimized.</p>
          <WalletConnectButton />
        </main>
      </WagmiConfig>

      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
      />
    </>
  );
}
