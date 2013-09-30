define([
    'modules/renderer',
    'hbars!templates/game-scene'
], function (renderer, gameScenarioTemplate) {
    'use strict';
    function menu(selector, canvas) {
        var menuItens = document.querySelectorAll(selector),
            itensLength = menuItens.length,
            i;
        function onMenuClick(ev) {
            renderer(canvas, gameScenarioTemplate);
            ev.preventDefault();
        }
        for (i = 0; i < itensLength; i += 1) {
            menuItens[i].onclick = onMenuClick;
        }
    }
    return menu;
});
