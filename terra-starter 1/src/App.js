import './App.css';
import { useWallet, WalletStatus } from "@terra-money/wallet-provider";

import Menu from './components/Menu';


function App() {

   // Current wallet status, connect & disconnect functions, available connections
   const { status, connect, disconnect, availableConnectTypes } = useWallet();

   const renderConnectButton = () => {
    if (status === WalletStatus.WALLET_NOT_CONNECTED) {
      return (
        <div className="connect-wallet-div">
          <button
            type="button"
            key={`connect-EXTENSION`}
            onClick={() => connect("EXTENSION")}
            className="cta-button connect-wallet-button"
          >
            Connect wallet
          </button>
        </div>
      );
    }
    else if (status === WalletStatus.WALLET_CONNECTED) {
      return (
        <button
          type="button"
          onClick={() => disconnect()}
          className="cta-button connect-wallet-button"
        >
          Disconnect
        </button>
      );
    }
  };
    
   // Let's take a look at what the starting states are!
   console.log("Wallet status is ", status);
   console.log("Available connection types:", availableConnectTypes);

  return (
    <main className="App">
      <header>
        <div className="header-titles">
          <h1>Casino Royale</h1>
          <p>🔫 Does he ever miss? No, He is 47 🔫</p>
        </div>

      </header>

      {status === WalletStatus.WALLET_NOT_CONNECTED && (<div>
        <img
          src="https://64.media.tumblr.com/a5b09b68402c3049ce834a596b72465b/3982384500cbe217-02/s540x810/28b5a72d5cab89cd5b87ee8a2bbbc6e177e726b9.gifv"
          alt="Goblin gif"
        />
      </div>)}

       {/* Show the menu after connection */}
       {status === WalletStatus.WALLET_CONNECTED && (
          <div className="game-menu-container">
            <Menu />
          </div>
        )}
        
      {renderConnectButton()}
    </main>
  );
}

export default App;
