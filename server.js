import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { faker } from '@faker-js/faker';

const app = express();

app.use(cors());
app.use(
  bodyParser.json({
    type(req) {
      return true;
    },
  })
);
app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

const messages = [
  {
    id: faker.string.uuid(),
    from: faker.internet.email(),
    subject: `Hello from ${faker.internet.userName()}`,
    body: "Long message body here",
    recieved: faker.date.past(),
  },
  {
    id: faker.string.uuid(),
    from: faker.internet.email(),
    subject: `Hello from ${faker.internet.userName()}`,
    body: "Long message body here",
    recieved: faker.date.past(),
  },
  {
    id: faker.string.uuid(),
    from: faker.internet.email(),
    subject: `Hello from ${faker.internet.userName()}`,
    body: "Long message body here",
    recieved: faker.date.past(),
  },
  {
    id: faker.string.uuid(),
    from: faker.internet.email(),
    subject: `Hello from ${faker.internet.userName()}`,
    body: "Long message body here",
    recieved: faker.date.past(),
  },
];

app.get("/messages/unread", async (request, response) => {
  response
    .status(200)
    .send(JSON.stringify({ 
      status: "ok",
      timestamp: Date.now(),
      messages,
    }))
    .end();
});

const port = process.env.PORT || 3000;

const bootstrap = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server has been started on http://localhost:${port}`)
    );
  } catch (error) {
    console.error(error);
  }
};

bootstrap();