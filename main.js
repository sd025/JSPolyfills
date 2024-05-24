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
  // Array.prototype.myFilter = function (cb) {
  //   let temp = [];
  //   for (let i = 0; i < this.length; i++) {
  //     if (cb(this[i], i, this)) temp.push(this[i]);
  //   }
  //   return temp;
  // }
  //   const nums = [1, 2, 3, 4];
  //   const moreThanTwo = nums.filter ((num) => {
  //   return num > 2;
  // })
  // console.log(moreThanTwo);

  // reduce
  Array.prototype.myReduce = function (cb, intialValue) {
    var accumulator = intialValue;

    for (let i = 0; i < this.length; i++) {
      accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }

    return accumulator;
  }
    const nums = [1, 2, 3, 4];

    const sum = nums.myReduce((acc, curr, i, arr) => {
    return acc + curr;
  }, 0)
  
  console.log(sum);
  
