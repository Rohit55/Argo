import express from 'express';
import cors from 'cors';
import { connectDB } from "./db.js";
import dotenv from "dotenv";
import items from "./routes/items.js";

const app = express();
const PORT = process.env.PORT;

connectDB();
app.use(cors());
app.use(items);
dotenv.config();

app.get('/', (req, res) => {
  res.status(200).send('Inventory Management API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});