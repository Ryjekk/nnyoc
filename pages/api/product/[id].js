const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    const {id} = req.query;

    try {
        const product = await stripe.products.retrieve(
            id
        );

        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}