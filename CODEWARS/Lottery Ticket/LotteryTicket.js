function bingo(ticket, win) {
    let miniWinCount = 0;
  
    for (let i = 0; i < ticket.length; i++) {
      const [str, num] = ticket[i];
      for (let j = 0; j < str.length; j++) {
        if (str.charCodeAt(j) === num) {
          miniWinCount++;
          break; // Break the inner loop if a mini win is found in the current subarray
        }
      }
    }
  
    if (miniWinCount >= win) {
      return 'Winner!';
    } else {
      return 'Loser!';
    }
  }