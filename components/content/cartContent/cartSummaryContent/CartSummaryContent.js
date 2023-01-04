import {SummaryWrapper} from "./styles";
import {useShoppingCart} from "../../../../store/use-shopping-cart";
import CartEmpty from "../cartEmpty/CartEmpty";
import CartFull from "../cartFull/CartFull";

const CartSummaryContent = () => {
    const {cartCount} = useShoppingCart();

    return (
        <SummaryWrapper>
            {cartCount <= 0 && <CartEmpty/>}
            {cartCount > 0 && <CartFull/>}
        </SummaryWrapper>
    );
};

export default CartSummaryContent;