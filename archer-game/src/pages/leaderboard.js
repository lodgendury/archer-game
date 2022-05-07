import { Link } from 'react-router-dom';
import * as query from '../contract/query';
import { useState, useEffect } from 'react';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import { useWallet, WalletStatus } from "@terra-money/wallet-provider";
import '../App.css';

const Leaderboard = () => {
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

  const [scores, setScores] = useState();
  const [loading, setLoading] = useState(true);
  const connectedWallet = useConnectedWallet();

  useEffect(() => {
    setLoading(true);
    const fetchScores = async () => {
      if (connectedWallet && connectedWallet.network.name === 'testnet') {      
        return (await query.getScores(connectedWallet)).scores;
      }
    };

    fetchScores().then(scores => {
      setScores(scores);
      setLoading(false);
    });
  }, [connectedWallet]);

  const renderScores = (scores) => {
    if (!scores || scores.length < 1) {
      return <div> No scores available :( </div>;
    }

    return scores.map((score, index) => {
      return (
        <div key={index} className="score">
          {/* Format is address: score */}
          {/* Slice address to first 5 and last 4 digits so it looks like terra...a1b2*/}
          <span>
            {score[0].slice(0, 5) + '...' + score[0].slice(-4)}:{' '}
            {score[1].toString().padStart(2, '0')}
          </span>
        </div>
      );
    });
  };

  return (
    <main className="App">
      <header>
      <Link to="/">
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
      <div className="score-board-container">
        
        <h3>Scoreboard</h3>
        <div className="scroll">
        {/* If loading, show loading, else render */}
        {loading ? (
          <div>Loading...</div>
        ) : (
          renderScores(scores)
        )}
        </div>
        
        <Link to="/" className="menu-button">HOME</Link>
      
      </div>
      </div>
      {renderConnectButton()}
    </main>
  );
};

export default Leaderboard;