function Obstacle()
{
  this.x = 0;
  this.y = 0;
  this.obs = []
  this.arrayx = [75, 275, 475, 675, 875]
  this.arrayy = [75, 275, 475]

  this.create = function()
  {
    for(let i = 0; i < 5; i++)
    {
      this.x = this.arrayx[i];
      for(let j = 0; j < 3; j++)
      {
        this.y = this.arrayy[j];
        k = []
        k[0] = createVector(this.x, this.y);
        k[1] = createVector(this.x + 25, this.y);
        k[2] = createVector(this.x - 25, this.y);
        k[3] = createVector(this.x, this.y + 25);
        k[4] = createVector(this.x, this.y - 25);
        this.obs.push(k);
      }
    }
  }

  this.display = function()
  {
    fill(0,200,255);
    for(let i = 0; i < this.obs.length; i++)
      for(let j = 0; j < 5; j++)
    square(this.obs[i][j].x, this.obs[i][j].y, 25, 25);
  }
}
