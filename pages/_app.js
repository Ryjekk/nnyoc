import {DarkModeProvider} from "../context/DarkModeContext";
import {CartProvider} from "../store/use-shopping-cart";

function MyApp({Component, pageProps}) {
    return <CartProvider>
        <DarkModeProvider>
            <Component {...pageProps} />
        </DarkModeProvider>
    </CartProvider>
}

export default MyApp
