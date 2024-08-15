game.Lava = 
{
    moveSpeed :2,
    lavaY :200,
    color : 'orange',
    LoopLava : function()
    {
        setTimeout(()=>
            {
                updateLava();
                this.LoopLava();
            },100)
    }
}


game.drawLava = function ()
{
    var y = game.Lava.lavaY - (game.player.y - game.options.canvasHeight / 2);
    game.context.fillStyle = game.Lava.color; 
    game.context.fillRect(0, y, game.options.canvasWidth,game.options.canvasHeight);
}

game.CheckColiWithLava = function ()
{
    if ((game.player.y + game.player.height/2) >= game.Lava.lavaY) {
        return true;
      }
      return false;
}



function updateLava() {
    game.Lava.lavaY -= game.Lava.moveSpeed;
    if(game.CheckColiWithLava())
    {
        this.game.isOver = true;
    }
    game.requestRedraw();
}



