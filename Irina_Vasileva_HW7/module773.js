// 7.7.3

let users = [
    { name: "Max", age: 10 },
    { name: "Alice", age: 20 },
    { name: "Luke", age: 40 },
    { name: "Carl", age: 100 }
];

let adults = users.filter(function(user) {
    return user.age >= 18;
});

let adultsNames = adults.map(function(user) {
    return user.name;
});

console.log(adults);
console.log(adultsNames);