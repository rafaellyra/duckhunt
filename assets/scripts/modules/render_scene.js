define(['hbars!templates/scenario'], function (scenario) {
    'use strict';
    function SceneRender(config) {
        this.canvas = document.querySelector('body');
        this.config = config;
    }
    SceneRender.prototype.init = function () {
        this.canvas.innerHTML = scenario();
    };
    return SceneRender;
});
