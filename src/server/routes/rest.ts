import { NextFunction, Request, Response, Router } from 'express';

/**
 * / route
 *
 * @class User
 */
export class RestRoute {

    /**
     * Create the routes.
     *
     * @class IndexRoute
     * @method create
     * @static
     */
    public static create(router: Router) {
        // log
        console.log('[Restroute::create] Creating rest route.');

        // add home page route
        router.get('/api', (req: Request, res: Response, next: NextFunction) => {
            new RestRoute().getMe(req, res, next);
        });
    }

    /**
     * Constructor
     *
     * @class IndexRoute
     * @constructor
     */
    /*
    constructor() {}
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
    public getMe(req: Request, res: Response, next: NextFunction) {

        // render template
        res.send({ user: 'Joe Bloggs' });
    }
}
