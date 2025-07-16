import {
  WagmiConfig,
  configureChains,
  createClient,
} from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { w3mProvider, w3mConnectors } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/standalone';

import '../styles/globals.css'; // Optional, for custom styling

const projectId = 'cc3efe1b4ce0cfe11e6d260d7c3a6a82'; // Your WalletConnect Project ID

const { chains, provider } = configureChains(
  [mainnet],
  [w3mProvider({ projectId })]
);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  provider,
});

function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}

export default App;
