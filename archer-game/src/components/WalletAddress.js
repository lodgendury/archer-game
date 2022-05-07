import { useConnectedWallet } from '@terra-money/wallet-provider';

const WalletAddress = () => {
  const connectedWallet = useConnectedWallet();
  const { terraAddress } = { ...connectedWallet };
  
  return (
    <div>
      {terraAddress && (
        <button className="wallet-address">
          {terraAddress.slice(0, 7) + '...' + terraAddress.slice(-4)}
        </button>
      )}
    </div>
  );
};

export default WalletAddress;