// let people = [
//     { lastName:"a",firstName: "John", age: 21 },
//     { lastName:"b",firstName: "Oliver", age: 55 },
//     { lastName:"c",firstName: "Michael", age: 55 },
//     { lastName:"d",firstName: "Dwight", age: 19 },
//     { lastName:"e",firstName: "Oscar", age: 21 },
//     { lastName:"f",firstName: "Kevin", age: 55 },
// ];
// const group = people.reduce((acc,item) => {
//     acc[item.firstName] = {
//         item_price : item.age in acc ? acc[item.firstName].item_price:0
//     } 
// },{});
// console.log(group);
// let group1 = people.reduce((acc,ele) => {
//     if(ele.age < 30){
//         acc.push(ele.firstName);
//     }
//     return acc;
// },[]);
// console.log(group1);

// var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// const group = pets.reduce((acc,ele) => {
//     if(!acc[ele]){
//         acc[ele] = 1;
//     }else{
//         acc[ele]  += 1;
//     }
//     return acc;
// },[]);
// console.log(group);

// var personnel = [
//     {
//       id: 5,
//       name: "Luke Skywalker",
//       pilotingScore: 98,
//       shootingScore: 56,
//       isForceUser: true,
//     },
//     {
//       id: 82,
//       name: "Sabine Wren",
//       pilotingScore: 73,
//       shootingScore: 99,
//       isForceUser: false,
//     },
//     {
//       id: 22,
//       name: "Zeb Orellios",
//       pilotingScore: 20,
//       shootingScore: 59,
//       isForceUser: false,
//     },
//     {
//       id: 15,
//       name: "Ezra Bridger",
//       pilotingScore: 43,
//       shootingScore: 67,
//       isForceUser: true,
//     },
//     {
//       id: 11,
//       name: "Caleb Dume",
//       pilotingScore: 71,
//       shootingScore: 85,
//       isForceUser: true,
//     },
//   ];
// let total = personnel.filter(x => x.isForceUser == true).reduce((acc,item) => {
//     acc.push(item);
//     return acc;
// },[]);
// console.log(total);

// const people = [
//     { name: "Alice", age: 21 },
//     { name: "Max", age: 20 },
//     { name: "Jane", age: 20 },
// ];
// const grouped = people.reduce((acc, item) => {
//     if (!acc[item.age]) {
//         acc[item.age] = [];
//     }
//     acc[item.age].push(item);
//     return acc;
// }, {})
// console.log(grouped);

// const people = [
//     12,23,32,12,32,123
// ];

// const peo = [...people,24];

// console.log(peo[5]);

// var data = [
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//         "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//         },
//         {
//         "userId": 1,
//         "id": 2,
//         "title": "qui est esse",
//         "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//         },
//         {
//         "userId": 1,
//         "id": 3,
//         "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//         "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//         },
//         {
//         "userId": 1,
//         "id": 4,
//         "title": "eum et est occaecati",
//         "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
//         },
// ]
// const grouped = data.reduce((acc,item) => {
//     if(item.id > 3){
//         acc.push(item);
//     }
//     return acc;
// },[])
// console.log(grouped);


var items = [
    {
        name: 'dell-66',
        price: 200,
        id: 12,
    },
    {
        name: 'hp-44',
        price: 100,
        id: 10,
    },
    {
        name: 'acer-33',
        price: 250,
        id: 33,
    },
    {
        name: 'dell-66',
        price: 200,
        id: 12,
    },
    {
        name: 'acer-33',
        price: 250,
        id: 33,
    },
    {
        name: 'dell-66',
        price: 200,
        id: 12,
    },
].reduce((acc,item) => {
    acc[item.name] = (item.name in acc ? acc[item.name].item_price : 0)+item.price;
    return acc;
},{})
console.log(items);