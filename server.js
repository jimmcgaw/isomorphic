import fs from 'fs';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import ContactApp from './app/components/ContactApp';

const app = express();

// app.set('views', './');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const contacts = JSON.parse(fs.readFileSync(__dirname + '/public/contacts.json', 'utf8'));
const ContactAppFactory = React.createFactory(ContactApp);

app.get('/', (request, response) => {
  let componentInstance = ContactAppFactory({ initialData: contacts });
  response.render('index', {
    content: renderToString(componentInstance)
  });
});

const port = 3000;

app.listen(port, () => {
  console.log("Express app listening on port " + port);
})
