import {CornerLogosBL, CornerLogosBR, CornerLogosTL, CornerLogosTR, TitleMid, TitleMidBottom} from "./styles";
import Link from "next/link";

const CartLogos = () => {
    return (
        <>
            <CornerLogosTL/>
            <TitleMid>NNOCY CHECKOUT</TitleMid>
            <CornerLogosTR/>
            <CornerLogosBL/>
            <TitleMidBottom>
                <Link href="/">
                    BACK TO STORE
                </Link>
            </TitleMidBottom>
            <CornerLogosBR/>
        </>
    );
};

export default CartLogos;