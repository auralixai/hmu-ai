import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const plans: Record<string, any> = {
  blueprint: {
    name: 'The AI Sales Blueprint',
    amount: 9700,
    mode: 'payment',
  },
  core: {
    name: 'Core Deployment',
    amount: 250000,
    mode: 'payment',
  },
  fractional: {
    name: 'Fractional Revenue Architect',
    amount: 500000,
    mode: 'subscription',
    interval: 'month'
  },
  workshop: {
    name: 'Executive Workshop (Houston)',
    amount: 99700,
    mode: 'payment',
  }
};

export async function POST(req: Request) {
  try {
    const { planId } = await req.json();
    const plan = plans[planId];

    if (!plan) {
      return NextResponse.json({ error: 'Invalid plan ID' }, { status: 400 });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
      apiVersion: '2024-06-20' as any,
    });

    const priceData: any = {
      currency: 'usd',
      product_data: {
        name: plan.name,
      },
      unit_amount: plan.amount,
    };

    if (plan.mode === 'subscription') {
      priceData.recurring = { interval: plan.interval };
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: priceData,
          quantity: 1,
        },
      ],
      mode: plan.mode,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://hmu.ai'}/?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://hmu.ai'}/`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
