function Snake() {

  this.x;
  this.y;
  while(true)
  {
    this.x = floor(random(width/25 - 1)) * 25;
    this.y = floor(random(height/25 - 1)) * 25;
    let f = 0;
    for(let i = 0; i < obj.obs.length; i++)
    {
      for(let j = 0; j < 5; j++)
        if(obj.obs[i][j].x == this.x && obj.obs[i][j].y == this.y)
          {f = 1; break;}
      if(f == 1)
        break;
    }
    if(f == 0)
      break;
  }

  this.speedx = 0;
  this.speedy = 0;
  this.total = 0;
  this.arr = [];

  this.show = function() {
    fill(255, 0, 0);
    for(let i = 0; i < this.arr.length; i++)
    circle(this.arr[i].x + 12.5, this.arr[i].y + 12.5, 25);
    circle(this.x + 12.5, this.y + 12.5, 25);
  }

  this.update = function() {

    if(this.total == this.arr.length)
    for(let i = 0; i < this.total - 1; i++)
      this.arr[i] = this.arr[i + 1];
    this.arr[this.total - 1] = createVector(this.x, this.y)
    this.x = this.x + this.speedx;
    this.y = this.y + this.speedy;
  }

  this.dieObstacles = function()
  {
    for(let i = 0; i < obj.obs.length; i++)
      for(let j = 0; j < 5; j++)
        if(obj.obs[i][j].x == this.x && obj.obs[i][j].y == this.y)
          return true;        
    return false;
  }

  this.dieToItself = function()
  {
    for(let i = 0; i < this.arr.length; i++)
      if(this.arr[i].x == this.x && this.arr[i].y == this.y)
        return true;
    return false;
  }

  this.makeChangesAfterDeath = function()
  {
    this.arr = [];
    frame = 5;
    delete snake;
    snake = new Snake();
    console.log("Start over");
    alert ("Sorry you are dead\nPress any key to start over!! 🥰");
    food.update();
    p_current_score.html(0);
  }

  this.eats = function() {
    if (food.x == this.x && food.y == this.y) {
      this.total++;
      food.update();
      p_current_score.html(this.total);
      if(this.total > highest)
      {
        highest = this.total;
        p_high_score.html(highest)
        console.log("highest " + highest)
      }

      frame += 0.5;
      console.log("frame " + frame);
    }
    return frame;
  }

  this.direction = function(x, y) {
    this.speedx = x * 25;
    this.speedy = y * 25;
  }
}
