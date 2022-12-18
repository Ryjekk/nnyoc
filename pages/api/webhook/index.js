const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import { buffer } from 'micro'

export const config = {
    api: {
        bodyParser: false
    }
};

export default async function handler (req, res) {
    if (req.method === 'POST') {
        let event; 
        
        try {
            const rawBody = await buffer(req);
            const signature = req.headers['stripe-signature'];

            event = stripe.webhooks.constructEvent(
                rawBody.toString(),
                signature,
                process.env.STRIPE_WEBHOOK_SECRET
            )
        } catch (err) {
            console.log(`🔥Err message: ${err.message}`);
            res.status(400).send(`Webhook error: ${err.message}`)
        }

        console.log('✅ Success:', event.id);

        if (event.type === 'checkout.session.completed') {
            // sending email to customer or so here
            console.log('💰 received')
        } else {
            console.warn(`🤷‍ Unhandled event type: ${event.type}`)
        }

        res.json({ received: true })
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method not allowed');
    }
}