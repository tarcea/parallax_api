import express from "express";
import { bgs } from "./data.js";

const PORT = process.env.PORT || 3001;
const app = express();


app.get('/', (req, res) => {
  const rndInt = Math.floor(Math.random() * bgs.length) + 1;
  const bg = bgs[rndInt - 1];
  res.send(bg);
})

app.listen(PORT, () => console.log(`server listen on port ${PORT}`))