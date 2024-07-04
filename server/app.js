import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { authRoutes, userRoutes } from "./routes/index.js";
import { connectMongoDb } from "./utils/mongodb.js";
import errorHandlingMiddleware from "./middlewares/index.js";

//config
const connectifyServer = express();

// connect to db
connectMongoDb();

connectifyServer.use(cors());
connectifyServer.use(express.json());
connectifyServer.use(bodyParser.json({ limit: "80mb" }));
connectifyServer.use(bodyParser.urlencoded({ limit: "80mb", extended: true }));

// routes
connectifyServer.use("/api/v1/auth", authRoutes);
connectifyServer.use("/api/v1/users", userRoutes)

// error handling middleware
connectifyServer.use(errorHandlingMiddleware);

export default connectifyServer;
