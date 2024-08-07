import express from "express";
import path from "path";
import frontRouter from "./routers/front";
import apiRouter from "./routers/api";

const app = express();

app.use("/", frontRouter);
app.use("/api", apiRouter);
app.use("/static", express.static(path.resolve("dist")));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
