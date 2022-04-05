import express, { Request, Response, NextFunction } from "express";
import cors from 'cors';
import 'reflect-metadata';
import 'express-async-errors';
import path from "path";
import { router } from './routes';
import './database';


class Server {
    private app: express.Application;

    constructor() {
        this.app = express();
        this.configuration();
        this.middlewares();
        this.routes();
    }

    public configuration() {
        this.app.set('port', process.env.PORT || 3333);
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static(path.join(__dirname, 'build')));
    }

    routes() {
        this.app.get('/', (request: Request, response: Response) => {
            response.json({ msg: "Server Online Vacina!" });
        });
        this.app.use(router);
        this.app.use(
            (err: Error, resquest: Request, response: Response, next: NextFunction) => {
                if (err instanceof Error) {
                    return response.status(400).json({
                        error: err.message
                    });
                }

                return response.status(500).json({
                    status: "error",
                    message: "Internal Server Error"
                })
            });
    }

    public start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server is listening ${this.app.get('port')} port.`);
        })
    }
}

export {
    Server
}