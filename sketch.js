var box,lilbox;
function setup() {
  createCanvas(800,400);
 box = createSprite(400, 200, 50, 50);
 box.shapeColor = "pink";
 lilbox = createSprite(400,300,50,50);
 lilbox.shapeColor = "pink";
}

function draw() {
  background("red");
  lilbox.x = mouseX;
  lilbox.y = mouseY;
if(lilbox.x - box.x < lilbox.width/2 + box.width/2 && box.x - lilbox.x < box.width/2 + lilbox.width/2
  && lilbox.y - box.y < lilbox.height/2+box.height/2 && box.y - lilbox.y < box.height/2 + lilbox.height/2){
    lilbox.shapeColor = "yellow";
    box.shapeColor = "yellow";
}
else{lilbox.shapeColor = "pink"
box.shapeColor = "pink"}

  drawSprites();
} 