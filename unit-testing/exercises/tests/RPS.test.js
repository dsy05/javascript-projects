const check = require('../RPS.js');

describe("Rock, Paper, Scissors Check", function(){

    test("returns 'Invalid Choice!' if either players choose an option other than 'rock', 'paper', 'scissors'", function() {
        //let output = test.whoWon('paper', 'paper');
        expect(check.whoWon('tape', 'paper')).toBe("Invalid Choice!");
        expect(check.whoWon('paper', 'tape')).toBe("Invalid Choice!");
        expect(check.whoWon('tape', 'tape')).toBe("Invalid Choice!");
     });

    test("returns 'TIE!' if both players choose the same option", function() {
       //let output = test.whoWon('paper', 'paper');
       expect(check.whoWon('paper', 'paper')).toBe("TIE!");
       expect(check.whoWon('rock', 'rock')).toBe("TIE!");
       expect(check.whoWon('scissors', 'scissors')).toBe("TIE!");
    });

    test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function() {
        let output = check.whoWon('rock','paper');
        expect(output).toBe("Player 2 wins!");
    });

    test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function() {
        let output = check.whoWon('paper','scissors');
        expect(output).toBe("Player 2 wins!");
    });

    test("returns 'Player 2 wins!' if P1 = scissors & P2 = rock", function() {
        let output = check.whoWon('scissors','rock');
        expect(output).toBe("Player 2 wins!");
    });

    test("returns 'Player 1 wins!'", function() {
        expect(check.whoWon('paper', 'rock')).toBe("Player 1 wins!");
        expect(check.whoWon('scissors', 'paper')).toBe("Player 1 wins!");
        expect(check.whoWon('rock', 'scissors')).toBe("Player 1 wins!");
    });


 });