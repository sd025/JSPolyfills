// map
// Array.prototype.myMap = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) { 
//     temp. push(cb(this[i], i, this));
//   }
//   return temp;
//   }
//   const nums = [1, 2, 3, 41];
//   const multiplyThree = nums.myMap((num, i, arr) => {
//   return num * 3;
//   })
//   console.log(multiplyThree);


  // filter
  Array. prototype.myFilter = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i, this)) temp.push(this[i]);
    }
    return temp;
  }
    const nums = [1, 2, 3, 4];
    const moreThanTwo = nums.filter ((num) => {
    return num > 2;
  })
  console.log(moreThanTwo);