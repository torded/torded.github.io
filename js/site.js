var game = new GameController(false);
game.start();
window.onresize = function () {
    game.displayWidth = document.documentElement.clientWidth;
    game.displayHeight = document.documentElement.clientHeight;
    console.log("document width = " + game.displayWidth + "; document height = " + game.displayHeight + ";");
    game.desck.rerender();
};








