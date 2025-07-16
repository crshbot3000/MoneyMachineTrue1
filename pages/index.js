import React from 'react';
import { Web3Modal } from '@web3modal/standalone';
import {
  configureChains,
  createClient,
  WagmiConfig,
  useAccount,
  useConnect,
} from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { w3mConnectors, w3mProvider } from '@web3modal/ethereum';

const projectId = 'cc3efe1b4ce0cfe11e6d260d7c3a6a82'; // your WalletConnect ID

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

function WalletConnectButton() {
  const { isConnected, address } = useAccount();
  const { connect, connectors } = useConnect();

  return (
    <div>
      {!isConnected ? (
        <button onClick={() => web3Modal.openModal()}>Connect Wallet</button>
      ) : (
        <p>Connected: {address}</p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <WagmiConfig client={wagmiClient}>
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1>Money Machine: WalletConnect Ready</h1>
        <WalletConnectButton />
      </div>
    </WagmiConfig>
  );
}
