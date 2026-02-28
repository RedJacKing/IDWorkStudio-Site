import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  const location = useLocation();
  const lastHash = useRef('');

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash;
      
      const scrollToElement = () => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          return true;
        }
        return false;
      };

      // Attempt immediately
      if (scrollToElement()) return;

      // Retry mechanism with MutationObserver for dynamic content
      const observer = new MutationObserver(() => {
        if (scrollToElement()) {
          observer.disconnect();
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      // Fallback timeout to stop observing
      const timer = setTimeout(() => {
        observer.disconnect();
      }, 2000);

      return () => {
        observer.disconnect();
        clearTimeout(timer);
      };
    } else {
      // Scroll to top if no hash and path changed
      if (location.pathname !== "/") {
         window.scrollTo(0, 0);
      } else if (location.pathname === "/" && !location.hash) {
         window.scrollTo(0, 0);
      }
    }
  }, [location]);

  return null;
};

export default ScrollToHashElement;
