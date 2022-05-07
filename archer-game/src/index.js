import App from './App';
import Fullscreen from './Fullscreen';
import React from "react";
import ReactDOM from 'react-dom';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './index.css';

import { getChainOptions, WalletProvider } from '@terra-money/wallet-provider';

import Play from './pages/play';
import Guide from './pages/guide';
import Leaderboard from './pages/leaderboard';

const TWITTER_HANDLE = 'tosanol';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;


getChainOptions().then((chainOptions) => {
  console.log("Chain Options are ", chainOptions);
  
ReactDOM.render(
  <React.StrictMode>
    <WalletProvider {...chainOptions}>
      <div className="App-header">
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              {/* Here are the routes we need to declare.*/}
              {/* These are empty so they will error for now, don't worry! */}
              <Route path="/play" element={<Play />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/guide" element={<Guide />} />
            </Routes>
          </BrowserRouter>
         
         <Fullscreen />
        <div className="footer-container">
         { /*<img
            alt="Twitter Logo"
            className="twitter-logo"
            src="/twitter-logo.svg"
/>*/}
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`Built by @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
      </WalletProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
});
