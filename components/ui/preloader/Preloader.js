import Image from "next/image";
import logo from '../../../assets/logo/logo.png'
import {ImageWrapper, PreloaderHeader, PreloaderWrapper} from "./styles";

const Preloader = () => {
  const animLogo = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: {
    default: {
        duration: 1,
        repeat: 1,
        repeatType: "reverse",
        ease: [0, 0.71, 0.2, 1.01]
      },
      scale: {
        type: "spring",
          damping: 8,
          stiffness: 100,
          restDelta: 0.001
      }
    }
  }

  const animBg = {
    initial: { opacity: 1 },
    animate: { opacity: 0 },
    transition: {
      delay: 1.7,
      duration: 1
    }
  }

  return (
    <PreloaderWrapper initial={animBg.initial}
                      animate={animBg.animate}
                      transition={animBg.transition}>
      <ImageWrapper
        initial={animLogo.initial}
        animate={animLogo.animate}
        transition={animLogo.transition}
      >
        <Image src={logo} alt='logoOne' width={300} height={300}/>
      </ImageWrapper>
      <PreloaderHeader
        initial={animLogo.initial}
        animate={animLogo.animate}
      >
        Iceland / Reykjavík Ingólfsstræti 10
      </PreloaderHeader>
    </PreloaderWrapper>
  );
};

export default Preloader;