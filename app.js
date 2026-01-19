import express from "express";
import moviesRouter from "./routers/movies.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("server ok");
});

app.use("/movies", moviesRouter);

// 404
app.use((req, res) => {
  res.status(404).json({ error: "non trovato" });
});

// 500
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "errore server" });
});

app.listen(port, () => {
  console.log("Server attivo su http://localhost:" + port);
});

export default app;