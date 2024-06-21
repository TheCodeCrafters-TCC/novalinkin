import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/index.js"
import { connectMongoDb } from "./init/mongodb.js";
import errorHandlingMiddleware from "./middlewares/index.js";

//config
const connectifyServer = express();

// connect to db
connectMongoDb()

connectifyServer.use(cors());
connectifyServer.use(express.json());
connectifyServer.use(bodyParser.json({limit: "80mb"}));
connectifyServer.use(bodyParser.urlencoded({limit:"80mb", extended:true}));

// routes
connectifyServer.use('/api/v1/auth', router);

// error handling middleware 
connectifyServer.use(errorHandlingMiddleware);

export default connectifyServer;