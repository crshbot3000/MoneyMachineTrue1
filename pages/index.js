import WalletConnectButton from '../components/WalletConnectButton';
import ProfitDisplay from '../components/ProfitDisplay';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>🚀 Profit Dashboard</h1>
      <WalletConnectButton />
      <ProfitDisplay />
      <div style={{ marginTop: '3rem', padding: '1rem', border: '1px solid #ccc' }}>
        <h2>🔥 Limited Offer: Crypto Auto-Earner</h2>
        <p>Learn how others make $500+/day with automation.</p>
        <p><strong>Price:</strong> $47 (one-time)</p>
        <p><strong>Send payment to:</strong></p>
        <p style={{ fontFamily: 'monospace' }}>
          ETH: 0x4e54f2Fd4c7A0326cFEDc0edfFD773630c48457e<br />
          BTC: bc1q6vs0ysueyffs9fa6gtnmw45wpn25wf4pw69sw7<br />
          SOL: 8TZhArtJNfwTYiK7NLyixkDQEjC3JTU1CCvf67Fo1Htj
        </p>
        <p>Once payment is received, your eBook + setup instructions will be delivered via email or Telegram.</p>
      </div>
    </div>
  );
}
