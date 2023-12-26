import { MAX_INDEX, SHIP_LENGTH_ARRAY, mainGameLoop } from ".";

export const initializeGrid = function (player,computer) {
    const grids = document.querySelectorAll(".game-grid");
    let index = 0;
    grids.forEach(grid => {
        grid.textContent = "";
        for (let i = 0; i < MAX_INDEX; i++) {
            for (let j = 0; j < MAX_INDEX; j++) {
                let divCell = document.createElement("div");
                divCell.classList.add("grid-cell");
                divCell.id = `cell${index}-${i}${j}`;
                grid.appendChild(divCell);
            }
        }
        index++;
    });
};



export function setShipsPhase(player, computer) {
    const rotateButton = document.querySelector(".rotate-button");
    rotateButton.classList.remove("hide");
    setShip(player, computer, SHIP_LENGTH_ARRAY);

}

export function setDisplayColors(player,computer) {
    for (let i = 0; i < MAX_INDEX; i++) {
        for (let j = 0; j < MAX_INDEX; j++) {
            let divCell = document.querySelector(`#cell0-${i}${j}`);
            if (player.gameboard.isIndexMissedTarget([i, j])) {
                divCell.classList.add("water");
            }
            else if (player.gameboard.isIndexOnTarget([i, j])) {
                divCell.classList.add("fire")
            }
            else if (player.gameboard.isIndexHavingShip([i, j])) {
                divCell.classList.add("colored-cell");
            }
        }
    }
    for (let i = 0; i < MAX_INDEX; i++) {
        for (let j = 0; j < MAX_INDEX; j++) {
            let divCell = document.querySelector(`#cell1-${i}${j}`);
            if (computer.gameboard.isIndexMissedTarget([i, j])) {
                divCell.classList.add("water");
            }
            else if (computer.gameboard.isIndexOnTarget([i, j])) {
                divCell.classList.add("fire")
            }
        }
    }
}



function setShip(player, computer, shipSetArray, shipArrayIndex = 0, orientation = "vertical") {
    if (shipArrayIndex === shipSetArray.length) {
        const rotateButton = document.querySelector(".rotate-button");
        rotateButton.classList.add("hide");
        computer.setComputerShips();
        mainGameLoop.startGame(player, computer);
        return;
    }
    let length = shipSetArray[shipArrayIndex];
    function removeAllEventListeners() {
        const grids = document.querySelector(".game-grid");
        for (let i = 0; i < MAX_INDEX; i++) {
            for (let j = 0; j < MAX_INDEX; j++) {
                let divCell = document.querySelector(`#cell0-${i}${j}`);
                let newCell = divCell.cloneNode(true);
                divCell.parentNode.replaceChild(newCell, divCell);
            }
        }
    }
    function handleMouseOver(target, length, orientation,player) {
        let shipArray = getShipCoordinates(target, length, orientation);
        let isAreaAvailable = true;
        shipArray.forEach(ship => {
            if (player.gameboard.isIndexHavingShip(ship))
                isAreaAvailable = false;
        });
        shipArray.forEach(ship => {
            const cell = document.querySelector(`#${getIdFromIndex(ship)}`);
            if (isAreaAvailable) {
                cell.classList.add("selection-cell");
            }
            else {
                cell.classList.add("error-cell");
            }
        });
    }

    function handleMouseOut(target,length,orientation) {
        let shipArray = getShipCoordinates(target, length, orientation);
        shipArray.forEach(ship => {
            const cell = document.querySelector(`#${getIdFromIndex(ship)}`);
            cell.classList.remove("selection-cell","error-cell");
        });
    }

    function handleClick(target, length, orientation) {
        let shipArray = getShipCoordinates(target, length, orientation);
        let isValid = true;
        shipArray.forEach(index => {
            if (player.gameboard.isIndexHavingShip(index)) {
                isValid = false;
            }
        });
        if (shipArray.length === length && isValid) {
            player.gameboard.setShip(length, target, orientation);
            shipArrayIndex++;
            setDisplayColors(player, computer);
            removeAllEventListeners();
            shipArray.forEach(index => {
                const cell = document.querySelector(`#${getIdFromIndex(index)}`);
                cell.classList.remove("selection-cell");
            });
            setShip(player, computer, shipSetArray, shipArrayIndex, orientation);
        }
    }
    const playerCells = document.querySelectorAll("#player1-gamegrid>div");
    const rotateButton = document.querySelector(".rotate-button");
    rotateButton.addEventListener("click", () => {
        if (orientation === "vertical") {
            orientation = "horizontal";
        }
        else {
            orientation = "vertical";
        }
    
    });
    playerCells.forEach(cell => {
        cell.addEventListener("mouseover", (e) => handleMouseOver(getIndexFromId(e.target.id), length, orientation,player));
        cell.addEventListener("mouseout", (e) => handleMouseOut(getIndexFromId(e.target.id), length, orientation));
        cell.addEventListener("click", (e) => handleClick(getIndexFromId(e.target.id), length, orientation));
    });
}

export function getShipCoordinates(target,length, orientation) {
    let shipArray = [];
    for (let i = 0; i < length; i++){
        if (orientation === "vertical") {
            if(target[0] + i < MAX_INDEX)
                shipArray.push([target[0] + i, target[1]]);
        }
        else {
            if(target[1] + i < MAX_INDEX)
                shipArray.push([target[0], target[1] + i]);
        }
    }
    return shipArray;
}

function getIndexFromId(id) {
    let targetId = id;
    let targetIdArray = targetId.split("-", 2);
    targetIdArray = [parseInt(targetIdArray[1][0]), parseInt(targetIdArray[1][1])];
    return targetIdArray;    
}
function getIdFromIndex(index) {
    return `cell0-${index[0]}${index[1]}`;   
}

export function getPlayerCoordinatesFromDisplay(gameboard) {

    function handleMouseOver(event) {
        let index = getIndexFromId(event.target.id);
        if (gameboard.isIndexMissedTarget(index) || gameboard.isIndexOnTarget(index))
            event.target.classList.add("error-cell");
        else
            event.target.classList.add("selection-cell");
    }

    function handleMouseOut(event) {
        event.target.classList.remove("selection-cell", "error-cell");
    }
    
    function handleClick(event) {
        let index = getIndexFromId(event.target.id);
        if (!(gameboard.isIndexMissedTarget(index) || gameboard.isIndexOnTarget(index))) {
            
            mainGameLoop.nextComputerMove(index);
        }
    }

    for (let i = 0; i < MAX_INDEX; i++){
        for (let j = 0; j < MAX_INDEX; j++){
            const cell = document.querySelector(`#cell1-${i}${j}`);
            cell.addEventListener("mouseover", (e) => handleMouseOver(e));
            cell.addEventListener("mouseout", (e) => handleMouseOut(e));
            cell.addEventListener("click", (e) => handleClick(e));
            
        }
    }
    
}

