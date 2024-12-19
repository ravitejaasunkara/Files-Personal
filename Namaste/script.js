// function square(num) {
//     var res = num*num;
//     return res;
// }
// var square2 = square(2);
// var square4 = square(4);

// console.log(square2);

// console.log(square4);

// var x = 1;
// a();
// b();
// console.log(x);

// function a(){
//     var x = 10;
//     console.log(x);
// }

// function b(){
//     var x = 100;
//     console.log(x);
// }

// function a() {
//     console.log("hello");
// }

// setTimeout(() => {
//     console.log("5 seconds")
// },5000)

// setTimeout(() => {
//     console.log("10 seconds")
// },7000)

// a();

// async function getData(){
//     const users = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     console.log(await users.json());
// }
// getData();

async function asyncExample() {
    console.log("Start");

    await new Promise((resolve) => setTimeout(resolve, 2000)); // Pause for 2 seconds

    console.log("Now the data has been fetched");

}
asyncExample();
console.log("Before asyncExample");
console.log("After asyncExample");

function main() {
    getFirstData()
        .then(res => res.json())
        .then(data => data.id)
        .then((id) => {
            getSecondData(id+1)
                .then(data => data.json())
                .then(result => result.id)
                .then(id => getThirdData(id))
        })
        .catch(error=>console.warn(error.message));
}

function getFirstData() {
    const data = fetch('https://jsonplaceholder.typicode.com/posts/1');
    return data;
}

function getSecondData(id) {
    const data = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return data;
}

function getThirdData(id) {
    fetch('https://jsonplaceholder.typicode.com/posts/3')
        .then((data) => data.json())
        .then(resp => console.log(resp))
}

main();

function promise(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({name:'ravi',id:552});
        },3000);
    })
}

async function promiseCallerr(){
    // promise()
    //     .then((resp) => {
    //         console.log(resp)
    //     })
    //     .catch((err) => {
    //         const error = new Error("Some error has occured");
    //         console.log(error);
    //     })
    const data = await promise();
    console.log(data);
    for(let i=0;i<3;i++) {
        console.log("Inside loop",i);
    }
}

for(let i=0;i<3;i++) {
    console.log(i);
}

promiseCallerr();


