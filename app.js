import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import passport from 'passport'
import routes from './server-side/routes'
import helmet from 'helmet';
import env from './server-side/config/environment'
import express_server from "./server-side";
import startDatabase from "./server-side/config/database";
import consola from "consola";

const addRequestId = require('express-request-id')();

/** @databaseInitiation
 * Function to initiate the database connection
 * @returns {this} reference to the function it selt
 */
startDatabase.authenticate()
    .then(() => consola.success(
        {
            message: `Database connected successfully to ${env.DATABASE} database`,
            badge: true
        }))
    .catch(err => console.log('Error: ' + err));


const server = new express_server(express);

server
    .addMiddleware(cors())
    .addMiddleware(bodyParser.json())
    .addMiddleware(addRequestId)
    .helmetSecurity(helmet)
    .passportConfig(passport)
    .serveStaticFiles()
    .addRouting(routes)
    .errorHandler()
    .listenOn(env.PORT ?? 8000);

export default server.run();
