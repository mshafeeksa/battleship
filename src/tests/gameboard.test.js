import { createGameboard } from "../gameboard";

describe("Create Game board", () => {
    const gameboard = createGameboard();
    test("isAllShipsSunk return false after all coordinates of one ship hit out of two ships", () => {
        gameboard.setShip(4, [2, 2], "vertical");
        gameboard.setShip(3, [3, 5], "horizontal");
        gameboard.receiveAttack([2, 2]);
        gameboard.receiveAttack([3, 2]);
        gameboard.receiveAttack([4, 2]);
        gameboard.receiveAttack([5, 2]);
        expect(gameboard.isAllShipsSunk()).toBeFalsy();
    });
    test("isAllShipsSunk return true after all coordinates of the only two ships hit", () => {
        gameboard.receiveAttack([3, 5]);
        gameboard.receiveAttack([3, 6]);
        gameboard.receiveAttack([3, 7]);
        expect(gameboard.isAllShipsSunk()).toBeTruthy();
    });
    test("If given coordinates are correctly determined to be part of ship or not", () => {
        expect(gameboard.isIndexHavingShip([2, 2])).toBeTruthy(); 
        expect(gameboard.isIndexHavingShip([3, 2])).toBeTruthy(); 
        expect(gameboard.isIndexHavingShip([9, 2])).toBeFalsy(); 
    });
});