import { config } from "dotenv";
import express from "express";

//Para poder acceder a las variables del ambiente (.env)
config();

const app = express();

app.listen(process.env.SERVER_PORT, function () {
  console.log(`Server running on port ${process.env.SERVER_PORT}`);
});

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World");
});
