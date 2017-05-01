import { NextFunction, Request, Response, Router } from 'express';

/**
 * / route
 *
 * @class User
 */
export class HtmlRoute {

    /**
     * Create the routes.
     *
     * @class IndexRoute
     * @method create
     * @static
     */
    public static create(router: Router) {
        // log
        console.log('[IndexRoute::create] Creating index route.');

        // add home page route
        router.get('/', (req: Request, res: Response, next: NextFunction) => {
            new HtmlRoute().getHomePage(req, res, next);
        });
    }

    /**
     * Title
     */
    protected title: string;

    /**
     * Constructor
     *
     * @class IndexRoute
     * @constructor
     */
    /*
    constructor() {
        // set custom title
        this.title = 'Home | Tour of Heros';
    }
    */

    /**
     * The home page route.
     *
     * @class IndexRoute
     * @method index
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     * @next {NextFunction} Execute the next method.
     */
    public getHomePage(req: Request, res: Response, next: NextFunction) {

        // Set locals
        res.locals.message = 'Hello ';

        // set data
        const data: object = {
            label: 'Click Me!',
        };

        // render template
        res.render('index', data);
    }
}
