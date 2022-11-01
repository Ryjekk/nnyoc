import { useEffect, useState } from "react";

export const usePreloaderTimer = () => {
  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(1);

  const clear = () => {
    setPreloader(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setTimer(0)
    }, 2500);
  }, []);

  useEffect(() => {
    timer === 0 && clear();
  }, [timer]);

  return preloader;
};
