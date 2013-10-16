define([
    'modules/renderer',
    'hbars!templates/game-scene'
], function (renderer, sceneTemplate) {
    'use strict';
    function renderScene(canvas) {
        renderer(canvas, sceneTemplate);
    }
    return {
        'start': function (canvas) {
            renderScene(canvas);
        }
    };
});
