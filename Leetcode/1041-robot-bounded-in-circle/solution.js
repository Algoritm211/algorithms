// Time - 65ms, Memory - 42.2MB
/**
 * @param {string} instructionsRaw
 * @return {boolean}
 */
const isRobotBounded = (instructionsRaw) => {
  const instructions = instructionsRaw.repeat(4);
  const robotInfo = {direction: 'North', x: 0, y: 0}

  for (let i = 0; i < instructions.length; i++) {
    const action = instructions[i];
    if (action === 'G') {
      move(robotInfo);
    } else {
      setLocation(robotInfo, action);
    }
  }

  const {x, y} = robotInfo;
  return x === 0 && y === 0;
};

const setLocation = (robotInfo, newDirection) => {
  switch (robotInfo.direction) {
    case 'North':
      if (newDirection === 'L') {
       robotInfo.direction = 'West'
      }
      if (newDirection === 'R') {
        robotInfo.direction = 'East'
      }
      break;
    case 'West':
      if (newDirection === 'L') {
        robotInfo.direction = 'South'
      }
      if (newDirection === 'R') {
        robotInfo.direction = 'North'
      }
      break;
    case 'South':
      if (newDirection === 'L') {
        robotInfo.direction = 'East'
      }
      if (newDirection === 'R') {
        robotInfo.direction = 'West'
      }
      break;
    case 'East':
      if (newDirection === 'L') {
        robotInfo.direction = 'North'
      }
      if (newDirection === 'R') {
        robotInfo.direction = 'South'
      }
      break;
  }
}

const move = (robotInfo) => {
  switch (robotInfo.direction) {
    case 'North':
      robotInfo.x += 1
      break;
    case 'West':
      robotInfo.y -= 1
      break;
    case 'South':
      robotInfo.x -= 1
      break;
    case 'East':
      robotInfo.y += 1
      break;
  }
}

// true
console.log(isRobotBounded('GGLLGG'));

// false
console.log(isRobotBounded('GG'));

// true
console.log(isRobotBounded('GL'));


// Alternative solution
/*
const isRobotBounded = (instructions) => {
    let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let x = 0;
    let y = 0;

    let k = 0;
    for(let i = 0; i < instructions.length; i += 1){
         if(instructions[i] == 'G'){
            x += dir[k][0];
            y += dir[k][1];
         }else if(instructions[i] == 'L'){
            k = (k + 1) % 4;
         }else{
            k = ((k - 1) + 4) % 4;
         }
      }
      return x == 0 && y == 0 || k > 0;
};
 */
