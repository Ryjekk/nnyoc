import {DarkModeProvider} from "../context/DarkModeContext";
import {CartProvider} from "../store/use-shopping-cart";
import {Toaster} from "react-hot-toast";

function MyApp({Component, pageProps}) {
    return (
        <>
            <CartProvider>
                <DarkModeProvider>
                    <Component {...pageProps} />
                </DarkModeProvider>
            </CartProvider>
            <Toaster />
        </>
    )
}

export default MyApp
