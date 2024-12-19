// var data = [
//     { firstName: 'Jhon', lastName: 'doe', age: 23 },
//     { firstName: 'some', lastName: 'thing', age: 32 },
//     { firstName: 'play', lastName: 'ground', age: 24 },
//     { firstName: 'bad', lastName: 'minton', age: 56 },
//     { firstName: 'java', lastName: 'script', age: 65 },
//     { firstName: 'type', lastName: 'script', age: 24 }
// ];
// const group = data.reduce((acc,item,i) => {
//     if(!acc[item.age]){
//         acc[item.age] = [];
//     }
//     acc[item.age].push(item.firstName);
//     return acc;
// },{})
// console.log(group);

const startdate = new Date();
const enddate = new Date();
startdate.setHours(0);
startdate.setMinutes(0);
startdate.setSeconds(0);
enddate.setHours(23);
enddate.setMinutes(59);
enddate.setSeconds(59);
console.log(startdate.toLocaleString());
console.log(enddate.toLocaleString());