import express from "express";
import { bgs } from "./data.js";
import cors from 'cors';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
// app.use(express.json());

app.get('/', (req, res) => {
  const rndInt = Math.floor(Math.random() * bgs.length) + 1;
  const bg = bgs[rndInt - 1];
  res.json({ bg });
})

app.listen(PORT, () => console.log(`server listen on port ${PORT}`))