import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.send('<html><body><h1>Hiya</h1></body></html>')
});

app.listen(3000, () => {
  console.log("Express app listening on port 3000");
})
