// // function x(){
// //     var a = 7;
// //     function y(){
// //         console.log(a); 
// //     }
// //     y();
// // }
// // x();

// // function x(){
// //     var a = 7;
// //     function y(){
// //         console.log(a); 
// //     }
// //     return y;
// // }
// // x()();

// // function xx() {
// //     var b = 100;
// //     function x() {
// //         var a = 10;
// //         function y() {
// //             console.log(a,b);
// //         }
// //         y();
// //     }
// //     x();
// // }
// // xx();


// // function Count(){

// //         var x = 10;
// //         this.increment = function increment(){
// //             x++;
// //             console.log(x);
// //         }
// //         this.decrement = function decrement(){
// //             x--;
// //             console.log(x);
// //         }

// // }
// // var cnt1 = new Count();
// // cnt1.increment();
// // cnt1.increment();
// // cnt1.decrement();cnt1.decrement();cnt1.decrement();cnt1.decrement();
// // var cnt2 = new Count();
// // cnt2.increment();

// //Fucntion statement
// // hello();
// // x();
// // function hello(){
// //     console.log("hello world");
// // }
// //hello();

// //Function expression
// // let x = function functionExpression(){
// //     console.log("functionExpression")
// // }
// //x();

// // function f() {
// //     setTimeout(() => {
// //         console.log("hello");
// //     }, 3000);

// //     const pr = new Promise((resolve, reject) => {
// //         resolve("Hello from promise");
// //     })
// //         .then(() => console.log("resolved"))
// //         .catch(() => console.log("rejected"));

// //     return pr;
// // }
// // f();

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hello from promise1");
//     },3000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hello from promise2");
//     },5000);
// });

// async function prom(){
//     console.log("started resolving promises");
//     const res1 = await p1;
//     console.log(res1);
//     const res2 = await p2;
//     console.log(res2);
//     // p1.then((res) => console.log(res));
//     // p2.then((res) => console.log(res));
//     console.log("ended resolving promises");
// }
// prom();

// function hello(){
//     for(var i = 0; i < 100000000000000; i++){}
// }
// hello();

function ubw(){
    let routledgeOrders = [
            {
                "CONFERENCE_ID" : "GDC24BS",
                "ID" : 2924576,
                "ORIGINAL_BASE_PRICE" : "56.9500",
                "REVIEWED_BASE_PRICE" : "39.8600",
                "STATUS_ID" : 1001
            },
            {
                "CONFERENCE_ID" : "GDC24BS",
                "ID" : 2924624,
                "ORIGINAL_BASE_PRICE" : "59.9500",
                "REVIEWED_BASE_PRICE" : "41.9600",
                "STATUS_ID" : 1001
            },
            {
                "CONFERENCE_ID" : "GDC24BS",
                "ID" : 2924660,
                "ORIGINAL_BASE_PRICE" : "84.9500",
                "REVIEWED_BASE_PRICE" : "59.4600",
                "STATUS_ID" : 1001
            },
            {
                "CONFERENCE_ID" : "GDC24BS",
                "ID" : 2924664,
                "ORIGINAL_BASE_PRICE" : "39.9500",
                "REVIEWED_BASE_PRICE" : "27.9600",
                "STATUS_ID" : 1001
            },
            {
                "CONFERENCE_ID" : "GDC24BS",
                "ID" : 2924677,
                "ORIGINAL_BASE_PRICE" : "29.9500",
                "REVIEWED_BASE_PRICE" : "20.9600",
                "STATUS_ID" : 1001
            },
            {
                "CONFERENCE_ID" : "GDC24BS",
                "ID" : 2924677,
                "ORIGINAL_BASE_PRICE" : "74.9500",
                "REVIEWED_BASE_PRICE" : "52.4600",
                "STATUS_ID" : 1001
            },
            {
                "CONFERENCE_ID" : "GDC24BS",
                "ID" : 2924698,
                "ORIGINAL_BASE_PRICE" : "59.9500",
                "REVIEWED_BASE_PRICE" : "41.9600",
                "STATUS_ID" : 1001
            },
            {
                "CONFERENCE_ID" : "GDC24BS",
                "ID" : 2924707,
                "ORIGINAL_BASE_PRICE" : "59.9500",
                "REVIEWED_BASE_PRICE" : "41.9600",
                "STATUS_ID" : 1001
            },
            {
                "CONFERENCE_ID" : "GDC24BS",
                "ID" : 2924730,
                "ORIGINAL_BASE_PRICE" : "52.9500",
                "REVIEWED_BASE_PRICE" : "37.0600",
                "STATUS_ID" : 1001
            },
            {
                "CONFERENCE_ID" : "GDC24BS",
                "ID" : 2924736,
                "ORIGINAL_BASE_PRICE" : "79.9500",
                "REVIEWED_BASE_PRICE" : "55.9600",
                "STATUS_ID" : 1001
            },
            {
                "CONFERENCE_ID" : "GDC24BS",
                "ID" : 2924751,
                "ORIGINAL_BASE_PRICE" : "79.9500",
                "REVIEWED_BASE_PRICE" : "55.9600",
                "STATUS_ID" : 1001
            },
            {
                "CONFERENCE_ID" : "GDC24BS",
                "ID" : 2924755,
                "ORIGINAL_BASE_PRICE" : "59.9500",
                "REVIEWED_BASE_PRICE" : "41.9600",
                "STATUS_ID" : 1001
            },
            {
                "CONFERENCE_ID" : "GDC24BS",
                "ID" : 2924757,
                "ORIGINAL_BASE_PRICE" : "79.9500",
                "REVIEWED_BASE_PRICE" : "55.9600",
                "STATUS_ID" : 1001
            },
            {
                "CONFERENCE_ID" : "GDC24BS",
                "ID" : 2924763,
                "ORIGINAL_BASE_PRICE" : "110.0000",
                "REVIEWED_BASE_PRICE" : "77.0000",
                "STATUS_ID" : 1001
            },
            {
                "CONFERENCE_ID" : "GDC24BS",
                "ID" : 2924763,
                "ORIGINAL_BASE_PRICE" : "110.0000",
                "REVIEWED_BASE_PRICE" : "77.0000",
                "STATUS_ID" : 1001
            }
        ]
        
    let gcopOrdersArr = [];
    for(let i = 0;i<routledgeOrders.length;i++){
        gcopOrdersArr.push(routledgeOrders[i].ID);
    }
    console.log(gcopOrdersArr);
}
ubw();