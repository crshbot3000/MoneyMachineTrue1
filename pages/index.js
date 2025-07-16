import { useEffect } from 'react';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/ethereum';
import { WagmiConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { useWeb3Modal } from '@web3modal/react';

const projectId = 'cc3efe1b4ce0cfe11e6d260d7c3a6a82';

const metadata = {
  name: 'Money Machine',
  description: 'Connect your wallet to start printing digital gains.',
  url: 'https://money-machine-true1.vercel.app',
  icons: ['https://walletconnect.com/walletconnect-logo.png']
};

const chains = [mainnet];

const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata
});

createWeb3Modal({
  wagmiConfig,
  projectId,
  chains
});

export default function Home() {
  const { open } = useWeb3Modal();

  useEffect(() => {
    document.body.style.backgroundColor = '#f5f5f5';
  }, []);

  return (
    <WagmiConfig config={wagmiConfig}>
      <main style={{ fontFamily: 'Arial', textAlign: 'center', marginTop: '10vh' }}>
        <h1>🚀 Welcome to Money Machine</h1>
        <p>This system is live and auto-optimized.</p>
        <button
          onClick={() => open()}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '16px',
            background: '#111',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Connect Wallet
        </button>
      </main>
    </WagmiConfig>
  );
}
