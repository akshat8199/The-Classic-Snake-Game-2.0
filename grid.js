function Grid()
{
  this.x = 0;
  this.y = 0;

  this.display = function()
  {
    for(let i = 0; i <= width; i += 25)
    {
      stroke(255, 100, 0);
      strokeWeight(5);
      point(i + 12.5, snake.y + 12.5);
      stroke(255, 0, 255);
      strokeWeight(0.5);
      line(i, 0, i, height);
    }

    for(let i = 0; i <= height; i += 25)
    {
      stroke(255, 100, 0);
      strokeWeight(5);
      point(snake.x + 12.5, i + 12.5);
      stroke(255, 0, 255);
      strokeWeight(0.5);
      line(0, i, width, i);
    }
  }
}
