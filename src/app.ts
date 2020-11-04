import express from "express";
import bodyParser from "body-parser";
import { Request, Response } from "express";
import { Validator } from "./controller";

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.loadConfig();
    }

    private loadConfig(): void {
        /** @description config to parse json body */
        this.app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: false }));
        /** @description router config */
        const router = express.Router();
        this.app.use('/', router)
        router.use('/', Validator);
    }
}

export default new App().app;