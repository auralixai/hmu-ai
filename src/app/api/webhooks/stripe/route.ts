import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: Request) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string || 'sk_test_dummy', {
      apiVersion: '2024-06-20' as any,
    });

    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;
    const payload = await req.text();
    const sig = req.headers.get('stripe-signature') as string;

    let event;

    if (endpointSecret) {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } else {
      event = JSON.parse(payload);
    }

    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object;
        console.log('Payment successful for session:', session.id);
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }
}
