import {
    CartFullText,
    CartFullWrapper, CartItemPrice,
    CartProductDetails,
    CartProductImg,
    CartProductWrapper,
    CartSubtotal,
    CartTotal
} from "./styles";
import {formatCurrency} from "../../../../utils/formatCurrency";
import {useShoppingCart} from "../../../../store/use-shopping-cart";
import Link from "next/link";
import Image from "next/image";

const CartFull = () => {
    const {totalPrice, cartDetails, removeItem} = useShoppingCart();

    console.log(cartDetails)

    return (
        <>
            <CartFullWrapper>
                <CartFullText>PRODUCT SUMMARY</CartFullText>
                {Object.entries(cartDetails).map(([key, product]) => (
                    <CartProductWrapper key={key}>
                        <CartProductImg>
                            <Link href={`/item/${product.prodId}`}>
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </Link>
                        </CartProductImg>
                        <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                            <CartProductDetails>
                                <p>{product.name}</p>
                                <p>SIZE: {product.size}</p>
                                <p>QUANTITY: {product.quantity}</p>
                            </CartProductDetails>
                            <CartItemPrice>
                                <div onClick={() => removeItem(product, product.quantity)}>
                                    <p>X</p>
                                </div>
                                <p>
                                    {(product.quantity > 1) && <span style={{fontSize: '12px'}}>({product.quantity} X {formatCurrency(product.price)})</span>}{" "}
                                    {formatCurrency(product.quantity * product.price)}
                                </p>
                            </CartItemPrice>
                        </div>
                    </CartProductWrapper>
                ))}
                <CartSubtotal>sss</CartSubtotal>
                <CartTotal>
                    <p>Total:{' '}</p>
                    <p>{formatCurrency(totalPrice)}</p>
                </CartTotal>
            </CartFullWrapper>
        </>
    );
};

export default CartFull;