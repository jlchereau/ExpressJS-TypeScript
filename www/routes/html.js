"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HtmlRoute = (function () {
    function HtmlRoute() {
    }
    HtmlRoute.create = function (router) {
        console.log('[IndexRoute::create] Creating index route.');
        router.get('/', function (req, res, next) {
            new HtmlRoute().getHomePage(req, res, next);
        });
    };
    HtmlRoute.prototype.getHomePage = function (req, res, next) {
        res.locals.message = 'Hello ';
        var data = {
            label: 'Click Me!',
        };
        res.render('index', data);
    };
    return HtmlRoute;
}());
exports.HtmlRoute = HtmlRoute;
//# sourceMappingURL=html.js.map