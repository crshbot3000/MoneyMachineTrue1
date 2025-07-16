import React from 'react';
import {
  WagmiConfig,
  configureChains,
  createClient,
  useAccount,
  useConnect,
} from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { w3mProvider, w3mConnectors } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/standalone';

const projectId = 'cc3efe1b4ce0cfe11e6d260d7c3a6a82'; // ✅ Use your own WalletConnect Project ID

const { chains, provider } = configureChains(
  [mainnet],
  [w3mProvider({ projectId })]
);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  provider,
});

const web3Modal = new Web3Modal({ projectId });

function ConnectButton() {
  const { isConnected, address } = useAccount();
  const { connect, connectors } = useConnect();

  return (
    <div>
      {!isConnected ? (
        <button onClick={() => web3Modal.openModal()}>
          Connect Wallet
        </button>
      ) : (
        <p>Connected as {address}</p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <WagmiConfig client={wagmiClient}>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Money Machine Wallet Portal</h1>
        <ConnectButton />
      </div>
    </WagmiConfig>
  );
}
