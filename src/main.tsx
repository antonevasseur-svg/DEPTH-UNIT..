import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { CursorProvider } from './store/cursorStore';
import { AudioProvider } from './store/audioStore';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <CursorProvider>
          <AudioProvider>
            <App />
          </AudioProvider>
        </CursorProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
