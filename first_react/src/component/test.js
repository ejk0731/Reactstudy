// let users = ["Mike", "Jane", "Tom"];
// let [user1, user2, user3] = users;

// let user1 = users[0];
// let user2 = users[1];
// let user3 = users[2];

console.log(user1); // "Mike"
console.log(user2); // "Jane"
console.log(user3); // "Tom"


let str = "Mike-Jane-Tom";
// let [user1, user2, user3] = str.split('-');

console.log(user1); // "Mike"
console.log(user2); // "Jane"
console.log(user3); // "Tom"

// let [a, b, c] = [1, 2];
// let [a=3, b=4, c=5] = [1, 2]
console.log(a); //1
console.log(b); //2
console.log(c); //5

let a = 1;
let b = 2;
// a = b; // x
// 임시로 c라는 변수를 만듦
let c = a;
a = b;
b = c;
// 배열 구조 분해 - 임시변수 없이 간단하게 구현가능
[a, b] = [b, a];


// let [user1, ,user2] = ["Mike", "Jane", "Tom", "Tony"];

console.log(user1); // "Mike"
console.log(user2); // "Tom"

// let user = {name: "Mike", age: 30};
// let {name, age} = user;
// let name = user.name;
// let age = user.age;

console.log(name); // "Mike"
console.log(age); // 30
let {name: userName, age: userAge} = user;

console.log(userName); // "Mike"
console.log(userAge); // 30

// let user = {name: "Mike", age: 30};
// let {name, age, gender} = user;

// let {name, age, gender = "male"} = user;

let user = {
    name:'Jane',
    age: 18,
    gender: 'female'
};
let {name, age, gender = "male"} = user;
console.log(gender); // 'female'
