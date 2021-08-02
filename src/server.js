require('dotenv').config()
import express from "express";
import { createServer} from "http";
import bodyParser from 'body-parser';
import cors  from 'cors';
import {validateRequest} from './middleware';
import mongoose from 'mongoose';
import initUserRoutes from './routes/user';
import { createApolloServer } from './gql/server';
const MONGO_CONNECTION_STRING="mongodb://mongo-db:27017/code-recipes";
mongoose.Promise = global.Promise;

export class Server {
    constructor(){
        this.initialize();
        this.initRoutesMiddlewares();
        this.initRoutes();
        createApolloServer(this.app);
    }

    initialize = ()=>{
        const app = express();
        mongoose.connect(MONGO_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology:true});
        app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
        app.use(express.json());
        app.use(cors({
          origin: function(origin, callback){
            console.log("received call from origin:  ", origin)
            return callback(null, true);
          },
          optionsSuccessStatus: 200,
          credentials: true
        }));
        const router = express.Router();
        this.router = router;
        this.app = app;
        this.DEFAULT_PORT = process.env.PORT || 3000;
        this.httpServer = createServer(this.app);
        
    }

    initRoutesMiddlewares=()=>{
        try{
          this.routesMiddlewares = {
            validateRequest,
          }
        }catch(err){
          console.log(err);
        }
      }

    initRoutes = ()=>{
        try{
          console.log("initalizing Routes ")
          initUserRoutes(this.app, this.routesMiddlewares);
        }catch(err){
          console.log(err)
        }
      }

    listen = (callback) => {
        this.httpServer.listen(this.DEFAULT_PORT, () =>
            callback(this.DEFAULT_PORT)
        );
    }
  
}