function queueTime(customers, n) {
    const tillTimes = new Array(n).fill(0);
  
    for (const time of customers) {
      const shortestTill = tillTimes.indexOf(Math.min(...tillTimes));
      tillTimes[shortestTill] += time;
    }
    return Math.max(...tillTimes)
  }