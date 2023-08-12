import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.listen(PORT, () => console.log(`listening on port:${PORT}`));

app.get("/", (req, res) => {
  console.log("test");
  res.send("hello");
});
