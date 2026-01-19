import connection from "../db/connection.js";

// INDEX
export function index(req, res) {
  connection.query("SELECT * FROM movies", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
}

// SHOW
export function show(req, res) {
  const { id } = req.params;

  connection.query(
    "SELECT * FROM movies WHERE id = ?",
    [id],
    (err, movies) => {
      if (err) return res.status(500).json(err);

      if (movies.length === 0) {
        return res.status(404).json({ error: "Film non trovato" });
      }

      connection.query(
        "SELECT * FROM reviews WHERE movie_id = ?",
        [id],
        (err, reviews) => {
          if (err) return res.status(500).json(err);

          res.json({
            ...movies[0],
            reviews
          });
        }
      );
    }
  );
}
