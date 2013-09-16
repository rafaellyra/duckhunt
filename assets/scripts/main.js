requirejs.config({
    baseUrl: '/',
    shim: {
        Handlebars: {
            exports: 'Handlebars'
        }
    },
    paths: {
        modules: 'assets/scripts/modules',
        templates: 'assets/templates',
        Handlebars: 'vendors/components/handlebars/handlebars',
        hbars: 'vendors/components/requirejs-handlebars/hbars',
        text: 'vendors/components/requirejs-text/text'
    }
});

require([
    'hbars!templates/menu',
    'modules/render_scene'
], function (menu, SceneRender) {
    'use strict';
    var canvas = document.querySelector('body'),
        menuItens, itensLength, i, onMenuClick, scene;
    canvas.innerHTML = menu();
    menuItens = document.querySelectorAll('.main-nav .item');
    itensLength = menuItens.length;
    onMenuClick = function (ev) {
        scene = new SceneRender().init();
        ev.preventDefault();
    };
    for (i = 0; i < itensLength; i += 1) {
        menuItens[i].onclick = onMenuClick;
    }
});
