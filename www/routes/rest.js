"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RestRoute = (function () {
    function RestRoute() {
    }
    RestRoute.create = function (router) {
        console.log('[Restroute::create] Creating rest route.');
        router.get('/api', function (req, res, next) {
            new RestRoute().getMe(req, res, next);
        });
    };
    RestRoute.prototype.getMe = function (req, res, next) {
        res.send({ user: 'Joe Bloggs' });
    };
    return RestRoute;
}());
exports.RestRoute = RestRoute;
//# sourceMappingURL=rest.js.map