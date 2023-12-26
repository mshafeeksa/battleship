import { Computer } from "../players";

describe("Computer", () => {
    let computer = new Computer("Computer");
    test("Computer returns no attack coordinates that is already attacked", () => {
        let newCoordinates = computer.attackCoordinates([[1, 2], [1, 3], [1,4], [3, 5]], [[5, 6], [5, 7], [2, 3], [0, 0]]);
        expect([[1, 2], [1, 3], [1, 4], [3, 5], [5, 6], [5, 7], [2, 3], [0, 0]]).not.toContainEqual(newCoordinates);
        expect(newCoordinates[0]).toBeLessThan(10);
        expect(newCoordinates[1]).toBeLessThan(10);

    })
});