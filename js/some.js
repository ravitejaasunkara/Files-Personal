// // // const person = {
// // //   firstName: 'Asabeneh',
// // //   lastName: 'Yetayeh',
// // //   age: 250,
// // //   country: 'Finland',
// // //   city: 'Helsinki',
// // //   skills: [
// // //     'HTML',
// // //     'CSS',
// // //     'JavaScript',
// // //     'React',
// // //     'Node',
// // //     'MongoDB',
// // //     'Python',
// // //     'D3.js',
// // //   ],
// // // }
// // // console.log(Object.entries(person));
// // // console.log(person.hasOwnProperty('firstName'));

// // // const users = [
// // //     {
// // //         user: 'Alex',
// // //         email: 'alex@alex.com',
// // //         skills: ['HTML', 'CSS', 'JavaScript'],
// // //         age: 20,
// // //         isLoggedIn: false,
// // //         points: 30
// // //     },
// // //     {
// // //         user: 'Asab',
// // //         email: 'asab@asab.com',
// // //         skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
// // //         age: 25,
// // //         isLoggedIn: false,
// // //         points: 50
// // //     },
// // //     {
// // //         user: 'Brook',
// // //         email: 'daniel@daniel.com',
// // //         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
// // //         age: 30,
// // //         isLoggedIn: true,
// // //         points: 50
// // //     },
// // //     {
// // //         user: 'Daniel',
// // //         email: 'daniel@alex.com',
// // //         skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
// // //         age: 20,
// // //         isLoggedIn: false,
// // //         points: 40
// // //     },
// // //     {
// // //         user: 'Jhon',
// // //         email: 'john@john.com',
// // //         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
// // //         age: 20,
// // //         isLoggedIn: true,
// // //         points: 50
// // //     },
// // //     {
// // //         user: 'Thomas',
// // //         email: 'thomas@thomas.com',
// // //         skills: ['HTML', 'CSS', 'JavaScript', 'React'],
// // //         age: 20,
// // //         isLoggedIn: false,
// // //         points: 40
// // //     },
// // //     {
// // //         user: 'Paul',
// // //         email: 'paul@paul.com',
// // //         skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
// // //         age: 20,
// // //         isLoggedIn: false,
// // //         points: 40
// // //     }
// // // ]
// // // var length = 0;
// // // var person = '';
// // // users.forEach(item => {
// // //     let newlength = item.skills.length;
// // //     if(newlength > length){
// // //         person = item.user;
// // //         length = item.skills.length;
// // //     }
// // // })
// // // console.log(person);


// // // let arrowfn = (fname,lname) => fname+' '+lname;
// // // console.log(arrowfn('hello','world'));

// // // const [username,password] = ['ravi@gmail.com','Raviteja552@']
// // // console.log(username,password);

// // // const nums = [1,2,3,4,5];
// // // console.log([...nums]);

// // // const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
// // // const [name,skills,js] = student;
// // // console.log(name,skills,js[2],js[3]);

// // const usersText = `{
// //     "users":[
// //       {
// //         "firstName":"Asabeneh",
// //         "lastName":"Yetayeh",
// //         "age":250,
// //         "email":"asab@asb.com"
// //       },
// //       {
// //         "firstName":"Alex",
// //         "lastName":"James",
// //         "age":25,
// //         "email":"alex@alex.com"
// //       },
// //       {
// //       "firstName":"Lidiya",
// //       "lastName":"Tekle",
// //       "age":28,
// //       "email":"lidiya@lidiya.com"
// //       }
// //     ]
// //     }`
    
// //     const usersObj = JSON.parse(usersText, (key, value) => {
// //       let newValue =
// //         typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
// //       return newValue
// //     })
// //     console.log(usersObj);

// let data = 
// [{"id":1,"card_number":"5602221055053843723","card_type":"china-unionpay","issue_date":"5/25/2021","salt":"x6ZHoS0t9vIU","phone":"339-555-5239"},
// {"id":2,"card_number":"3547469136425635","card_type":"jcb","issue_date":"12/18/2021","salt":"FVOUIk","phone":"847-313-1289"},
// {"id":3,"card_number":"5610480363247475108","card_type":"china-unionpay","issue_date":"5/7/2021","salt":"jBQThr","phone":"348-326-7873"},
// {"id":4,"card_number":"374283660946674","card_type":"americanexpress","issue_date":"1/13/2021","salt":"n25JXsxzYr","phone":"599-331-8099"},
// {"id":5,"card_number":"67090853951061268","card_type":"laser","issue_date":"3/18/2021","salt":"Yy5rjSJw","phone":"850-191-9906"},
// {"id":6,"card_number":"560221984712769463","card_type":"china-unionpay","issue_date":"6/29/2021","salt":"VyyrJbUhV60","phone":"683-417-5044"},
// {"id":7,"card_number":"3589433562357794","card_type":"jcb","issue_date":"11/16/2021","salt":"9M3zon","phone":"634-798-7829"},
// {"id":8,"card_number":"5602255897698404","card_type":"china-unionpay","issue_date":"1/1/2021","salt":"YIMQMW","phone":"228-796-2347"},
// {"id":9,"card_number":"3534352248361143","card_type":"jcb","issue_date":"4/28/2021","salt":"zj8NhPuUe4I","phone":"228-796-2347"},
// {"id":10,"card_number":"4026933464803521","card_type":"visa-electron","issue_date":"10/1/2021","salt":"cAsGiHMFTPU","phone":"372-887-5974"}]

// var problem1= [];
// data.filter((item) => {
//     let cardNumber = item.card_number.split('');
//     let cardSum = cardNumber.reduce((acc,item,i) => {
//         if(i % 2 == 0){
//             acc = acc+parseInt(item);
//         }
//         return acc;
//     },0)
//     let cardTotal = cardSum;
//     if(cardTotal%2 != 0){
//         problem1.push(item.card_number);
//     }
// })
// console.log(problem1);
// /* 

//     1. Find all card numbers whose sum of all the even position digits is odd.
//     2. Find all cards that were issued before June.
//     3. Assign a new field to each card for CVV where the CVV is a random 3 digit number.
//     4. Add a new field to each card to indicate if the card is valid or not.
//     5. Invalidate all cards issued before March.
//     6. Sort the data into ascending order of issue date.
//     7. Group the data in such a way that we can identify which cards were assigned in which months.

//     Use method chaining to solve #3, #4, #5, #6 and #7.

//     NOTE: Do not change the name of this file 
// */

// const constants = [2.72, 3.14, 9.81, 37, 100]

// const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
// console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200,
//     perimeter: 60
//   }
// const {width,height,area,perimeter} = rectangle;
// console.log(width,height,area);
const todoList = [
    {
      task:'Prepare JS Test',
      time:'4/1/2020 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'4/1/2020 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'4/1/2020 1:00',
      completed:false
    }
    ]
for(item of todoList){
    //console.log(...item);
}

// const arr = [1,2,3,4];
// console.log(...arr);

// var newArr = [...arr];
// console.log(newArr);


// const users = [
//     {
//       name:'Brook',
//       scores:75,
//       skills:['HTM', 'CSS', 'JS'],
//       age:16
//     },
//     {
//       name:'Alex',
//       scores:80,
//       skills:['HTM', 'CSS', 'JS'],
//       age:18
//     },
//     {
//       name:'David',
//       scores:75,
//       skills:['HTM', 'CSS'],
//       age:22
//     },
//     {
//       name:'John',
//       scores:85,
//       skills:['HTML'],
//       age:25
//     },
//     {
//       name:'Sara',
//       scores:95,
//       skills:['HTM', 'CSS', 'JS'],
//       age: 26
//     },
//     {
//       name:'Martha',
//       scores:80,
//       skills:['HTM', 'CSS', 'JS'],
//       age:18
//     },
//     {
//       name:'Thomas',
//       scores:90,
//       skills:['HTM', 'CSS', 'JS'],
//       age:20
//     }
//     ]

// for(item of users){
//     const {name,scores,skills,age} = Object.keys(item);
//     console.log(name,scores,skills,age);
// }

// const students = [
//     ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
//     ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
//   ]
// var studentsObj = [];

// students.forEach((item,i) => {
//     let obj = {};
//     obj.name = item[0];
//     obj.skills = item[1];
//     obj.marks = item[2];
//     studentsObj.push(obj);
// })
// console.log(studentsObj);

const student = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }
student.skills.frontEnd.join({skill:'Bootstrap',level:8});
student.skills.backEnd.concat({skill:'Express',level:9});
student.skills.dataBase.concat({skill:'SQL',level:8});
student.skills.dataScience.concat({skill:'SQL'});
console.log(student);
