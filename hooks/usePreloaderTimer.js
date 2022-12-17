import { useEffect, useState } from "react";
import {useRouter} from "next/router";

export const usePreloaderTimer = () => {
  const {pathname: p} = useRouter();
  const [preloader, setPreloader] = useState(p === '/');
  const [timer, setTimer] = useState(1);

  const clear = () => {
    setPreloader(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setTimer(0)
    }, 1500);
  }, []);

  useEffect(() => {
    timer === 0 && clear();
  }, [timer]);

  return preloader;
};
