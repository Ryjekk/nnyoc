// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
//
// export default async function handler(req, res) {
//     try {
//         const prices = await stripe.prices.list({
//             limit: 100,
//         });
//         res.status(200).json(prices);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// }