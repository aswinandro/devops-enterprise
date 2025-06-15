const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/health', (req, res) => res.send('OK'));
app.get('/', (req, res) => res.json({ message: 'Hello from Service A!' }));

app.listen(port, () => {
  console.log(`Service A running on port ${port}`);
});