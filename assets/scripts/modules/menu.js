define([
    'modules/game-scene',
], function (gameScene) {
    'use strict';
    function menu(selector, canvas) {
        var menuItens = document.querySelectorAll(selector),
            itensLength = menuItens.length,
            i;
        function onMenuClick(ev) {
            ev.preventDefault();
            gameScene.start(canvas);
        }
        for (i = 0; i < itensLength; i += 1) {
            menuItens[i].onclick = onMenuClick;
        }
    }
    return menu;
});
