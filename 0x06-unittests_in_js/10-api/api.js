const express = require('express');
const app = express();

const port = 7865;

app.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (_req, res) => {
    res.send({
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    });
});

app.post('/login', (_req, res) => {
    const username = req.body.username;
    if (username) {
        res.send(`Welcome ${username}`)
    } else {
        res.status(404).send();
    }
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});