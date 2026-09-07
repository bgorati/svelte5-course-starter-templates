import { json } from '@sveltejs/kit';
import Stripe from "stripe";

import { STRIPE_API_KEY, PRICE_ID } from "$env/static/private";

const stripe = new Stripe(STRIPE_API_KEY);

export async function POST() {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
                price: PRICE_ID,
                quantity: 1,
            },
        ],
        mode: "payment",
        success_url: "http://localhost:5173/checkout/success",
        cancel_url: "http://localhost:5173/checkout/failure",
    })
    return json({ sessionId: session.id })
}