import { useEffect } from 'react';
import { ethers } from 'ethers';
import { Web3Modal } from '@web3modal/standalone';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';

const projectId = 'cc3efe1b4ce0cfe11e6d260d7c3a6a82';

const chains = [mainnet];

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  provider,
});

const ethereumClient = new EthereumClient(wagmiClient, chains);

export default function Home() {
  useEffect(() => {
    const web3Modal = new Web3Modal({ projectId, standaloneChains: [mainnet.id] });

    document.getElementById('connectButton').addEventListener('click', async () => {
      const provider = await web3Modal.connect();
      const ethersProvider = new ethers.providers.Web3Provider(provider);
      const signer = ethersProvider.getSigner();
      const address = await signer.getAddress();
      alert(`Connected wallet: ${address}`);
    });
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>WalletConnect Integration</h1>
      <button id="connectButton" style={{ fontSize: '18px', padding: '10px 20px' }}>
        Connect Wallet
      </button>
    </div>
  );
}
