import express from "express";
import moviesRouter from "./routers/movies.js";
import cors from "cors";


const app = express();
const port = 3000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("server ok");
});

app.use("/api/movies", moviesRouter);

app.listen(port, () => {
  console.log("Server attivo su http://localhost:" + port);
});

export default app;