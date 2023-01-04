import Link from "next/link";
import {CartEmptyWrapper, TextEmptyCart} from "./styles";
import Image from "next/image";
import Logo from '../../../../assets/logo/logo.png'

const CartEmpty = () => {
    return (
        <CartEmptyWrapper>
            <TextEmptyCart>Your shopping cart is <strong>empty</strong>.</TextEmptyCart>
            <TextEmptyCart>
                Check out our awesome merch{' '}
                <Link href="/">
                    <a>here!</a>
                </Link>
            </TextEmptyCart>
            <Image src={Logo} alt="logo" style={{marginTop: '25px'}}/>
        </CartEmptyWrapper>
    );
};

export default CartEmpty;