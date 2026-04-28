import ReactGA from 'react-ga4';
import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './App';
import './index.css';
import './i18n';

// Only run GA in browser
if (typeof window !== 'undefined') {
  ReactGA.initialize('G-0R2LXVRM0R');
}

export const createRoot = ViteReactSSG(
  {
    routes,
    basename: '/',
  },
  ({ isClient }) => {
    if (isClient) {
      // place any client-only logic here if needed later
    }
  }
);