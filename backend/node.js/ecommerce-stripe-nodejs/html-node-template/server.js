// This is your test secret API key.
const stripe = require('stripe')('sk_test_51Mg8ltJGQd1m2Nvf84uE8xIIhYEYWmmd4Hbd3PvBMSjNMT3sbySQE3fEx8VXuV6lbJwA5wNW34dAtd8zVhe5hd30004qc2jZDz');
const express = require('express');
const app = express();
app.use(express.static('.'));

app.use(
  express.json({
    verify: function (req, res, buf) {
      if (req.originalUrl.startsWith('/webhook')) {
        req.rawBody = buf.toString();
      }
    }
  })
);

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'product',
            images: ['./public/images/product.avif']
          },
          unit_amount: 950,
        },
        quantity: req.body.quantity,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));