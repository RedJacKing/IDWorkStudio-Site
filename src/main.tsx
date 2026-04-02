import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n';
import ReactGA from 'react-ga4';

// Initialise GA4 — pageview tracking is handled per-route in App.tsx
ReactGA.initialize('G-0R2LXVRM0R');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
