import './App.css';
import { useWallet, WalletStatus } from "@terra-money/wallet-provider";
import Menu from './components/Menu';


function App() {

   // Current wallet status, connect & disconnect functions, available connections
   const { status, connect, disconnect, availableConnectTypes } = useWallet();
   
     
   //let audio = new Audio("/Mission-Impossible.mp3");
    
   // Don't let it get too loud!
   //audio.volume = 0.2;
   //audio.play();

   //const stopMusic = () => audio.pause();

   //window.addEventListener("click", stopMusic);
   

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
    
   // Let's take a look at what the starting states are!
   console.log("Wallet status is ", status);
   console.log("Available connection types:", availableConnectTypes);

  return (
    <main className="App">
      <header>
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

      </header>

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
