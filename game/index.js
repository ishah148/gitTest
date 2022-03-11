const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
// =============== ship init ===============
const ship = new Image()
ship.src = 'assets/png/sheep.png'
const shipBulletImg = new Image()
shipBulletImg.src = 'assets/png/fire.png'
// =============== Enemy ===============
let ufo = new Image();
ufo.src = 'assets/png/ufo.png'




const settings = { // game settings
	CTX_WIDTH : 600,
	CTX_HEIGHT : 600,
	left : 37,
	right : 39,
	space : 32,
	fps : 20,
	fireSpeed : 5,
	shipSpeed : 20,
	colision : 20,
}
const gameProcess = { // game process
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
			this.shipLive -= 1;
			this.hitDetected = false;
		}
	}
}
// =============== Objects  ===============
class Bullet {
	constructor() {
		this.fire = true;
		this.posFireX = myShip.posShipX; // костыль!!!
		this.posFireY = settings.CTX_HEIGHT - 20; // = a 
		this.bulletSpeed = settings.fireSpeed;
	}
	shipFire(index) {	// prosessing my ship bullets

		if (this.fire == false) {
			game.firesArray.splice(index, 1) // detele bullet
			return
		}
		if (this.fire == true) {
			this.posFireY -= this.bulletSpeed  //fly
			if (this.posFireY - 20 < 0) {
				this.fire = false	// finish fly
			}
			
		}
		ctx.fillStyle = "rgb(200,0,0)"
		
		ctx.drawImage(shipBulletImg, this.posFireX + 10, this.posFireY - 50, 30, 30);
	}
}

class EnemyBullet {
	constructor(x = 33, y = 33) {
		this.fire = true;
		this.X = x;
		this.Y = y;
		this.speed = randNum(4, 6) + gameProcess.level;
		this.maxBullets = 5;
		this.timer = 0;
	}
}

class Enemy {
	constructor() {
		this.bulletsArray = [];
		this.isLive = true;
		this.posEnemyX = randNum(15, settings.CTX_WIDTH - 15);
		this.posEnemyY = randNum(15, settings.CTX_HEIGHT - 250);
		this.speed = randNum(4, 6) / 10 + gameProcess.level / 5;
		this.fireSpeed = randNum(250, 400);
		this.directionX = ['settings.right', 'settings.left'][randNum(0, 1)];
		this.directionY = ['up', 'down'][randNum(0, 1)];
		this.timer = 0;
	}

	enemyFly(index) { // move enemies on canvas
		this.timer += 1
		// obj = this
		if (this.timer == this.fireSpeed) {
			this.bulletsArray[this.bulletsArray.length] = new EnemyBullet(game.enemyArray[index].posEnemyX, game.enemyArray[index].posEnemyY);
			this.timer = 0;
		}
		if (this.isLive == true) {
			if (this.directionX === 'settings.left') { this.posEnemyX -= this.speed }  //fly
			if (this.directionX === 'settings.right') { this.posEnemyX += this.speed }  //fly
			if (this.directionY === 'up') { this.posEnemyY -= this.speed }  //fly
			if (this.directionY === 'down') { this.posEnemyY += this.speed } //fly	
			if (settings.CTX_WIDTH - this.posEnemyX < 25) { this.directionX = 'settings.left' }
			if (this.posEnemyX < 0) { this.directionX = 'settings.right' }
			if (settings.CTX_HEIGHT - this.posEnemyY < settings.CTX_HEIGHT / 2) { this.directionY = 'up' }
			if (this.posEnemyY < 25) { this.directionY = 'down' }
			ctx.drawImage(ufo, this.posEnemyX, this.posEnemyY, 30, 30);
		}
		if (this.isLive == false) {
			game.enemyArray.splice(index, 1) // detele bullet
			return
		}
	}

	enemyFire(index) { // processing enemies bullets
		if (this.isLive && this.bulletsArray[index].fire) {
			this.bulletsArray[index].Y += this.bulletsArray[index].speed
			if (this.bulletsArray[index].Y > settings.CTX_HEIGHT) {
				this.bulletsArray[index].fire = false
				this.bulletsArray.splice(index, 1)
			}
			ctx.drawImage(shipBulletImg, this.bulletsArray[index].X + 10, this.bulletsArray[index].Y, 20, 20);
		}
	}

	processingEnemyHit(fireElem) {
		if ((this.posEnemyY - 5 <= fireElem.posFireY && this.posEnemyY + 50 >= fireElem.posFireY) &&
			(this.posEnemyX - settings.colision <= fireElem.posFireX && this.posEnemyX + settings.colision >= fireElem.posFireX)) {
			this.isLive = false
			fireElem.fire = false
			gameProcess.score += 10
		}
	}

}

class Game {
	constructor() {
		this.enemyArray = [];
		this.firesArray = [];
		
	}

	processingEnemyHit() { // processing hit to enemies
		game.firesArray.forEach((itemF, indexF) => {
			game.enemyArray.forEach((itemE, indexE) => {
				if ((itemE.posEnemyY - 5 <= itemF.posFireY && itemE.posEnemyY + 50 >= itemF.posFireY) &&
					(itemE.posEnemyX - settings.colision <= itemF.posFireX && itemE.posEnemyX + settings.colision >= itemF.posFireX)) {
					itemE.isLive = false;
					itemF.fire = false;
					gameProcess.score += 10;
				}
			})
		});
	}

	newGame() {
		document.querySelector('.game-over-wrapper').style.display = 'none'
		gameProcess.shipLive = 3;
		gameProcess.score = 0;
		gameProcess.gameStatus = 'run';
		game.newEnemy(10);
		JSON.parse(localStorage.getItem('res'));
		gameProcess.level = 1;
	}

	newLevel(level) {
		if (this.enemyArray.length < 1 && gameProcess.level === level) {
			this.newEnemy(level * 20);
			gameProcess.level += 1;
			gameProcess.shipLive += 1;
			settings.fireSpeed += level;
		}
	}

	gameOver() {
		// add to local storage
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

	newEnemy(sum) {
		for (let i = 0; i < sum; i++) {
			game.enemyArray[game.enemyArray.length] = new Enemy()// create new enemy
		}
	}
}

class Ship {
	constructor() {
		this.posShipX = settings.CTX_WIDTH / 2 - 25;
		this.posShipY = 550;
		document.addEventListener("keydown", this.direction.bind(this) );
	}

	shipFly() { // move my ship on canvas
		if (gameProcess.shipLive < 1) {
			document.querySelector('.game-over-wrapper').style.display = 'flex'
			// game.enemyArray = []
			if (gameProcess.gameStatus === 'run') { game.gameOver() }
			gameProcess.gameStatus = 'stop';
			gameProcess.level = 0;
			return
		}
		if (gameProcess.gameStatus === 'run') {
			ctx.drawImage(ship, this.posShipX, this.posShipY, 50, 50);
			if (this.posShipX > 560) { this.posShipX = 560 }
			if (this.posShipX < 1) { this.posShipX = 1 }
		}
	
	}
	
	processingShipHit() { // processing hit to my ship
	
		game.enemyArray.forEach((itemE, indexE) => { // processing hit to my ship
	
			itemE.bulletsArray.forEach((itemB, indexB) => {
				try {
					itemE.enemyFire(indexB);
				} catch { } // ???
	
				if ((itemB.Y + settings.colision > this.posShipY && itemB.Y - settings.colision < this.posShipY) &&
					(itemB.X + settings.colision > this.posShipX && itemB.X - settings.colision < this.posShipX)) {
					gameProcess.hitDetected = true;
					itemE.bulletsArray.splice(indexB, 1);
				}
			})
	
		})
	
	}

	direction(event) {
		console.log(this)
		if (event.keyCode == settings.left && this.posShipX > 1) { this.posShipX -= settings.shipSpeed }
		if (event.keyCode == settings.right && this.posShipX < 555) { this.posShipX += settings.shipSpeed }
		if (event.keyCode == settings.space) {
			game.firesArray[game.firesArray.length] = new Bullet()// create new bullet per every settings.fps
		}
	}

}






//	start
//	rendeging
//	 =============== 		main	drawing game	 ===============
const game = new Game();
const myShip = new Ship();
game.newEnemy(3);
setInterval(draw, settings.fps);
showGameProcess(700);
setInterval(() => game.enemyArray[game.enemyArray.length] = new Enemy(), 7700) // genegator random enem independ by level




function draw() {
	ctx.clearRect(0, 0, settings.CTX_WIDTH, settings.CTX_HEIGHT) // clear all
	myShip.shipFly() // move my ship on canvas
	game.enemyArray.forEach((item, index) => { item.enemyFly(index) }) // processing bullets
	game.firesArray.forEach((item, index) => { item.shipFire(index)})
	game.processingEnemyHit();
	myShip.processingShipHit();
	gameProcess.checkShipHit();
	if(gameProcess.shipLive < 1){ game.enemyArray = []}
}


function randNum(min, max) { // random number from min to max
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

function showGameProcess(ms) { // show current resulst
	setInterval(() => {
		document.querySelector('.lives-amount').innerHTML = `  ` + gameProcess.shipLive;
		document.querySelectorAll('.score h2')[1].innerHTML = gameProcess.score;
		document.querySelectorAll('.level h2')[1].innerHTML = gameProcess.level;
		document.querySelector('.over-score').innerHTML = 'Score :' + gameProcess.score;
		game.newLevel(gameProcess.level);
	}, ms)
}

