import Preloader from "../components/ui/preloader/Preloader";
import {usePreloaderTimer} from "../hooks/usePreloaderTimer";

function MyApp({ Component, pageProps }) {
  const preloader = usePreloaderTimer();

  return <>{preloader ? <Preloader/> : <Component {...pageProps} />}</>
}

export default MyApp
