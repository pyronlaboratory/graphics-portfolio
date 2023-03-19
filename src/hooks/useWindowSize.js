import { useState, useEffect } from "react";

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}
export default function useWindowSize() {

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    let vh = dimensions.height * 0.01;
    document.documentElement.style.setProperty('--vh',`${vh}px`);

    const debounceHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1000);

    window.addEventListener("resize", debounceHandleResize);

    return () => {
      window.removeEventListener("resize", debounceHandleResize)
    }
    
  }, []);

  return dimensions;
}