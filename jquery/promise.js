const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise p1");
    }, 10000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise p2");
    }, 2000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise p3");
    }, 3000);
})

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise p4");
    }, 4000);
})

Promise.allSettled([p1, p2, p3, p4])
    .then(res => console.log(res))
    .catch(err => console.error(err))