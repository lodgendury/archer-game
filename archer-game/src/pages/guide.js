import { Link } from 'react-router-dom';
import { useWallet, WalletStatus } from "@terra-money/wallet-provider";
import '../App.css';
import WalletAddress from '../components/WalletAddress';


const Guide = () => {
  const { status, connect, disconnect, availableConnectTypes } = useWallet();
  console.log("Wallet status is ", status);
  console.log("Available connection types:", availableConnectTypes);

  const renderConnectButton = () => {
    if (status === WalletStatus.WALLET_NOT_CONNECTED) {
      
      return (
        <div className="connect-wallet-div">
          <button
            type="button"
            key={`connect-EXTENSION`}
            onClick={() => {connect("EXTENSION")}}
            className="cta-button connect-wallet-button"
          >
            Connect Wallet to Play
          </button>
        </div>
      );
    }
    else if (status === WalletStatus.WALLET_CONNECTED) {
      return (
        <button
          type="button"
          onClick={() => disconnect()}
          className="cta-button disconnect-wallet-button"
        >
          Disconnect
        </button>
      );
    }
  };

  return (
    <main className="App">
      <header>
      <Link to="/" >
        <div className="header-titles">
        <div class="estrellas inverso">
  <span>R</span>
  <span>E</span>
  <span>H</span>
  <span>C</span>
  <span>R</span>
  <span>A</span>
</div>
          
        </div>
        </Link>
      </header>

      <div className="game-menu-container">
      <div className="board-container">
        <h3>How to play</h3>
        
        <div className="help-container">
          <span className="help">
            Kill as many bad guys as you can within 15 seconds!
          </span>
        </div>
        <div className="guide-home-container">
        <WalletAddress  />
        <Link to="/" className="menu-button">HOME</Link>
        </div>
      </div>
      </div>
      {renderConnectButton()}
    </main>
  );
};

export default Guide;