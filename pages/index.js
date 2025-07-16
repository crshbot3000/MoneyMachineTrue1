import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

export default function Home() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new WalletConnectConnector({
      options: {
        projectId: 'YOUR_PROJECT_ID', // Optional but recommended
        metadata: {
          name: "Money Machine",
          description: "Crypto Store",
          url: "https://money-machine-true1.vercel.app",
          icons: ["https://money-machine-true1.vercel.app/icon.png"]
        }
      }
    })
  });

  const { disconnect } = useDisconnect();

  return (
    <div style={{ padding: 32 }}>
      <h1>Money Machine Wallet Connect</h1>
      {!isConnected ? (
        <button onClick={() => connect()}>Connect Wallet</button>
      ) : (
        <>
          <p>Connected as: {address}</p>
          <button onClick={() => disconnect()}>Disconnect</button>
        </>
      )}
    </div>
  );
}
