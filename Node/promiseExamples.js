// function p1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("P1 resolved");
//         }, 5000);
//     })
// }

// p1()
//     .then(val => {
//         console.log(val);
//         return new Promise((resolve) => {
//             setTimeout(() => resolve("passing to p2"), 5000)
//         }
//         )
//     })
//     .then(val => {
//         console.log(val);
//         return new Promise((resolve, reject) => {
//             setTimeout(() => reject("Failed at P2"), 5000)
//         }
//         )
//     })
//     .catch(err => console.error(err));

// console.log("This is main thread");
// function recursive() {
//     console.log("infinite loop");
//     recursive();
// }
// recursive();

const pp1 = new Promise((resolve,reject) => resolve("P1 Success"));

const pp2 = new Promise((resolve,reject) => reject("P2 failed"));

// Promise.all([pp1,pp2])
// .then(res =>  console.log(res))
// .catch(err => console.log(err))

// Promise.any([pp1,pp2])
// .then(res =>  console.log(res))
// .catch(err => console.log(err))

// Promise.race([pp1,pp2])
// .then(res =>  console.log(res))
// .catch(err => console.log(err))

Promise.allSettled([pp1,pp2])
.then(res =>  console.log(res))
.catch(err => console.log(err))

