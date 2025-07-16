import React, { useState } from 'react';
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";

export default function Home() {
  const [address, setAddress] = useState("");

  async function connectWallet() {
    try {
      const provider = new WalletConnectProvider({
        rpc: {
          1: "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID" // Replace with your own or use public RPC
        }
      });

      await provider.enable();

      const web3Provider = new ethers.BrowserProvider(provider);
      const signer = await web3Provider.getSigner();
      const userAddress = await signer.getAddress();

      setAddress(userAddress);
    } catch (error) {
      console.error("Connection error:", error);
    }
  }

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Money Machine</h1>
      <button onClick={connectWallet} style={{ padding: "1rem 2rem", fontSize: "16px" }}>
        Connect Wallet
      </button>
      {address && (
        <p>Connected wallet: {address}</p>
      )}
    </div>
  );
}
