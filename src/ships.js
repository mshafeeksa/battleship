class Ship{
    constructor(length,startingCoordinate,orientation) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
        let coordinatesArray = [];
        for (let i = 0; i < length; i++){
            if (orientation === "horizontal") {
                coordinatesArray.push([startingCoordinate[0],startingCoordinate[1]+i]);
            }
            else if (orientation === "vertical") {
                coordinatesArray.push([startingCoordinate[0]+i,startingCoordinate[1]]);
            }
        }
        this.coordinates = coordinatesArray;
    }

    isPartOfShip(index) {
        let isPart = false;
        this.coordinates.every(coordinate => {
            if (index[0] === coordinate[0] && index[1] === coordinate[1]) {
                isPart = true;
                return false
            }
            return true;
        });
        return isPart;
    }

    hit() {
        this.hits += 1;
        if (this.hits >= this.length){
            this.sunk = true;
        }
    }

    isSunk() {
        return this.sunk;
    }
}

export default Ship;
