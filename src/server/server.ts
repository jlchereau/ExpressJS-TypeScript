/* see http:// brianflove.com/2016/11/08/typescript-2-express-node/ */

import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';

// import errorHandler = require('errorhandler');
// import methodOverride = require('method-override');

import { HtmlRoute } from './routes/html';
import { RestRoute } from './routes/rest';

export class Server {

    /**
     * Bootstrap the application.
     *
     * @class Server
     * @method bootstrap
     * @static
     * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
     */
    public static bootstrap(): Server {
        return new Server();
    }

    /**
     * App
     */
    public app: express.Application;

    /**
     * Constructor.
     *
     * @class Server
     * @constructor
     */
    constructor() {
        // create expressjs application
        this.app = express();

        // configure application
        this.config();

        // add routes
        this.routes();

    }

    /**
     * Configure application
     *
     * @class Server
     * @method config
     */
    public config() {
        // add static path  for client scripts
        this.app.use(express.static(path.join(__dirname, 'public')));

        // configure ejs
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.set('view engine', 'ejs');

        // use logger middlware
        // this.app.use(logger('dev'));

        // use json form parser middlware
        this.app.use(bodyParser.json());

        // use query string parser middlware
        this.app.use(bodyParser.urlencoded({
            extended: true,
        }));

        // use cookie parker middleware middlware
        // this.app.use(cookieParser('SECRET_GOES_HERE'));

        // use override middlware
        // this.app.use(methodOverride());

        // catch 404 and forward to error handler
        this.app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
            err.status = 404;
            next(err);
        });

        // error handling
        // this.app.use(errorHandler());
    }

    /**
     * Create Web page router
     *
     * @class Server
     * @method api
     */
    public routes() {

        let router: express.Router;
        router = express.Router();

        // Routes
        RestRoute.create(router);
        HtmlRoute.create(router);

        // use router middleware
        this.app.use(router);

    }
}
