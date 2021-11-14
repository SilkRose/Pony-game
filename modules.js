function load_mine_module() {
    document.querySelector("#center_gamespace").innerHTML = `
    <div class="zoom">
    <button onclick="zoom_out()">Zoom out</button>
    <button onclick="zoom_in()">Zoom in</button>
    </div>
    <div id="gamespace"></div>
    <div id="player">
    </div>
    <div id="enemies"></div>
    <div id="fog">
    </div>
    `;
}

function load_casino_module() {
    document.querySelector("#center_gamespace").innerHTML = `
    <div class="reels">
    <div id="reel1">
        <img id="reel1" src="assets/diamond.svg" alt="reel1">
    </div>
    <div></div>
    <div id="reel2">
        <img id="reel2" src="assets/diamond.svg" alt="reel2">
    </div>
    <div></div>
    <div id="reel3">
        <img id="reel3" src="assets/diamond.svg" alt="reel3">
    </div>
    </div>
    <div></div>
    <div id="wintext">
        <p></p>
    </div>
    <div></div>
    <div id="timesran">
        <p>0</p>
    </div>
    <div id="timeswon">
    </div>
    <div id="betted">
        <p>0</p>
    </div>
    <div id="bet">
        <p>0</p>
    </div>
    <div id="winall">
    </div>
    <div id="perwin">
    </div>
    <div id="rtp">
    </div>
    <button id="spin" onclick="spin_slot_machine()">SPIN</button>
    <br>
    <button id="stop" onclick="stop_slot_machine()">STOP</button>
    <br>
    <button id="reset" onclick="reset_slot_machine()">RESET</button>
    <div id="bet_amount">
    <button onclick="set_bet(1)">Bet $1</button><br>
    <button onclick="set_bet(10)">Bet $10</button><br>
    <button onclick="set_bet(100)">Bet $100</button><br>
    <button onclick="set_bet(1000)">Bet $1000</button><br>
    <button onclick="set_bet(10000)">Bet $10000</button><br>
    <button onclick="set_bet(100000)">Bet $100000</button><br>
    <button onclick="set_bet(1000000)">Bet $1000000</button>
    </div>
    `;
}

