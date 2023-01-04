import {FooterWrapper, FooterWrapperTop} from "./styles";
import {CartCounter, TextLight, TextLightSmall} from "../../../../styles/common/typography";
import Switcher from "./switcher/Switcher";
import Link from "next/link";
import {formatCurrency} from "../../../../utils/formatCurrency";
import {useShoppingCart} from "../../../../store/use-shopping-cart";

const Footer = () => {
    const { totalPrice, cartCount } = useShoppingCart();

    return (
        <div>
            <FooterWrapperTop>
                <Link href="/cart">
                    {/*FIXME THIS THROWS HYDRATION ERROR ON RELOAD*/}
                    <div style={{display: "flex", alignItems: "baseline"}}>
                        <TextLight>
                            CART {formatCurrency(totalPrice)}{' '}
                        </TextLight>
                        <CartCounter>({cartCount})</CartCounter>
                    </div>
                </Link>
                <TextLight>
                    <a href="https://www.instagram.com/nonoyesofcourse/" target="_blank" rel="noreferrer">INSTAGRAM</a>
                </TextLight>
                <TextLight>
                    <Link href="/collections">COLLECTIONS</Link>
                </TextLight>
            </FooterWrapperTop>

            <FooterWrapper>
                <Switcher/>
                <TextLightSmall><a href="https://www.ryjewsky.com/" target="_blank" rel="noreferrer">ryjewsky</a> x
                    NNYOC</TextLightSmall>
                <TextLightSmall>NO NO YES OF COURSE © 2023</TextLightSmall>
                <TextLightSmall>ICELAND / RTEYKJAVIK INGÓLFSSTRÆTI 10</TextLightSmall>
            </FooterWrapper>
        </div>
    );
};

export default Footer;