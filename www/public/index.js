define(["require", "exports", "jquery", "./api", "kendo-ui-core/js/kendo.button", "kendo-ui-core/css/web/kendo.common.core.css", "kendo-ui-core/css/web/kendo.default.css"], function (require, exports, $, api_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    $(function () {
        $('button').kendoButton({
            click: function (e) {
                api_1.default.getMe()
                    .done(function (data) {
                    window.alert(kendo.format('My name is `{0}`', data.user));
                });
            },
            icon: 'refresh',
        });
    });
});
//# sourceMappingURL=index.js.map