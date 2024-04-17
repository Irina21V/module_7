// 7.7.1
function printInfo() {
    console.log("Name: " + this.name + ", Age: " + this.age);
}

let person = {
    name: "John",
    age: 30
};

printInfo.call(person);