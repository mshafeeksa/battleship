import Ship from "./ships";
export function createGameboard() {
    let ships = [];
    let missedShots = [];
    let targetShots = [];
    function setShip(length, startingCoordinates, orientation) {
        const ship = new Ship(length, startingCoordinates, orientation);
        ships.push(ship);
        return true;
    }
    function receiveAttack(coordinates) {
        let isHit = false;
        ships.every(ship => {
            for (let i = 0; i < ship.coordinates.length; i++) {
                if (ship.coordinates[i][0] === coordinates[0] && ship.coordinates[i][1] === coordinates[1]) {
                    ship.hit();
                    targetShots.push(coordinates);
                    isHit = true;
                }
            }
            return true;
        });
        if (isHit === false) {
            missedShots.push(coordinates);
        }
    }
    function isAllShipsSunk() {
        let allShipsSunk = true;
        ships.every(ship => {
            if (ship.isSunk() === false) {
                allShipsSunk = false;
                return false;
            }
            return true;
        })
        if (allShipsSunk === true) {
            return true;
        }
        else
            return false;
    }
    function getMissedShots() {
        return missedShots;
    }
    function getOnTargetShots() {
        return targetShots;
    }
    function isIndexMissedTarget(index) {
        let isMissed = false;
        missedShots.forEach(shot => {
            if (index[0] === shot[0] && index[1] === shot[1]) {
                isMissed = true;
            }
        })
        return isMissed;
    }
    function isIndexOnTarget(index) {
        let isOnTarget = false;
        targetShots.forEach(shot => {
            if (index[0] === shot[0] && index[1] === shot[1]) {
                isOnTarget = true;
            }
        })
        return isOnTarget;
    }
    function isIndexHavingShip(index) {
        let isShip = false;
        ships.every(ship => {
            if (ship.isPartOfShip(index)) {
                isShip = true;
                return false;
            }
            return true;
        });
        return isShip;
    }

    return { receiveAttack, isAllShipsSunk, setShip, getMissedShots, getOnTargetShots, isIndexHavingShip, isIndexMissedTarget, isIndexOnTarget };
}