function isVictory(board, placedX, placedY) {
  var i, j, x, y, maxX, maxY, steps, count = 0,
    directions = [
      { x: 0, y: 1  }, // North-South
      { x: 1, y: 0  }, // East-West
      { x: 1, y: 1  }, // Northeast-Southwest
      { x: 1, y: -1 }  // Southeast-Northwest
    ];

  // Check all directions
  outerloop:
  for (i = 0; i < directions.length; i++, count = 0) {
    // Set up bounds to go 3 board forward and backward
    x =     Math.min(Math.max(placedX - (3 * directions[i].x), 0), board.length    - 1);
    y =     Math.min(Math.max(placedY - (3 * directions[i].y), 0), board[0].length - 1);
    maxX =  Math.max(Math.min(placedX + (3 * directions[i].x),     board.length    - 1), 0);
    maxY =  Math.max(Math.min(placedY + (3 * directions[i].y),     board[0].length - 1), 0);
    steps = Math.max(Math.abs(maxX - x), Math.abs(maxY - y));

    for (j = 0; j < steps; j++, x += directions[i].x, y += directions[i].y) {
      if (board[x][y] == board[placedX][placedY]) {
        // Increase count
        if (++count >= 4) {
          break outerloop;
        }
      } else {
        // Reset count
        count = 0;
      }
    }
  }

  return count >= 4;
}
