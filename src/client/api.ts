'use strict';

import * as $ from 'jquery';

export default {
    getMe: () => {
        return $.get('/api');
    },
};
