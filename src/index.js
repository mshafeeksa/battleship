export const MAX_INDEX = 10;
export const SHIP_LENGTH_ARRAY = [4, 3, 3, 2, 2, 1, 1];
import './style.css';
import { Player, Computer } from "./players";
import { initializeGrid, setShipsPhase, setDisplayColors, setDisplayColors1 } from './display';


export const mainGameLoop = (function () {
    let playerName = "Player";
    const submitButton = document.querySelector("#submit-button");
    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        const nameInput = document.querySelector("#name");
        if (nameInput.value !== "") {
            playerName = nameInput.value;
        }
        else {
            playerName = "Player";
        }
        const playerNameEntry = document.querySelector(".player-name-entry");
        playerNameEntry.classList.add("hide");
        const playerNameDiv = document.querySelector(".player-name");
        playerNameDiv.textContent = playerName;
    });
    const player = new Player(playerName);
    const computer = new Computer("Computer");
    initializeGrid(player,computer);
    setShipsPhase(player, computer);
    setDisplayColors(player, computer);

    function startGame(player, computer) {
        let toss = Math.floor(Math.random() * 2);
        (toss === 0) ? toss = false : toss = true;
        let startPlayer = null;
        let otherPlayer = null;
        if (toss) {
            startPlayer = player;
            otherPlayer = computer;
        }
        else {
            startPlayer = computer;
            otherPlayer = player;
        }
        
        startPlayer.makeMove(otherPlayer.gameboard);
    }

    function nextPlayerMove(coordinate = null) {
        if (coordinate !== null) {
            player.receiveAttackCoordinates(coordinate);
            setDisplayColors(player, computer);
            if (player.gameboard.isAllShipsSunk()) {
                gameOver(computer);
                return;
            }
            if (player.gameboard.isIndexOnTarget(coordinate)) {
                nextComputerMove();
                return;
            }
        }
        player.makeMove(computer.gameboard);
    }

    function nextComputerMove(coordinate = null) {
        if (coordinate !== null) {
            computer.receiveAttackCoordinates(coordinate);
            setDisplayColors(player, computer);
            if (computer.gameboard.isAllShipsSunk()) {
                gameOver(player);
                return;
            }
            if (computer.gameboard.isIndexOnTarget(coordinate)) {
                nextPlayerMove();
                return;
            }
        }
        computer.makeMove(player.gameboard);
    }

    function gameOver(winner) {
        const gameOver = document.querySelector(".game-over");
        const gameOverText = document.querySelector(".game-over h2");
        gameOverText.textContent = "Game Over. Winner is " + winner.name;
        const reloadButton = document.querySelector(".game-over button");
        reloadButton.addEventListener("click", () => {
            location.reload();
        });
        gameOver.classList.remove("hide");
    }
    return{startGame,nextPlayerMove,nextComputerMove}
})();



