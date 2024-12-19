// const users = [
//   {firstName: "akshay", lastName:"saini",age: 26},
//   {firstName: "donald",lastName: "trump", age: 75},
//   {firstName: "elon",lastName: "musk",age:50},
//   {firstName: "deepika",lastName:"padukone",age:26}
//   ]
// const output = users.reduce((acc,curr) => {
//     if(curr.age < 50){
//       acc.push(curr.firstName);
//     }
//   return acc;
// },[])
// console.log(output)

// const input = [1, -4, 12, 0, -3, 29, -150];

// const sumOfPositiveElements = input.reduce((acc,curr) => {
//   if(curr > 0){
//     acc = acc + curr;
//   }
//   return acc;
// },0);
// console.log(sumOfPositiveElements);

// var employees=[{id:111,name:"Chelsea Foster",years:7},{id:102,name:"Aggie Sparling",years:13},{id:123,name:"Timmy Matthews",years:23},{id:119,name:"Emmet Foster",years:22}];
// const empOutput = employees.reduce((acc,curr) => {
//   acc = acc + curr.years;
//   return acc;
// },0)
// console.log(empOutput);

// var members=[{id:111,name:"Chelsea Foster",workExp:7,deptExp:6,isPermanent:true},{id:102,name:"Aggie Sparling",workExp:13,deptExp:10,isPermanent:false},{id:123,name:"Timmy Matthews",workExp:23,deptExp:15,isPermanent:false},{id:66,name:"Emmet Foster",workExp:22,deptExp:9,isPermanent:true},{id:89,name:"Brent Dolan",workExp:16,deptExp:12,isPermanent:false},];

// const memberoutput = members.filter(item => item.isPermanent == true)
// .reduce((acc,curr) => {
//   acc = acc + curr.workExp;
//   return acc;
// },0);
// console.log(memberoutput);

// // Customer object
// let customers = [
//    {
//       'id': 1,
//       'fname': 'Abby',
//       'lname': 'Thomas',
//       'gender': 'M',
//       'married': true,
//       'age': 32,
//       'expense': 500,
//       'purchased': ['Shampoo', 'Toys', 'Book']
//    },
//    {
//       'id': 2,
//       'fname': 'Jerry',
//       'lname': 'Tom',
//       'gender': 'M',
//       'married': true,
//       'age': 64,
//       'expense': 100,
//       'purchased': ['Stick', 'Blade']
//    },
//    {
//       'id': 3,
//       'fname': 'Dianna',
//       'lname': 'Cherry',
//       'gender': 'F',
//       'married': true,
//       'age': 22,
//       'expense': 1500,
//       'purchased': ['Lipstik', 'Nail Polish', 'Bag', 'Book']
//    },
//    {
//       'id': 4,
//       'fname': 'Dev',
//       'lname': 'Currian',
//       'gender': 'M',
//       'married': true,
//       'age': 82,
//       'expense': 90,
//       'purchased': ['Book']
//    },
//    {
//       'id': 5,
//       'fname': 'Maria',
//       'lname': 'Gomes',
//       'gender': 'F',
//       'married': false,
//       'age': 7,
//       'expense': 300,
//       'purchased': ['Toys']
//    }
// ];

// let count = 0;
// const bookout = customers.filter(item => {
//   if(item.purchased.includes('Book')) count = count+1;
// })
// .reduce((acc,curr) => {
//   console.log(count);
//   acc = acc + curr.age;
//   return acc/count;
// },0);
// console.log(bookout);

// const userss=[
//   {firstName:"john",lastName:"Biden",age:26},
//   {firstName:"jimmy",lastName:"cob",age:75},
//   {firstName:"sam",lastName:"lewis",age:50},
//   {firstName:"Ronald",lastName:"Mathew",age:26},  
// ];

// const usersoutput = userss.reduce((acc,curr) => {
//   if(acc[curr.age]){
//     acc[curr.age] = acc[curr.age]+1;
//   }else{
//     acc[curr.age] = 1;
//   }
//   return acc;
// },{})
// console.log(usersoutput);

// const out1 = userss.filter(item => item.age > 30)
// .reduce((acc,curr) => {
//   acc.push(curr.firstName);
//   return acc;
// },[])
// console.log(out1)

// const output1=userss.filter((x)=>x.age<30).map((x)=>x.firstName);
// console.log(output1);

let existing_users = ["00001","00002","00004","00005","00003"];
let deleted_users = ['00006','00007','000010'];
var userExistInExistingUsers = false;
var userExistInDeletedUsers = false;
var usersCount = 2;
for(let i = 1;i<99999;i++){
    if(usersCount == 0){
      break;
    }
    let users_count = 2;
    if(users_count == 0)
    break;
    let newUserId = '0000'+i;
    for(let i = 0;i<existing_users.length;i++){
        if(existing_users[i] == newUserId){
          userExistInExistingUsers = true;
          break;
        }
    }
    for(let i = 0;i<deleted_users.length;i++){
      if(deleted_users[i] == newUserId){
        userExistInDeletedUsers = true;
        break;
      }
    }
    if(userExistInExistingUsers == true || userExistInDeletedUsers == true){
      console.log("User id already exists: "+newUserId);
    } else{
      let newCreatedUser = '0000'+i;
      console.log("New user created: "+newCreatedUser);
      usersCount = usersCount -1;
    }

}