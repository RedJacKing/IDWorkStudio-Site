import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './App';
import './index.css';
import './i18n';

function runWhenBrowserIdle(callback: () => void) {
  if (typeof window === 'undefined') return;

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(callback);
    return;
  }

  window.setTimeout(callback, 1);
}

runWhenBrowserIdle(() => {
  import('react-ga4')
    .then(({ default: ReactGA }) => {
      ReactGA.initialize('G-0R2LXVRM0R');
    })
    .catch(() => undefined);
});

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
