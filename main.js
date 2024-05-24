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
  // Array.prototype.myReduce = function (cb, intialValue) {
  //   var accumulator = intialValue;

  //   for (let i = 0; i < this.length; i++) {
  //     accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  //   }

  //   return accumulator;
  // }
  //   const nums = [1, 2, 3, 4];

  //   const sum = nums.myReduce((acc, curr, i, arr) => {
  //   return acc + curr;
  // }, 0)
  
  // console.log(sum);


  // call
// let car1 = {
//   color: 'red',
//   company: 'ferrari'
// };

// function purchaseCar(currency, price) {
//   console.log(
//     `i have purchase ${this.color} and ${this.company} car for ${currency}${price}`
//     )
// }

// Function.prototype.myCall = function(context = {}, ...args) {
//   if (typeof this !== 'function') {
//     throw new Error(this + 'its not callable')
//   }

//   context.fn = this
//   context.fn(...args)
// }

// purchaseCar.myCall(car1, 'rupee', 500000)


//apply
// let car1 = {
//   color: 'red',
//   company: 'ferrari'
// };

// function purchaseCar(currency, price) {
//   console.log(
//     `i have purchase ${this.color} and ${this.company} car for ${currency}${price}`
//     )
// }

// Function.prototype.myApply = function(context = {}, args=[]) {
//   if (typeof this !== 'function') {
//     throw new Error(this + 'its not callable')
//   }

//   if (!Array.isArray(args)) {
//     throw new TypeError('createlistfromarraylike called on non-obj')
//   }
//   context.fn = this
//   context.fn(...args)
// }

// purchaseCar.myApply(car1, ['rupee', 500000])


// bind()
// let car1 = {
//   color: 'red',
//   company: 'ferrari'
// };

// function purchaseCar(currency, price) {
//   console.log(
//     `i have purchase ${this.color} and ${this.company} car for ${currency}${price}`
//     )
// }

// Function.prototype.myBind = function(context = {}, ...args) {
//   if (typeof this !== 'function') {
//     throw new Error(this + 'cannot be bound its not callable')
//   }

//   context.fn = this
//   return function (...newArgs) {
//     return context.fn(...args, ...newArgs)
//   }
// }

// const newFunc = purchaseCar.myBind(car1, 'rupee')

// console.log(newFunc(500000))

// once()
function once(func, context) {
  let ran;

  return function () {
    if(func) {
      ran = func.apply(context || this, arguments)
      func = null
    }

    return ran
  }
}

const hello = once((a, b) => console.log('hello', a, b))

hello(1, 2)
hello(1, 2)
hello(1, 2)