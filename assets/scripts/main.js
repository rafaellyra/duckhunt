require([
    'modules/renderer',
    'modules/menu',
    'hbars!templates/menu'
], function (renderer, menu, menuTemplate) {
    'use strict';
    renderer('body', menuTemplate);
    menu('body', '.main-nav .item');
});
