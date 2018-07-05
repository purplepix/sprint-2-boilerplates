



function winner() {





  
  if (position[4] !== "") {
    if ((position[3] === position[4] && position[3] === position[5]) || (position[0] === position[4] && position[0] === position[8]) || (position[2] === position[4] && position[2] === position[6]) || (position[1] === position[4] && position[1] === position[7])) {
      message.textContent = "A jogadora " + jogadora + " venceu!";
      gameOver = true;
    }
  }
  if (position[0] !== "") {
    if ((position[0] === position[1] && position[0] === position[2]) || (position[0] === position[3] && position[0] === position[6])) {
      message.textContent = "A jogadora " + jogadora + " venceu!";
      gameOver = true;
    }
  }
  if (position[8] !== "") {
    if ((position[6] === position[7] && position[6] === position[8]) || (position[2] === position[5] && position[2] === position[8])) {
      message.textContent = "A jogadora " + jogadora + " venceu!";
      gameOver = true;
    }
  }
  if (moves === 9) {
    message.textContent = "Empatou!";
    gameOver = true;
  }
}