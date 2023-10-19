var reelData = {
	1: {
		math: 0,
		data: "",
		wild: "",
		rtp: 0
	},
	2: {
		math: 0,
		data: "",
		wild: "",
		rtp: 0
	},
	3: {
		math: 0,
		data: "",
		wild: "",
		rtp: 0
	}
}


var wintotal = 0;
var winall = 0;
var perwin = 0;
var timesRan = 0;
var timesWon = 0;
var bet = 1;

var reel = {
	1: [
		item_1 = {
			range: "1-8",
			texture: "redmushroom.svg",
			win: true,
			rtp: 0.5
		},
		item_2 = {
			range: "9-13",
			texture: "sunflowerfront.svg",
			win: true,
			rtp: 200
		},
		item_3 = {
			range: "14-27",
			texture: "trident.svg",
			win: true,
			rtp: 10
		},
		item_4 = {
			range: "28-39",
			texture: "redstone.svg",
			win: true,
			rtp: 80
		},
		item_5 = {
			range: "40-42",
			texture: "goldingot.svg",
			win: true,
			rtp: 200
		},
		item_6 = {
			range: "43-50",
			texture: "enderpearl.svg",
			win: true,
			rtp: 20
		},
		item_7 = {
			range: "51-56",
			texture: "emerald.svg",
			win: true,
			rtp: 100
		},
		item_8 = {
			range: "57-62",
			texture: "endereye.svg",
			win: true,
			rtp: 30
		},
		item_9 = {
			range: "63-68",
			texture: "goldenapple.svg",
			win: true,
			rtp: 35
		},
		item_10 = {
			range: "69-77",
			texture: "diamond.svg",
			win: true,
			rtp: 1000,
			jackpot: true
		},
		item_11 = {
			range: "78-84",
			texture: "wild.svg",
			rtp: 200,
			wild: true
		}
	],
	2: [
		item_1 = {
			range: "1-8",
			texture: "redmushroom.svg",
			win: true,
			rtp: 0.5
		},
		item_2 = {
			range: "9-13",
			texture: "sunflowerfront.svg",
			win: true,
			rtp: 200
		},
		item_3 = {
			range: "14-27",
			texture: "trident.svg",
			win: true,
			rtp: 10
		},
		item_4 = {
			range: "28-39",
			texture: "redstone.svg",
			win: true,
			rtp: 80
		},
		item_5 = {
			range: "40-42",
			texture: "goldingot.svg",
			win: true,
			rtp: 200
		},
		item_6 = {
			range: "43-50",
			texture: "enderpearl.svg",
			win: true,
			rtp: 20
		},
		item_7 = {
			range: "51-56",
			texture: "emerald.svg",
			win: true,
			rtp: 100
		},
		item_8 = {
			range: "57-60",
			texture: "endereye.svg",
			win: true,
			rtp: 30
		},
		item_9 = {
			range: "61-64",
			texture: "goldenapple.svg",
			win: true,
			rtp: 35
		},
		item_10 = {
			range: "65-73",
			texture: "diamond.svg",
			win: true,
			rtp: 1000,
			jackpot: true
		},
		item_11 = {
			range: "74-80",
			texture: "wild.svg",
			wild: true,
			rtp: 100,
		}
	],
	3: [
		item_1 = {
			range: "1-8",
			texture: "redmushroom.svg",
			win: true,
			rtp: 0.5
		},
		item_2 = {
			range: "9-13",
			texture: "sunflowerfront.svg",
			win: true,
			rtp: 200
		},
		item_3 = {
			range: "14-27",
			texture: "trident.svg",
			win: true,
			rtp: 10
		},
		item_4 = {
			range: "28-39",
			texture: "redstone.svg",
			win: true,
			rtp: 80
		},
		item_5 = {
			range: "40-42",
			texture: "goldingot.svg",
			win: true,
			rtp: 200
		},
		item_6 = {
			range: "43-50",
			texture: "enderpearl.svg",
			win: true,
			rtp: 20
		},
		item_7 = {
			range: "51-56",
			texture: "emerald.svg",
			win: true,
			rtp: 100
		},
		item_8 = {
			range: "57-62",
			texture: "endereye.svg",
			win: true,
			rtp: 30
		},
		item_9 = {
			range: "63-68",
			texture: "goldenapple.svg",
			win: true,
			rtp: 35
		},
		item_10 = {
			range: "69-73",
			texture: "diamond.svg",
			win: true,
			rtp: 1000,
			jackpot: true
		},
		item_11 = {
			range: "74-79",
			texture: "wild.svg",
			wild: true,
			rtp: 100
		}
	]
}

var maxrange1 = reel[1][reel[1].length - 1].range.split("-")[1];
var maxrange2 = reel[2][reel[2].length - 1].range.split("-")[1];
var maxrange3 = reel[3][reel[3].length - 1].range.split("-")[1];

reelmath1 = setInterval(() => {
	reelData[1].math = Math.floor(Math.random() * maxrange1) + 1;
}, 1)
reelmath2 = setInterval(() => {
	reelData[2].math = Math.floor(Math.random() * maxrange2) + 1;
}, 1)
reelmath3 = setInterval(() => {
	reelData[3].math = Math.floor(Math.random() * maxrange3) + 1;
}, 1)


function spin_slot_machine() {
	winloss = setInterval(() => {
		clicker.friends -= bet;
		spin_reel(1);
		spin_reel(2);
		spin_reel(3);
		if (reelData[1].data === reelData[2].data && reelData[2].data === reelData[3].data) {
			win(reelData[1].rtp);
		} else if (reelData[1].wild == true && reelData[2].data === reelData[3].data) {
			win(reelData[2].rtp);
		} else if (reelData[2].wild == true && reelData[1].data === reelData[3].data) {
			win(reelData[1].rtp);
		} else if (reelData[3].wild == true && reelData[1].data === reelData[2].data) {
			win(reelData[1].rtp);
		} else {
			document.querySelector("#wintext").innerHTML = `<p>"No win"</p>`;
		}
		timesRan++
		var betted = timesRan * bet
		var rtp = (winall / betted) * 100;
		var perwin = (timesWon / timesRan) * 100;
		document.querySelector("#betted").innerHTML = `$${betted.toFixed(2)} Betted!`;
		document.querySelector("#bet").innerHTML = `$${bet.toFixed(2)} Current bet!`;
		document.querySelector("#timesran").innerHTML = `${timesRan} Times ran!`;
		document.querySelector("#timeswon").innerHTML = `${timesWon} Times won!`;
		document.querySelector("#winall").innerHTML = `$${winall} Total winnings!`;
		document.querySelector("#perwin").innerHTML = `${perwin.toFixed(2)}% won spins!`;
		document.querySelector("#rtp").innerHTML = `${rtp.toFixed(2)}% RTP!`;
	}, 1);
}

function setReel(num, reel_val) {
	document.querySelector(`#reel${num}`).innerHTML =
		`<img id="reel${num}" src="assets/${reel_val}" alt="reel${num}">`;
}

function spin_reel(num) {
	for (i in reel[num]) {
		var range = (reel[num][i].range).split("-");
		if (reelData[num].math >= range[0] && reelData[num].math <= range[1]) {
			reelData[num].rtp = reel[num][i].rtp;
			reelData[num].wild = reel[num][i].wild;
			reelData[num].data = reel[num][i].texture;
			setReel(num, reel[num][i].texture);
			break;
		}
	}
}

function win(rtp) {
	timesWon++;
	wintotal = bet * rtp;
	winall += wintotal;
	clicker.friends += wintotal;
	document.querySelector("#wintext").innerHTML = `<p>"You won $${wintotal}"</p>`;
}

function stop_slot_machine() {
	clearInterval(winloss);
}

function reset_slot_machine() {
	timesRan = 0;
	timesWon = 0;
	wintotal = 0;
	winall = 0;
	perwin = 0;
}

function set_bet(amount) {
	clearInterval(winloss);
	bet = amount;
	timesRan = 0;
	timesWon = 0;
	wintotal = 0;
	winall = 0;
	perwin = 0;
	spin_slot_machine();
}
