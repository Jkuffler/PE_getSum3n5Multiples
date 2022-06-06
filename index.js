let n = 1000;

function getMultiples (n) {
  let sum = 0;
  for(let i=0; i < n; i++) {
    if(i%3 === 0 || i%5 ===0) {
      sum += i;
    };
  } return sum;
};