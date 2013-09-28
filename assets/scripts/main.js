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
