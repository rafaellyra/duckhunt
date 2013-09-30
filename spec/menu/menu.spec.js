define([
    'modules/renderer',
    'modules/menu',
    'hbars!templates/menu'
], function (renderer, menu, menuTemplate) {
    'use strict';
    var itemMenuSelector = '.main-nav .item';
    describe('Duck Hunt Menu', function () {
        beforeEach(function () {
            renderer('.canvas', menuTemplate);
            menu(itemMenuSelector, '.canvas');
        });
        afterEach(function () {
            document.querySelector('.canvas').innerHTML = '';
        });
        it('should render the menu when the page load', function () {
            var nav = document.querySelectorAll('.main-nav');
            expect(nav.length).to.equal(1);
        });
        it('should render the game scene when choose a game mode', function () {
            document.querySelector(itemMenuSelector).click();
            expect($('.game-scene').length).to.equal(1);
        });
    });
});
