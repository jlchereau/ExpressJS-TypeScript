define(["require", "exports", "jquery"], function (require, exports, $) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        getMe: function () {
            return $.get('/api');
        },
    };
});
//# sourceMappingURL=api.js.map