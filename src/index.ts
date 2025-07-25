import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hydra API with Express JS");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Hydra server is running in port ${PORT}`);
});
