const tempA = [30, 46, 17, 48, 49];

const tempB = [58, 48, 20, 18, 29];



const hotterInA = (A, B) => {
  let total = 0;
  A.forEach( (tempA, index) => {
    if(tempA > B[index])
      total++
  });

  return total;
};

const hotterInB = (A, B) => 
  A.filter((dayTempA, index) =>
    dayTempA > B[index]).length;




console.log(hotterInA(tempA, tempB));