import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n';
import ReactGA from 'react-ga4';

ReactGA.initialize('G-0R2LXVRM0R');
ReactGA.send('pageview');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);