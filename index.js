const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const CTX_WIDTH = 600;
const CTX_HEIGHT = 600;
const LEFT = 37;
const RIGHT = 39;
const SPACE = 32;
const FPS = 500;
const FIRE_SPEED = 1;
const SHEEP_SPEED = 20;
const COLISION = 250;
// =============== sheep init ===============
const sheep = new Image()
sheep.src = 'assets/png/sheep.png'
// sheep.width = '10px'
// sheep.fillStyle = "rgb(200,100,0)"
// sheep.style.color = 'red'
// ===============  ===============
ctx.fillStyle = "rgb(200,0,0)"; // fire style
let posSheepX = CTX_WIDTH / 2 - 25
let posSheepY = 550
let a = 0;
let firesArray = []
// =============== Enemy ===============
let ufo = new Image();
ufo.src = 'assets/png/ufo.png'
let enemyBot = new Enemy();
let enemyArray = [];
// let posUfoX = 50;
// let posUfoY = 50;
firesArray[firesArray.length] = new Bullet()// create new bullet per every FPS
enemyArray[enemyArray.length] = new Enemy()// create new bullet per every FPS



// ===============  ===============
function Bullet() {
	this.fire = true;
	this.posFireX = posSheepX;
	this.posFireY = 0; // = a 
	this.bulletSpeed = 17;
}
function Enemy() {
	this.isLive = true
	this.posEnemyX = 280
	this.posEnemyY = 120
	this.enemySpeed = 0
	this.enemyDirection = 0

	this.Bullet = () => {
	}
}

let enem1 = new Enemy();

function sheepInit() {
	const sheep = new Image()
	sheep.src = 'assets/png/sheep.png'
	sheep.width = '10px'
}
let processGame = setInterval(draw, FPS)

// rendeging
// =============== render ===============
function draw() {
	ctx.clearRect(0, 0, CTX_WIDTH, CTX_HEIGHT) // clear all
	debug()
	// ctx.drawImage(ufo, posUfoX, posUfoY, 30, 30); 

	enemyArray.forEach((item, index) => enemyFly(item, index)) // processing bullets
	firesArray.forEach((item, index) => isFire(item, index)) // processing bullets

	firesArray.forEach((itemF, indexF) => {
		enemyArray.forEach((itemE, indexE) => {
			// console.log('itemE.posFireX --- xE									:'+itemF.posFireX) 
			// console.log(''+itemE.posFireX ----xB)
			// console.log(''+itemF.posFireY ---- yB)
			// console.log(''+itemE.posFireY -----yE)
			// console.log('dhgflkdjsfghksldjfg')
			// if(itemF.posFireX > itemE.posEnemyX && itemF.posFireY > itemE.posEnemyY) console.log('YEAAAAAAAAAAAAAAAA')
				console.log((itemE.posFireX - COLISION < itemE.posFireX) && (itemE.posFireX + COLISION > itemE.posFireX) && (itemE.posFireY - COLISION > itemF.posFireY) && (itemE.posFireY + COLISION < itemF.posFireY))
		})
	});
	sheepProcessing()
	enemyFly(enem1)
}

// ===============  ===============



let xE = 110 // 70-170
let yE = 280 // 225-325
let yB = 270 // 225-325
let xB = 130 // 70-170
console.log((xE - COLISION < xB) && (xE + COLISION > xB) && (yE - COLISION < yB) && (yE + COLISION > yB))


function sheepProcessing() {
	ctx.drawImage(sheep, posSheepX, posSheepY, 50, 50);
	if (posSheepX > 560) { posSheepX = 560 }
	if (posSheepX < 1) { posSheepX = 1 }

}
function enemyFly(obj, index = 0) {
	if (obj.isLive == true) {
		obj.posEnemyX += obj.enemySpeed  //fly
		obj.posEnemyY += obj.enemySpeed  //fly
		if (CTX_WIDTH - obj.posEnemyX < 0) {
			// obj.isLive = false	// finish fly
		}
		ctx.drawImage(ufo, obj.posEnemyX, obj.posEnemyY, 30, 30);
		// ctx.fillRect(obj.posFireX + 16, CTX_HEIGHT - 50 - obj.posFireY, 14, 14); //draw bullet у
	}
	if (obj.isLive == false) {
		enemyArray.splice(index, 1) // detele bullet
		return
	}
}

function isFire(obj, index) {

	if (obj.fire == true) {
		obj.posFireY += obj.bulletSpeed  //fly
		if (CTX_HEIGHT - 50 - obj.posFireY < 0) {
			obj.fire = false	// finish fly
		}
		ctx.fillRect(obj.posFireX + 16, CTX_HEIGHT - 50 - obj.posFireY, 14, 14); //draw bullet у
	}
	if (obj.fire == false) {
		firesArray.splice(index, 1) // detele bullet
		return
	}

}


document.addEventListener("keydown", direction);
function direction(event) {

	if (event.keyCode == LEFT && posSheepX > 1) { posSheepX -= SHEEP_SPEED }
	if (event.keyCode == RIGHT && posSheepX < 555) { posSheepX += SHEEP_SPEED }
	if (event.keyCode == SPACE) {
		firesArray[firesArray.length] = new Bullet()// create new bullet per every FPS
		// fire = true;
		a = 0;
	}
	if (event.keyCode == 17) {
		enemyArray[enemyArray.length] = new Enemy()// create new bullet per every FPS
	}
}

function debug() {

	document.querySelector('body .x').innerHTML = posSheepX
	document.querySelector('body .y').innerHTML = posSheepY
	try {
		document.querySelector('body .z').innerHTML = posSheepY - firesArray[0].posFireY
	} catch { }
	// firesArray.forEach(item => console.log(item))
	// console.log(enemyArray)
}



// function debounce(f, ms) {
// 	let isCooldown = false;
// 	return function () {
// 		if (isCooldown) return
// 		f.apply(this, arguments);
// 		isCooldown = true;
// 		setTimeout(() => isCooldown = false, ms);
// 	};

// }
























// function isFire(){ // work
// 	if(fire == true){
// 		if(fire == true){a+=7}
// 		if(posSheepY-a < 0){
// 			fire = false
// 			a = 0;
// 		}
// 		ctx.fillRect(posSheepX+16,posSheepY-a, 14, 14);
// 	}
// }