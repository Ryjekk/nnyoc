import axios from "axios";
import getStripe from "./get-stripe";

export const redirectToCheckout = async (cartDetails) => {
    const {data: id} = await axios.post('/api/checkout_session', {
        itemsL: Object.entries(cartDetails).map(([_, { id, quantity, size}]) => ({
            price: id,
            quantity,
            size
        }))
    });

    const stripe = await getStripe();
    await stripe.redirectToCheckout({sessionId: id});
}