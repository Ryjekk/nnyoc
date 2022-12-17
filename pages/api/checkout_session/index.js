const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler (req, res) {
    if (req.method === 'POST') {
        try {
            const session = await stripe.checkout.sessions.create({
                mode: 'payment',
                payment_method_types: ['card'],
                line_items: req?.body?.items ?? [],
                metadata: req?.body.metadata ?? [],
                shipping_address_collection: {allowed_countries: ['IS, PL, DK, NO, US']},
                // custom_text: {
                //     shipping_address: {
                //         message: 'Please note that we can\'t guarantee 2-day delivery for PO boxes at this time.',
                //     },
                //     submit: {message: 'We\'ll email you instructions on how to get started.'},
                // },
                shipping_options: [
                    {
                        shipping_rate_data: {
                            type: 'fixed_amount',
                            fixed_amount: {amount: 0, currency: 'usd'},
                            display_name: 'Free shipping',
                            delivery_estimate: {
                                minimum: {unit: 'business_day', value: 5},
                                maximum: {unit: 'business_day', value: 14},
                            },
                        },
                    },
                ],
                success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}`,
            });

            res.status(200).json(session)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).json({ message: "Method not allowed" });
    }
}