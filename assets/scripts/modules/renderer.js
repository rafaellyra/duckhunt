define(function () {
    'use strict';
    function renderer(canvasSelector, template) {
        document.querySelector(canvasSelector).innerHTML = template();
    }
    return renderer;
});
