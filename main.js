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
// function once(func, context) {
//   let ran;

//   return function () {
//     if(func) {
//       ran = func.apply(context || this, arguments)
//       func = null
//     }

//     return ran
//   }
// }

// const hello = once((a, b) => console.log('hello', a, b))

// hello(1, 2)
// hello(1, 2)
// hello(1, 2)


// memoize()
// function myMemoize (fn, context){
//   const res = {};
//   return function (...args) {
//     var argsCache = JSON.stringify(args)
//     if (!res[argsCache]) {
//       res[argsCache] = fn.call(context || this, ...args)
//     }
//     return res[argsCache]
//   }
// }

// const clumsyPorduct = (num1, num2) => {
//   for ( let i = 1; i <= 100000000; i++){}
//   return num1 * num2
// }

// const memoizedClumzyProduct= myMemoize(clumsyPorduct)

// console.log('fisrt')
// console.log(memoizedClumzyProduct(3932, 3133))
// console.log('fisrt')

// console.log('second')
// console.log(memoizedClumzyProduct(3932, 3133))
// console.log('second')


// basic promiese implementation
// function myPromisePolyfill(executor) {
//   let onResolve,
//   onReject, 
//   isFulfilled = false,
//   isRejected = false,
//   isCalled = false,
//   value;
  

//   function resolve(val) {
//     isFulfilled = true
//     value = val;
//     if (typeof onResolve === 'function'){
//       onResolve(val)
//       isCalled = true;
//     }
//   }
//   function reject(val) {
//     isRejected = true
//     value = val;
//     if (typeof onReject === 'function'){
//       onReject(val)
//       isCalled = true;
//     }
//   }
  

//   this.then = function(callback) {
//     onResolve = callback

//     if (isFulfilled && !isCalled) {
//       isCalled = true
//       onResolve(value)
//     }
//     return this;
//   }
  
//   this.catch = function(callback) {
//     onReject = callback


//     if (isRejected && !isCalled) {
//       isCalled = true
//       onReject(value)
//     }
//     return this;
//   }

//   executor(resolve, reject)
// }

// const examplePromise = new myPromisePolyfill((res, rej)=> {
//   setTimeout(()=> {
//     res(2)
//   }, 1000)
// })

// examplePromise.then((resolve)=>{
//   console.log(resolve)
// }).catch((err) => console.log(err))


// Promise.all()
// function importantAction(vid) {
//   return new Promise((res,rej)=>{
//     setTimeout(() => {
//       res(`Subscribe the ${vid}`)
//     }, 10);  
//   })
// }
// function likeVid(vid) {
//   return new Promise((res,rej)=>{
//     setTimeout(() => {
//       rej(`Like the ${vid}`)
//     }, 10);  
//   })
// }

// function commentVid(vid) {
//   return new Promise((res,rej)=>{
//     setTimeout(() => {
//       res(`Comment the ${vid}`)
//     }, 10);  
//   })
// }

// Promise.allPollyfill = (promises) => {
//   return new Promise((resolve,rej)=>{
//     const results= []
    
//     if (!promises.length) {
//       resolve(results)
//       return
//     }
    
//     let pending = promises.length
    
//     promises.forEach((promise, idx) => {
//       Promise.resolve(promise).then((res)=>{
//         results[idx] = res
//         pending--
        
//         if (pending === 0){
//           resolve(results)
//         }
//       }, rej)
//     })
//   })
// }

// Promise.allPollyfill([
//   importantAction('subscriber'),
//   likeVid('liker'),
//   commentVid('commenter')
//   ]).then((res)=> console.log(res)).catch((err)=> console.log('failed',err))
  
  
  
  // debounce()