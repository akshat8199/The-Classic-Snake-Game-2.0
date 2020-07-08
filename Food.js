let f = 0;
function Food()
{
  this.x = floor(random(width/25)) * 25;
  this.y = floor(random(height/25)) * 25;

  this.blink = function()
  {
    if((snake.x + snake.y) % 2 == 0)
      fill(0);
    else
      fill(255, 255, 0);
    circle(this.x + 12.5, this.y + 12.5, 25);
  }

  this.update = function()
  {
    this.x = floor(random(width/25 - 1)) * 25;
    this.y = floor(random(height/25 - 1)) * 25;
    for(let i = 0; i < obj.obs.length; i++)
      for(let j = 0; j < 5; j++)
        if(obj.obs[i][j].x == this.x && obj.obs[i][j].y == this.y)
          food.update();
  }
}
