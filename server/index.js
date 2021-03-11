// const express = require('express')
// const app = express()
// const bc = require('./controllers/messages_controller')

// const port = 3001
// app.use(express.json())

// app.get('/api/messages', bc.read)
// app.post('/api/messages', bc.create)
// app.put('/api/messages/:id', bc.update)
// app.delete('/api/messages/:id', bc.delete)

// app.listen(port, () => console.log('Server bumping on ' + port))

const express = require("express");
const mc = require("./controllers/messages_controller");

const app = express();

app.use(express.json());

const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
