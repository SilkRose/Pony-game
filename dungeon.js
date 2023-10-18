level = 1;
room = "a";
direction = 0;
x = innerWidth / 2;
y = innerHeight / 2;
zoom = 100;
offset = zoom / 2;
fog_status = "";

let player = {
	race: "pony",
	texture: "pony",
	rotation: 180,
	heath: 100,
	armor: 10,
	attack: 10,
	inv: ["dagger", "helmet"]

}

window.onresize = function () {
	x = innerWidth / 2;
	y = innerHeight / 2;
	render_player();
	render_map();
}

window.onkeydown = function (key) {
	if (key.key == "w" || key.key == "ArrowUp") {
		move_vertical(0, -1);
	};
	if (key.key === "s" || key.key == "ArrowDown") {
		move_vertical(180, 1);
	};
	if (key.key === "a" || key.key == "ArrowLeft") {
		move_horizontal(270, -1);
	};
	if (key.key === "d" || key.key == "ArrowRight") {
		move_horizontal(90, 1);
	};
	if (key.key === " ") {
		key.preventDefault();
		if (player_tile.type == "trapdoor") {
			move_floor(1);
		} else if (player_tile.type == "ladder") {
			move_floor(-1);
		} else if (player_tile.type == "door") {
			change_room();
		}
	}
	if (key.key === "x") {
		play_hoofstep();
	}
}

function move_vertical(dir, num) {
	direction = dir;
	render_player();
	for (i in map[level][room]) {
		test_y = center_y + num;
		if (map[level][room][i].tile_y == test_y && map[level][room][i].tile_x == center_x && map[level][room][i].occupant === "") {
			player_tile.player = false;
			map[level][room][i].player = true;
			friend_got();
			play_hoofstep();
			render_map();
			break;
		}
	}
}

function move_horizontal(dir, num) {
	direction = dir;
	render_player();
	for (i in map[level][room]) {
		test_x = center_x + num;
		if (map[level][room][i].tile_x == test_x && map[level][room][i].tile_y == center_y && map[level][room][i].occupant === "") {
			player_tile.player = false;
			map[level][room][i].player = true;
			friend_got();
			play_hoofstep();
			render_map();
			break;
		}
	}
}

function start_dungeon_game() {
	render_map();
	render_player();
	fog_timer();
}

function render_map() {
	document.querySelector("#gamespace").innerHTML = "";
	for (i in map[level][room]) {
		if (map[level][room][i].player === true) {
			player_tile = map[level][room][i];
			center_x = map[level][room][i].tile_x;
			center_y = map[level][room][i].tile_y;
			offset_x = x - offset;
			offset_y = y - offset;
			document.querySelector("#gamespace").innerHTML += `<img src="./assets/${map[`${level}`][`${room}`][i].texture}.svg" alt="${map[`${level}`][`${room}`][i].texture}" style="position: fixed; left: ${offset_x}px; top: ${offset_y}px; width: ${zoom}px; z-index: -100;">`;
		}
	}
	for (i in map[level][room]) {
		if (map[level][room][i].player === false) {
			offset_x = (map[level][room][i].tile_x - center_x) * zoom - offset + x;
			offset_y = (map[level][room][i].tile_y - center_y) * zoom - offset + y;
			document.querySelector("#gamespace").innerHTML += `<img src="./assets/${map[`${level}`][`${room}`][i].texture}.svg" alt="${map[`${level}`][`${room}`][i].texture}" style="position: fixed; left: ${offset_x}px; top: ${offset_y}px; width: ${zoom}px; z-index: -100;">`;
		}
	}
	for (i in map[level][room]) {
		if (map[level][room][i].type === "door") {
			if (map[level][room][i].door_rotation === 0) {
				offset_x = (map[level][room][i].tile_x - center_x) * zoom - offset + x;
				offset_y = (map[level][room][i].tile_y - center_y - 1) * zoom - offset + y;
			} else if (map[level][room][i].door_rotation === 90) {
				offset_x = (map[level][room][i].tile_x - center_x + 1) * zoom - offset + x;
				offset_y = (map[level][room][i].tile_y - center_y) * zoom - offset + y;
			} else if (map[level][room][i].door_rotation === 180) {
				offset_x = (map[level][room][i].tile_x - center_x) * zoom - offset + x;
				offset_y = (map[level][room][i].tile_y - center_y + 1) * zoom - offset + y;
			} else if (map[level][room][i].door_rotation === 270) {
				offset_x = (map[level][room][i].tile_x - center_x - 1) * zoom - offset + x;
				offset_y = (map[level][room][i].tile_y - center_y) * zoom - offset + y;
			}
			document.querySelector("#gamespace").innerHTML += `<img src="./assets/${map[`${level}`][`${room}`][i].door_texture}.svg" alt="${map[`${level}`][`${room}`][i].door_texture}" style="position: fixed; left: ${offset_x}px; top: ${offset_y}px; width: ${zoom}px; transform: rotate(${map[`${level}`][`${room}`][i].door_rotation}deg); z-index: -100;">`;
		}
	}
	render_enemy();
}

function render_player() {
	offset_x = x - offset;
	offset_y = y - offset;
	document.querySelector("#player").innerHTML = `<img src="./assets/player.png" style="position: fixed; left: ${offset_x}px; top: ${offset_y}px; width: ${zoom}px; transform: rotate(${direction}deg); z-index: 100; image-rendering: pixelated;">`;
}

function render_fog() {
	fog_status = "running";
	fog_x = innerWidth;
	fog_y = (Math.random() * innerHeight) / 2 + (innerHeight / 4);
	fog_speed = Math.random() * 10 + 5;
	fog_opacity = Math.random() * 10 + 15;
	fog = setInterval(() => {
		fog_x--
		document.querySelector("#fog").innerHTML = `<img src="./assets/fog.svg" style="position: fixed; left: ${fog_x}px; top: ${fog_y}px; height: ${zoom}px; opacity: ${fog_opacity}%; z-index: 0;">`;
		if (fog_x < zoom * -2) {
			clearInterval(fog);
			document.querySelector("#fog").innerHTML = "";
			fog_status = "";
		}
	}, fog_speed);
}

function render_enemy() {
	document.querySelector("#enemies").innerHTML = "";
	for (i in map[level][room]) {
		if (map[level][room][i].occupant.type == "enemy") {
			offset_x = (map[level][room][i].tile_x - center_x) * zoom - offset + x;
			offset_y = (map[level][room][i].tile_y - center_y) * zoom - offset + y;
			document.querySelector("#enemies").innerHTML += `<img src="./assets/${map[`${level}`][`${room}`][i].occupant.texture}.svg" alt="${map[`${level}`][`${room}`][i].occupant.texture}" style="position: fixed; left: ${offset_x}px; top: ${offset_y}px; width: ${zoom}px; transform: rotate(${map[`${level}`][`${room}`][i].occupant.rotation}deg); z-index: 100;">`;
		}
	}
}

function fog_timer() {
	setInterval(() => {
		if (fog_status !== "running") {
			render_fog();
		}
	}, 40000);
}

function play_hoofstep() {
	let stepnum = Math.floor(Math.random() * 6) + 1;
	let hoofstep = new Audio(`./assets/stone${stepnum}.mp3`);
	hoofstep.volume = 0.4;
	hoofstep.play();
}

function zoom_in() {
	if (zoom == 100) {
		zoom = 200;
		offset = zoom / 2;
		render_map();
		render_player();
	}
	if (zoom == 50) {
		zoom = 100;
		offset = zoom / 2;
		render_map();
		render_player();
	}
}

function zoom_out() {
	if (zoom == 100) {
		zoom = 50;
		offset = zoom / 2;
		render_map();
		render_player();
	}
	if (zoom == 200) {
		zoom = 100;
		offset = zoom / 2;
		render_map();
		render_player();
	}
}

function move_floor(dir) {
	level += dir;
	room = player_tile.floor_room;
	for (i in map[level][room]) {
		map[level][room][i].player = false;
	}
	map[level][room][player_tile.floor_tile].player = true;
	render_map();
	play_hoofstep();
}

function change_room() {
	room = player_tile.door_room;
	for (i in map[level][room]) {
		map[level][room][i].player = false;
	}
	map[level][room][player_tile.door_tile].player = true;
	render_map();
	play_hoofstep();
}