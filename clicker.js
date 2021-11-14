var clicker = {
    friends: 0,
    friendper: 0,
    bits: 0,
    bitper: 0,
    buildings: {
        helping_hoof: {
            amount: 0,
            req: 1,
            cost: 10,
            fps: 1,
            unlocked: false,
            name: "Helping Hooves"
        },
        friendship_quest: {
            amount: 0,
            req: 10,
            cost: 20,
            fps: 5,
            unlocked: false,
            name: "Friendship Quests"
        },
        friendship_study: {
            amount: 0,
            req: 100,
            cost: 40,
            fps: 10,
            unlocked: false,
            name: "Friendship Studies"
        },
        super_party: {
            amount: 0,
            req: 100,
            cost: 75,
            fps: 20,
            unlocked: false,
            name: "Super Party"
        }
    },
    upgrades: {
        party_planner: {
            type: "click",
            has: false,
            req: 15,
            cost: 50,
            fpc: 2,
            unlocked: false,
            name: "Party Planner"
        },
        friend: {
            type: "click",
            has: false,
            req: 45,
            cost: 100,
            fpc: 10,
            unlocked: false,
            name: "Friend"
        },
        sugarcube_corner: {
            type: "building",
            building: "helping_hoof",
            has: false,
            req: 5,
            cost: 10,
            fps: 3,
            unlocked: false,
            name: "Sugarcube Corner"
        },
        friend_manager: {
            type: "click",
            has: false,
            req: 25,
            cost: 50,
            fpc: 5,
            unlocked: false,
            name: "Friend Manager"
        },
        ask_nicely: {
            type: "bits",
            has: false,
            req: 100,
            cost: 250,
            bps: 0.001,
            unlocked: false,
            name: "Ask for help"
        }
    }
};

function save_game() {
    save = JSON.stringify(clicker);
    localStorage.setItem("savegame", save);
}

function load_game() {
    save = localStorage.getItem("savegame");
    var clicker1 = JSON.parse(save);
    for (i in clicker) {
        if (clicker1[i] == null) {
            clicker1[i] = clicker[i];
        }
    }
    for (i in clicker.buildings) {
        if (clicker1.buildings[i] == null) {
            clicker1.buildings[i] = clicker.buildings[i];
        }
    }
    for (i in clicker.upgrades) {
        if (clicker1.upgrades[i] == null) {
            clicker1.upgrades[i] = clicker.upgrades[i];
        }
    }
    clicker = clicker1;
    unlock_buildings();
    update_buildings();
    unlock_upgrades();
    update_upgrades();
    update_fps();
}

function delete_save() {
    localStorage.removeItem("savegame");
    window.location.reload();
}

function friend_got() {
    for (i in clicker.upgrades) {
        if (clicker.upgrades[i].has == true && clicker.upgrades[i].type == "click") {
            clicker.friends += clicker.upgrades[i].fpc;
        }
    };
    clicker.friends++;
}

function bit_got() {
    clicker.bits++;
}

function buy_building(i) {
    if (clicker.friends >= clicker.buildings[i].cost) {
        clicker.buildings[i].amount++;
        clicker.friends -= clicker.buildings[i].cost;
        clicker.buildings[i].cost += clicker.buildings[i].cost * 0.15;
        clicker.buildings[i].cost = Math.round(clicker.buildings[i].cost);
        update_buildings();
        update_fps();
    };
}

function unlock_buildings() {
    setInterval(() => {
        for (i in clicker.buildings) {
            if (clicker.friends >= clicker.buildings[i].req && clicker.buildings[i].unlocked == false) {
                clicker.buildings[i].unlocked = true;
                update_buildings(i);
            };
        };
    }, 50)
}

function update_buildings(i) {
    document.querySelector("#buildings").innerHTML = "";
    for (i in clicker.buildings) {
        if (clicker.buildings[i].unlocked) {
            document.querySelector("#buildings").innerHTML += `<br><button onclick="buy_building('${i}')">${clicker.buildings[i].name}</button>`;
        };
    };
}

function buy_upgrade(i) {
    if (clicker.friends >= clicker.upgrades[i].cost) {
        if (clicker.upgrades[i].type == "building") {
            clicker.buildings[`${clicker.upgrades[i].building}`].fps += clicker.upgrades[i].fps;
        };
        clicker.friends -= clicker.upgrades[i].cost;
        clicker.upgrades[i].has = true;
        update_upgrades();
        update_fps();
        update_bps();
    }
}

function unlock_upgrades() {
    setInterval(() => {
        for (i in clicker.upgrades) {
            if (clicker.friends >= clicker.upgrades[i].req && !clicker.upgrades[i].unlocked) {
                clicker.upgrades[i].unlocked = true;
                update_upgrades();
            };
        };
    }, 50);
}

function update_upgrades() {
    document.querySelector("#upgrades").innerHTML = "";
    for (i in clicker.upgrades) {
        if (!clicker.upgrades[i].has && clicker.upgrades[i].unlocked) {
            document.querySelector("#upgrades").innerHTML += `<br><button onclick="buy_upgrade('${i}')">${clicker.upgrades[i].name}</button>`;
        };
    };
}


function update_fps() {
    clicker.friendper = 0;
    for (i in clicker.buildings) {
        clicker.friendper += clicker.buildings[i].amount * clicker.buildings[i].fps;
    };
    document.querySelector("#fps").innerHTML = (clicker.friendper) + " fps";
}

function update_bps() {
    clicker.bitper = 0;
    for (i in clicker.upgrades) {
        if(clicker.upgrades[i].has == true && clicker.upgrades[i].type == "bits") {
            clicker.bitper = clicker.upgrades[i].bps * clicker.friends;
        }
    };
    document.querySelector("#bps").innerHTML = (clicker.bitper).toFixed(2) + " bps";
}

function updatecount() {
    unlock_buildings();
    update_buildings();
    unlock_upgrades();
    update_upgrades();
    update_fps();
    setInterval(() => {
        for (i in clicker.buildings) {
            clicker.friends += clicker.buildings[i].amount * clicker.buildings[i].fps / 20;
        };
        for (i in clicker.upgrades) {
            if(clicker.upgrades[i].has == true && clicker.upgrades[i].type == "bits") {
                clicker.bits += clicker.upgrades[i].bps * clicker.friends / 20;
            }
        };
        update_bps();
        document.querySelector("#friends").innerHTML = "You have " + (clicker.friends).toFixed(0) + " pony friends!";
        document.querySelector("#bits").innerHTML = "You have " + (clicker.bits).toFixed(0) + " bits!";
    }, 50);
}
