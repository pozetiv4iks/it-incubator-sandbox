function isValidWalk(walk) {
    if (walk.length !== 10) {
      return false;
  }

  let vertical = 0;
  let horizontal = 0;

  for (let direction of walk) {
      switch (direction) {
          case 'n':
              vertical++;
              break;
          case 's':
              vertical--;
              break;
          case 'e':
              horizontal++;
              break;
          case 'w':
              horizontal--;
              break;
          default:
              return false;
      }
  }

  return vertical === 0 && horizontal === 0;
}