'use strict';

import * as $ from 'jquery';
import 'kendo-ui-core/js/kendo.button';
import api from './api';

import 'kendo-ui-core/css/web/kendo.common.core.css';
import 'kendo-ui-core/css/web/kendo.default.css';

$(() => {

    $('button').kendoButton({
        click: (e) => {
            api.getMe()
                .done((data) => {
                    window.alert(kendo.format('My name is `{0}`', data.user));
                });
        },
        icon: 'refresh',
    });

});
