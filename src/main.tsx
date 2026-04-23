import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n';
import ReactGA from 'react-ga4';

ReactGA.initialize('G-0R2LXVRM0R');

const rootElement = document.getElementById('root')!;

// If the page was pre-rendered (has existing HTML), hydrate it.
// Otherwise do a normal client-side render.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <StrictMode><App /></StrictMode>);
} else {
  createRoot(rootElement).render(<StrictMode><App /></StrictMode>);
}
