import {DarkModeProvider} from "../context/DarkModeContext";
import {CartProvider} from "../store/use-shopping-cart";

function MyApp({Component, pageProps}) {
    return <DarkModeProvider>
        <CartProvider>
            <Component {...pageProps} />
        </CartProvider>
    </DarkModeProvider>
}

export default MyApp
