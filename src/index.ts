import { config } from "dotenv";
import express from "express";
import studentRouter from "./routes/student";
import unknownError from "./middlewares/unknown-error";
import unknownResource from "./middlewares/unknown-resource";
import errorRouter from "./routes/test";
import validationError from "./middlewares/validation-error";

//Para poder acceder a las variables del ambiente (.env)
config();

const app = express();

console.log("Hello world");

app.use(express.json());
app.use("/api/v1/student", studentRouter);
app.use("/error", errorRouter);

// Middleware
app.use(validationError);
app.use(unknownResource);
app.use(unknownError);

app.listen(process.env.SERVER_PORT, function () {
  console.log("Escuchando puerto " + process.env.SERVER_PORT);
});
