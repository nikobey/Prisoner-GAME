var bgimg, pol;
var polimg;
var wall, wall2, wall3, wall1,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22;
function preload(){
//bgimg = loadImage("images/645023.jpg")
polimg = loadImage("profile.png")
}


function setup(){
createCanvas(800,800);
pol = new Police(400,400);

wall = createSprite(0, 60, 100, 10);
 wall1 = createSprite(100, 1, 10, 100);
 wall2 = createSprite(145, 50, 100, 10);
 wall3 = createSprite(180, 130, 10, 100);
 wall4= createSprite(225, 130, 10, 100);
 wall5 = createSprite(200, 180, 55, 10);
 wall6 = createSprite(30, 260, 100, 10);
 wall7 = createSprite(50, 100, 100, 10);
 wall8 = createSprite(200, 2, 10, 100);
 wall9 = createSprite(200, 200, 10, 100);
 wall10 = createSprite(135, 150, 100, 10);
 wall11 = createSprite(296, 300, 10, 100);
 wall12 = createSprite(150, 305, 10, 100);
 wall13 = createSprite(300, 90, 100, 10);
 wall14 = createSprite(355, 90, 10, 100);
 wall15 = createSprite(150, 430, 10, 100);
 wall16 = createSprite(296, 350, 10, 100);
 wall17= createSprite(105, 305, 100, 10);
 wall18= createSprite(350, 210, 100, 10);
 wall19= createSprite(250, 210, 100, 10);
 wall20= createSprite(175, 250, 60, 10);
 wall21 = createSprite(200, 10, 10, 100);
 wall22 = createSprite(200, 350, 100, 10);

}

function draw(){
 background("black")
pol.display()
drawSprites()
}