//7.7.4
function setFullName(fullName) {
    this.fullName = fullName;
}

let person = {
    name: "John",
    age: 30
};

let setPersonFullName = setFullName.bind(person);

setPersonFullName("John Smith");

console.log(person.fullName);
