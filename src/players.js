import { createGameboard } from "./gameboard";
import { getShipCoordinates,getPlayerCoordinatesFromDisplay } from "./display.js";
import { MAX_INDEX, SHIP_LENGTH_ARRAY,mainGameLoop } from "./index.js";
export class Player {
    constructor(name) {
        this.name = name;
        this.gameboard = createGameboard();
    }
    makeMove(gameboard) {
        getPlayerCoordinatesFromDisplay(gameboard);
    }
    receiveAttackCoordinates(coordinates) {
        this.gameboard.receiveAttack(coordinates);
    }
}

export class Computer extends Player{
    attackCoordinates(gameboard) {
        let missedCoordinates = gameboard.getMissedShots();
        let onTargetCoordinates = gameboard.getOnTargetShots();
        let allUsedCoordinates = onTargetCoordinates.concat(missedCoordinates);
        let newCoordinates = [];
        let isGeneratedCoordinates = false;
        while (isGeneratedCoordinates === false) {
            let row = Math.floor(Math.random() * MAX_INDEX);
            let column = Math.floor(Math.random() * MAX_INDEX);
            let duplicateExists = false
            newCoordinates = [row, column];
            for (let i = 0; i < allUsedCoordinates.length; i++){
                if (allUsedCoordinates[i][0] === newCoordinates[0] && allUsedCoordinates[i][1] === newCoordinates[1]) {
                    duplicateExists = true;
                }
            }
            if (duplicateExists === false) {
                isGeneratedCoordinates = true;
            }
        }
        return newCoordinates;
    }
    makeMove(gameboard) {
        mainGameLoop.nextPlayerMove(this.attackCoordinates(gameboard));
    }
    setComputerShips() {
        SHIP_LENGTH_ARRAY.forEach(length => {
            let isValid = false;
            let row, col, orientation;
            while (!isValid) {
                row = Math.floor(Math.random() * MAX_INDEX);
                col = Math.floor(Math.random() * MAX_INDEX);
                let orientationIndex = Math.floor(Math.random() * 2);
                (orientationIndex === 0) ? orientation = "vertical" : orientation = "horizontal";
                let shipArray = getShipCoordinates([row, col], length, orientation);
                isValid = true;
                if (shipArray.length < length)
                    isValid = false;
                shipArray.forEach(shipIndex => {
                    if (this.gameboard.isIndexHavingShip(shipIndex) === true)
                        isValid = false;
                });
            }
            this.gameboard.setShip(length, [row, col], orientation);
        });
    }
}
