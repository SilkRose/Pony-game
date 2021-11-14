let map = {
    1: {
        a: {
            1: {
                type: "platform",
                texture: "stone",
                occupant: "",
                player: false,
                tile_x: 1,
                tile_y: 1
            },
            2: {
                type: "platform",
                texture: "stone",
                occupant: "",
                player: false,
                tile_x: 1,
                tile_y: 2
            },
            3: {
                type: "platform",
                texture: "stone",
                occupant: "",
                player: false,
                tile_x: 2,
                tile_y: 1
            },
            4: {
                type: "platform",
                texture: "stone",
                occupant: "",
                player: true,
                tile_x: 2,
                tile_y: 2
            },
            5: {
                type: "platform",
                texture: "stone",
                occupant: "",
                player: false,
                tile_x: 2,
                tile_y: 3
            },
            6: {
                type: "platform",
                texture: "stone",
                occupant: "",
                player: false,
                tile_x: 1,
                tile_y: 0
            },
            7: {
                type: "platform",
                texture: "stone",
                occupant: "",
                player: false,
                tile_x: 0,
                tile_y: 0
            },
            8: {
                type: "platform",
                texture: "stone",
                occupant: "",
                player: false,
                tile_x: -1,
                tile_y: 0
            },
            9: {
                type: "platform",
                texture: "stone",
                occupant: "",
                player: false,
                tile_x: -2,
                tile_y: 0
            },
            10: {
                type: "platform",
                texture: "stone",
                occupant: "",
                player: false,
                tile_x: -3,
                tile_y: 0
            },
            11: {
                type: "platform",
                texture: "stone",
                occupant: "",
                player: false,
                tile_x: 3,
                tile_y: 3
            },
            12: {
                type: "platform",
                texture: "stone",
                occupant: "",
                player: false,
                tile_x: 4,
                tile_y: 3
            },
            13: {
                type: "platform",
                texture: "stone",
                occupant: "",
                player: false,
                tile_x: 5,
                tile_y: 3
            },
            14: {
                type: "trapdoor",
                texture: "sprucetrapdoor",
                occupant: "",
                player: false,
                tile_x: 4,
                tile_y: 2
            },
            15: {
                type: "door",
                texture: "stone",
                door_texture: "door",
                door_rotation: 0,
                door_room: "a",
                door_tile: 16,
                occupant: "",
                player: false,
                tile_x: -3,
                tile_y: -1
            },
            16: {
                type: "door",
                texture: "stone",
                door_texture: "door",
                door_rotation: 180,
                door_room: "a",
                door_tile: 15,
                occupant: "",
                player: false,
                tile_x: 5,
                tile_y: 4
            }
        }
    },
    2: {
        a: {
            1: {
                type: "platform",
                texture: "stone",
                occupant: "",
                player: false,
                tile_x: 1,
                tile_y: 1
            },
            2: {
                type: "platform",
                texture: "stone",
                occupant: "",
                player: false,
                tile_x: 1,
                tile_y: 2
            },
            3: {
                type: "platform",
                texture: "stone",
                occupant: "",
                player: false,
                tile_x: 2,
                tile_y: 1
            },
            4: {
                type: "ladder",
                texture: "ladderstone",
                occupant: "",
                player: true,
                tile_x: 2,
                tile_y: 2
            },
            5: {
                type: "platform",
                texture: "stone",
                occupant: "",
                player: false,
                tile_x: 2,
                tile_y: 3
            },
            6: {
                type: "door",
                texture: "stone",
                door_texture: "door",
                door_rotation: 270,
                door_room: "b",
                door_tile: 5,
                occupant: "",
                player: false,
                tile_x: 1,
                tile_y: 0
            }
        },
        b: {
            1: {
                type: "platform",
                texture: "stone",
                occupant: "",
                player: false,
                tile_x: 1,
                tile_y: 1
            },
            2: {
                type: "platform",
                texture: "stone",
                occupant: "",
                player: false,
                tile_x: 1,
                tile_y: 2
            },
            3: {
                type: "platform",
                texture: "stone",
                occupant: "",
                player: false,
                tile_x: 2,
                tile_y: 1
            },
            4: {
                type: "platform",
                texture: "stone",
                occupant: "",
                player: true,
                tile_x: 2,
                tile_y: 2
            },
            5: {
                type: "door",
                texture: "stone",
                door_texture: "door",
                door_rotation: 90,
                door_room: "a",
                door_tile: 6,
                occupant: "",
                player: false,
                tile_x: 2,
                tile_y: 3
            },
            6: {
                type: "platform",
                texture: "stone",
                player: false,
                tile_x: 1,
                tile_y: 0,
                occupant: {
                    type: "enemy",
                    race: "pony",
                    texture: "pony",
                    rotation: 180,
                    heath: 100,
                    armor: 10,
                    attack: 10,
                    inv: ["dagger", "helmet"]
                }
            }
        }
    }
}