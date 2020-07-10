let snake, food, grid, d = 1, obj, high_score, current_score, p_high_score, p_current_score, highest = 0;
var body;

function setup() {
  createCanvas(1000, 550);
  obj = new Obstacle();
  obj.create();
  snake = new Snake();
  grid = new Grid();
  food = new Food();

  body = select("body");

  high_score = createElement("h1", "HIGH SCORE");
  high_score.position(1120, 150);

  p_high_score = createElement("p", "0");
  p_high_score.position(1220, 250);

  current_score = createElement("h1", "CURRENT SCORE");
  current_score.position(1090, 390);

  p_current_score = createElement("p", "0");
  p_current_score.position(1220, 490);
}

let frame = 5;

function draw() {
  background(0);
  frameRate(frame);
  noStroke();
  frame = snake.eats();
  food.blink();
  snake.update();

  if(snake.dieToItself() || snake.dieObstacles())
    snake.makeChangesAfterDeath();

  if(snake.x < 0)
      snake.x = width;
  else if(snake.y < 0)
      snake.y = height;
  else if(snake.x > (width - 25))
      snake.x = 0;
  else if(snake.y > (height - 25))
      snake.y = 0;

  grid.display();
  snake.show();
  obj.display();
}

function keyPressed() {
    
  //snake.speedx = 25;
  if (keyCode == UP_ARROW || keyCode == 87){
    	d = 0;
    	snake.direction(0, -1);
    }
  else if (keyCode == DOWN_ARROW || keyCode == 83){
    	d = 2;
    	snake.direction(0, 1);
    }
  else if (keyCode == LEFT_ARROW || keyCode == 65){
    	d = 3;
    	snake.direction(-1, 0);
    }
  else if (keyCode == RIGHT_ARROW || keyCode == 68){
    	d = 1;
    	snake.direction(1, 0);
    }
}
