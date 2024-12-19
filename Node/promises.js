import fetch from "node-fetch";
// function pr() {
//     let promise = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("Success");
//         }, 5000);
//     })
//     return promise;
// }

// console.log(pr())

// pr()
// .then(val => console.log(val));


// Function that returns a promise that resolves after a given time
// function delay(ms) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Delayed for ${ms} ms`);
//         }, ms);
//     });
// }

// // Chaining promises
// // delay(1000)
// //     .then((message) => {
// //         console.log(message); // Logs: Delayed for 1000 ms
// //         return delay(2000); // Return a new promise that resolves after 2000 ms
// //     })
// //     .then((message) => {
// //         console.log(message); // Logs: Delayed for 2000 ms
// //         return delay(3000); // Return a new promise that resolves after 3000 ms
// //     })
// //     .then((message) => {
// //         console.log(message); // Logs: Delayed for 3000 ms
// //         console.log("All delays are done!");
// //     })
// //     .catch((error) => {
// //         console.error("An error occurred:", error);
// //     });


// const prom = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved");
//     }, 3000);
// });

// prom
//     .then((msg) => {
//         console.log(msg);
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(5);
//             }, 2000);
//         })

//     })
//     .then((val) => {
//         console.log(val);
//     })
//     .catch((err) => {
//         console.log("Error occured", err);
//     })

// function fetchData() {
//     return fetch("https://jsonplaceholder.typicode.com/posts/1");
// }


// fetchData()
//     .then(resp => {
//         return resp.json();
//     })
//     .then(result => {
//         console.log("78", result);
//         return result.id
//     })
//     .then(call => {
//         console.log("82L", call)
//         return fetch(`://jsonplaceholder.typicode.com/posts/${call + 1}`)
//     })
//     .then(res => {
//         return res.json()
//     })
//     .then(finalRes => {
//         console.log("L89", finalRes)
//     })
//     .catch(err => {
//         throw (err.message)
//     })


// const p1 = new Promise((resolve) => resolve("p1"));
// const p2 = new Promise((resolve) => resolve("p2"));
// const p3 = new Promise((resolve,reject) => reject("p3 failed"));
// const p4 = new Promise((resolve) => resolve("p4"));

//promise.all will execute the promises in order and
//whenever an error occurs in any promise it will
//immediately jumps into catch block without executing
//remaining then blocks.
// console.log("PROMISE.ALL")
// Promise.all([p1,p2,p3,p4])
// .then(result => console.log(result))
// .catch(error => console.error("Error occured:",error))

// //Irrespective of the result either success or failure, this will
// //give an array or promise results
// console.log("PROMISE.ALLsETTLED")
// Promise.allSettled([p1,p2,p3,p4])
// .then(result =>  console.log(result))
// .catch(error => console.log(error(error)))

// //this will waits for a first success promise and returns it,
// //if alll promises failed it will give an array of aggregated results
// console.log("PROMISE.AANY")
// Promise.any([p3,p3,p3])
// .then(result =>  console.log(result))
// .catch(error => console.log(error))

//this will give first settled promise, settled means either success or failure
// console.log("PROMISE.RACE")
// Promise.race([p3,p2,p3,p4])
// .then(result =>  console.log(result))
// .catch(error => console.log(error.message))


async function fun() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("hello");
        }, 5000);
    });
}

// async function caller() {
//     const data = await fun();
//     console.log(data);
// }

async function caller() {
    console.log(await fun());
    for(let i=0;i<1000;i++) {
        console.log(i);
    }
}

// function caller() {
//     fun().then(val => console.log(val));
//     for(let i=0;i<10000000;i++) {
//         console.log(i);
//     }
// }

// async function funn() {
//     return fetch(`http://jsonplaceholder.typicode.com/posts/1`)
// }

// const jsonData = await funn();
// const data = await jsonData.json();
// //console.log("hello")
// console.log(data);

//caller();


const p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("P1");
    }, 10000);
})

const p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("P2");
    }, 5000);
})

async function resolvePromises() {
    const p1data = await p1;
    console.log(p1data);

    const p2data = await p1;
    console.log(p2data);
}

resolvePromises();




