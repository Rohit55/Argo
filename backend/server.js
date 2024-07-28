import express from 'express';
import cors from 'cors';
// import {  } from "mangoose";
import dotenv from "dotenv";

import items from "./routes/items.js";


dotenv.config();
const app = express();
app.use(cors());
const PORT = process.env.PORT;
app.use(items);
app.get('/', (req, res) => {
  res.status(200).send('Inventory Management API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});