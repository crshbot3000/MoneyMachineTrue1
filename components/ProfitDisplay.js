// components/ProfitDisplay.js
import { useEffect, useState } from 'react';

export default function ProfitDisplay({ account }) {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      if (window.ethereum && account) {
        const provider = new window.ethers.providers.Web3Provider(window.ethereum);
        const balanceBigInt = await provider.getBalance(account);
        const balanceInEth = parseFloat(window.ethers.utils.formatEther(balanceBigInt)).toFixed(4);
        setBalance(balanceInEth);
      }
    };

    fetchBalance();
  }, [account]);

  if (!account) return null;

  return (
    <div style={{ marginTop: '1rem' }}>
      <h3>Wallet Balance: {balance ? `${balance} ETH` : 'Loading...'}</h3>
    </div>
  );
}
