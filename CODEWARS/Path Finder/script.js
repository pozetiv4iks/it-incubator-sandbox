function pathFinder(area){
    const grid = area.split('\n').map(row => row.split('').map(Number));
   const N = grid.length;
   const queue = [[0, 0, 0]]; // [x, y, climb rounds]
   const visited = new Set(`0,0`);
 
   while (queue.length > 0) {
     const [x, y, rounds] = queue.shift();
 
     if (x === N - 1 && y === N - 1) {
       return rounds;
     }
 
     for (const [dx, dy] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
       const newX = x + dx;
       const newY = y + dy;
 
       if (newX >= 0 && newX < N && newY >= 0 && newY < N) {
         const climb = Math.abs(grid[newX][newY] - grid[x][y]);
         const newKey = `${newX},${newY}`;
 
         if (!visited.has(newKey)) {
           visited.add(newKey);
           queue.push([newX, newY, rounds + climb]);
         }
       }
     }
   }
 
   return -1; // No path found
 }