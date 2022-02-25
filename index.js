const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const CTX_WIDTH = 600;
const CTX_HEIGHT = 600;
const LEFT = 37;
const RIGHT = 39;
const SPACE = 32;
const FPS = 20;
let FIRE_SPEED = 5;
const SHIP_SPEED = 20;
const COLISION = 20;
// =============== ship init ===============
const ship = new Image()
ship.src = 'assets/png/sheep.png'
const shipBulletImg = new Image()
shipBulletImg.src = 'assets/png/fire.png'
// ===============  ===============
let posShipX = CTX_WIDTH / 2 - 25
let posShipY = 550
let firesArray = []
// =============== Enemy ===============
let ufo = new Image();
ufo.src = 'assets/png/ufo.png'
let enemyArray = [];
// =============== Objects  ===============
function Bullet() { // ship bullets
	this.fire = true;
	this.posFireX = posShipX;
	// this.posFireY = 40; // = a 
	this.posFireY = CTX_HEIGHT - 20; // = a 
	this.bulletSpeed = FIRE_SPEED;
}
function EnemyBullet(x = 33, y = 33) {
	// this.id = randNum(1,500)
	this.fire = true;
	this.X = x;
	this.Y = y;
	this.speed = randNum(4, 6) + gameProcess.level
	this.maxBullets = 5
	this.timer = 0
}
// this.bullet = new enemyBullet()
function Enemy() {
	this.isLive = true
	this.posEnemyX = randNum(15, CTX_WIDTH - 15)
	this.posEnemyY = randNum(15, CTX_HEIGHT - 250)
	this.bulletsArray = []
	this.speed = randNum(4, 6) / 10 + gameProcess.level / 5
	this.fireSpeed = randNum(250, 400)
	this.directionX = ['right', 'left'][randNum(0, 1)]
	this.directionY = ['up', 'down'][randNum(0, 1)]
	this.timer = 0
}
const gameProcess = {
	shipLive: 3,
	gameStatus: 'run',
	score: 0,
	hitDetected: false,
	level: 0,
	resuls: [],
	maxResulst: 10,
	level: 1,
	checkShipHit() {
		if (this.hitDetected === true) {
			this.shipLive -= 1
			this.hitDetected = false
		}
	}
}

// ===============  ===============


let generateEnem = setInterval(() => enemyArray[enemyArray.length] = new Enemy(), 7000) // genegator Enemies


//start
// rendeging
// =============== main ===============
newEnemy(3)
showGameProcess(700)

let processGame = setInterval(draw, FPS)
function draw() {
	ctx.clearRect(0, 0, CTX_WIDTH, CTX_HEIGHT) // clear all
	shipFly() // move my ship on canvas
	enemyArray.forEach(enemyFly) // processing bullets
	firesArray.forEach(shipFire) // processing bullets
	processingEnemyHit() // processing hit to enemies
	processingShipHit() // 
	gameProcess.checkShipHit()
}
// =============== **** ===============
function shipFly() { // move my ship on canvas
	if (gameProcess.shipLive < 1) {
		document.querySelector('.game-over-wrapper').style.display = 'flex'
		enemyArray = []
		if (gameProcess.gameStatus === 'run') gameOver()
		gameProcess.gameStatus = 'stop'
		gameProcess.level = 0
		return
	}
	if (gameProcess.gameStatus === 'run') {
		ctx.drawImage(ship, posShipX, posShipY, 50, 50);
		if (posShipX > 560) { posShipX = 560 }
		if (posShipX < 1) { posShipX = 1 }
	}

}

function enemyFly(obj, index = 0) { // move enemies on canvas
	obj.timer += 1
	if (obj.timer == obj.fireSpeed) {
		obj.bulletsArray[obj.bulletsArray.length] = new EnemyBullet(enemyArray[index].posEnemyX, enemyArray[index].posEnemyY)

		obj.timer = 0
	}
	if (obj.isLive == true) {

		if (obj.directionX === 'left') obj.posEnemyX -= obj.speed  //fly
		if (obj.directionX === 'right') obj.posEnemyX += obj.speed  //fly
		if (obj.directionY === 'up') obj.posEnemyY -= obj.speed  //fly
		if (obj.directionY === 'down') obj.posEnemyY += obj.speed  //fly

		if (CTX_WIDTH - obj.posEnemyX < 25) obj.directionX = 'left'
		if (obj.posEnemyX < 0) obj.directionX = 'right'
		if (CTX_HEIGHT - obj.posEnemyY < CTX_HEIGHT / 2) obj.directionY = 'up'
		if (obj.posEnemyY < 25) obj.directionY = 'down'
		ctx.drawImage(ufo, obj.posEnemyX, obj.posEnemyY, 30, 30);

	}
	if (obj.isLive == false) {
		enemyArray.splice(index, 1) // detele bullet
		return
	}
}

function shipFire(obj, index) {	// prosessing my ship bullets

	if (obj.fire == false) {
		firesArray.splice(index, 1) // detele bullet
		return
	}
	if (obj.fire == true) {
		obj.posFireY -= obj.bulletSpeed  //fly
		if (obj.posFireY - 20 < 0) {
			obj.fire = false	// finish fly
		}
		// ctx.fillRect(obj.posFireX + 16, CTX_HEIGHT - obj.posFireY, 14, 14); //draw bullet у
	}
	ctx.fillStyle = "rgb(200,0,0)"
	// ctx.fillRect(obj.posFireX + 16, obj.posFireY, 14, 14); //draw bullet у
	ctx.drawImage(shipBulletImg, obj.posFireX + 10, obj.posFireY - 50, 30, 30);
}

function enemyFire(obj, index) { // processing enemies bullets

	if (obj.isLive && obj.bulletsArray[index].fire) {
		obj.bulletsArray[index].Y += obj.bulletsArray[index].speed
		if (obj.bulletsArray[index].Y > CTX_HEIGHT) {
			obj.bulletsArray[index].fire = false

			obj.bulletsArray.splice(index, 1)
		}
		// ctx.fillStyle = "rgb(100,101,10)"
		// ctx.fillRect(obj.bulletsArray[index].X + 10, obj.bulletsArray[index].Y, 10, 10); //draw bullet у
		ctx.drawImage(shipBulletImg, obj.bulletsArray[index].X + 10, obj.bulletsArray[index].Y, 20, 20);
	}
}

function processingShipHit() { // processing hit to my ship

	enemyArray.forEach((itemE, indexE) => { // processing hit to my ship
		itemE.bulletsArray.forEach((itemB, indexB) => {
			try {
				enemyFire(itemE, indexB)
			} catch { } // ???

			if ((itemB.Y + COLISION > posShipY && itemB.Y - COLISION < posShipY) &&
				(itemB.X + COLISION > posShipX && itemB.X - COLISION < posShipX)) {
				gameProcess.hitDetected = true
				itemE.bulletsArray.splice(indexB, 1)
			}
		})
	})
}

function processingEnemyHit() { // processing hit to enemies
	firesArray.forEach((itemF, indexF) => {
		enemyArray.forEach((itemE, indexE) => {
			if ((itemE.posEnemyY - 5 <= itemF.posFireY && itemE.posEnemyY + 50 >= itemF.posFireY) &&
				(itemE.posEnemyX - COLISION <= itemF.posFireX && itemE.posEnemyX + COLISION >= itemF.posFireX)) {
				itemE.isLive = false
				itemF.fire = false
				gameProcess.score += 10
			}
		})

	});
}

document.addEventListener("keydown", direction);
function direction(event) {
	if (event.keyCode == LEFT && posShipX > 1) { posShipX -= SHIP_SPEED }
	if (event.keyCode == RIGHT && posShipX < 555) { posShipX += SHIP_SPEED }
	if (event.keyCode == SPACE) {
		firesArray[firesArray.length] = new Bullet()// create new bullet per every FPS
	}
}

function randNum(min, max) { // random number from min to max
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

function newLevel(level) {
	if (enemyArray.length < 1 && gameProcess.level === level) {
		newEnemy(level * 20)
		gameProcess.level += 1
		gameProcess.shipLive += 1
		FIRE_SPEED += level*2
	}
}

function showGameProcess(ms) { // show current resulst
	setInterval(() => {
		document.querySelector('.lives-amount').innerHTML = `  ` + gameProcess.shipLive
		document.querySelectorAll('.score h2')[1].innerHTML = gameProcess.score
		document.querySelectorAll('.level h2')[1].innerHTML = gameProcess.level
		document.querySelector('.over-score').innerHTML = 'Score :' + gameProcess.score
		newLevel(gameProcess.level)
	}, ms)
}

function newGame() {
	document.querySelector('.game-over-wrapper').style.display = 'none'
	gameProcess.shipLive = 3
	gameProcess.score = 0
	gameProcess.gameStatus = 'run'
	newEnemy(10)
	JSON.parse(localStorage.getItem('res'))
	gameProcess.level = 1;
}

function gameOver() {
	if (localStorage.getItem('res') === null) {
		localStorage.setItem('res', '[]')
	}
	let tmp = JSON.parse(localStorage.getItem('res')).sort((a, b) => b - a)
	console.log(tmp)
	if (tmp.length > 9) {
		tmp = tmp.slice(9)
	}
	tmp.push(gameProcess.score)
	localStorage.setItem('res', JSON.stringify(tmp))
	document.querySelectorAll('.results-table ol *').forEach(i => i.remove())
	JSON.parse(localStorage.getItem('res')).forEach(item => document.querySelector('.results-table ol').insertAdjacentHTML('beforeend', `<li>${item}</li>`))
}

function newEnemy(sum) {
	for (i = 0; i < sum; i++) {
		enemyArray[enemyArray.length] = new Enemy()// create new enemy
	}
}
