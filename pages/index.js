import Head from 'next/head';
import dynamic from 'next/dynamic';

const WalletConnectButton = dynamic(() => import('../components/WalletConnectButton'), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Money Machine</title>
      </Head>
      <main style={{ padding: '2rem' }}>
        <h1>🚀 Welcome to Money Machine</h1>
        <p>This system is live and auto-optimized.</p>
        <WalletConnectButton />
      </main>
    </>
  );
}
