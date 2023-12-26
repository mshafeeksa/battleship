import Ship from "../ships";

describe("Ships", () => {
    const shipObject = new Ship(4, [3, 3], "vertical");
    test("isSunk to be false if no hits taken", () => {
        expect(shipObject.isSunk()).toBeFalsy();
    });
    test("iSunk to be false when hits the ship less number of times than length", () => {
        shipObject.hit();
        shipObject.hit();
        expect(shipObject.isSunk()).toBeFalsy();
    });
    test("isSunk to be true if hits the ship equal number of times to length", () => {
        shipObject.hit();
        shipObject.hit();
        expect(shipObject.isSunk()).toBeTruthy();
    });
    test("Coordinates of ship", () => {
        expect(shipObject.coordinates).toEqual([[3,3],[4,3],[5,3],[6,3]]);
    });
    test("If given coordinates is part of ship", () => {
        expect(shipObject.isPartOfShip([4, 3])).toBeTruthy();
        expect(shipObject.isPartOfShip([6, 3])).toBeTruthy();
        expect(shipObject.isPartOfShip([0, 0])).toBeFalsy();
    });
});



