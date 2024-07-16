import express from "express";
import cors from "cors";
import path from "path";
import env from "dotenv";
import user_controllers from "./controllers/user_controllers";
env.config();

const app = express();
const PORT = process.env.PORT;

//MIDDLEWARE
app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));

//ROUTES
app.use("/api", user_controllers);

//LISTENER
app.listen(PORT, "0.0.0.0", () => {
  console.log(`
    SERVER RUNNING TO PORT ${PORT}
    `);
});
