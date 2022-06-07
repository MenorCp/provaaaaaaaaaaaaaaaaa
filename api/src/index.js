import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import shController from './controller/shController.js'


const server = express();
server.use(cors());
server.use(express.json());
server.use(shController);

server.listen(process.env.PORT, () => 
    console.log(`API online na porta ${process.env.PORT}`)
)