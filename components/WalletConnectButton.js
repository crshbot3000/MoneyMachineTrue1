import { useEffect, useState } from 'react';
import { EthereumClient, modalConnectors, walletConnectProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, useAccount, useConnect, WagmiConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

const projectId = 'cc3efe1b4ce0cfe11e6d260d7c3a6a82'; // 🔑 Use your own from WalletConnect Cloud

const { chains, publicClient } = configureChains(
  [mainnet],
  [walletConnectProvider({ projectId }), publicProvider()]
);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: modalConnectors({ version: '2', appName: 'MoneyMachine', projectId, chains }),
  publicClient
});

const ethereumClient = new EthereumClient(wagmiConfig, chains);

export default function WalletConnectButton() {
  const { connect, connectors } = useConnect();
  const { address, isConnected } = useAccount();

  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <button onClick={() => connect({ connector: connectors[0] })}>
          {isConnected ? `Connected: ${address.slice(0, 6)}...${address.slice(-4)}` : 'Connect Wallet'}
        </button>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}
