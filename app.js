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

app.listen(port, () => {
  console.log("Server attivo su http://localhost:" + port);
});

export default app;