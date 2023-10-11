function whoWon(player1,player2){
let choice = ['rock', 'paper', 'scissors'];
   //for (let i = 0; i < choice.length; i++) {
    if (choice.includes(player1) && choice.includes(player2)) {
      if (player1 === player2){
        return 'TIE!';
      }
      
      if (player1 === 'rock' && player2 === 'paper'){
        return 'Player 2 wins!';
      }
      
      if (player1 === 'paper' && player2 === 'scissors'){
        return 'Player 2 wins!';
      }
      
      if (player1 === 'scissors' && player2 === 'rock'){
        return 'Player 2 wins!';
      }
  
      return 'Player 1 wins!';
    } else {
      return 'Invalid Choice!';
    }
  }


 module.exports = {
  whoWon: whoWon
 }