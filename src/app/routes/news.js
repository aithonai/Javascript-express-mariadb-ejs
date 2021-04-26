const pool = require("../../config/dbConnection");

module.exports = (app) => {
  app.get("/", async (req, res) => {
    // Get connection
    const conn = await pool.getConnection();

    // Create new query
    const query = "select * from news";

    // Executing the query
    const rows = await conn.query(query);

    // Response of query
    res.render("news/news", { news: rows });
  });

  app.post("/news", async function (req, res) {
    // Getting the request.
    const { title, news } = req.body;
    
    const conn = await pool.getConnection();

    const query = "INSERT INTO news (title, news) VALUE (?, ?)";
    const result = await conn.query(query, [title, news]);
    
    // Ok response & redirect to home page.
    res.status(200).redirect("/");
  });
};
