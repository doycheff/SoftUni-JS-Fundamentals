function personInfo(firstName, lastName, age) {
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age,
    };
    return person;
}
let personObject1 = personInfo("Peter", "Pan", "20");
let personObject2 = personInfo("George", "Smith", "18");
console.log(personObject1);
console.log(personObject2);
