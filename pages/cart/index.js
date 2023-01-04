import GlobalWrapper from "../../components/layout/ GlobalWrapper";
import CartLogos from "../../components/content/cartContent/cartLogos/CartLogos";
import CartSummaryContent from "../../components/content/cartContent/cartSummaryContent/CartSummaryContent";

const Cart = () => {
    return (
        <GlobalWrapper>
            <CartLogos/>
            <CartSummaryContent/>
        </GlobalWrapper>
    );
};

export default Cart;