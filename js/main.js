// strings
let fruit = "banana";
let moreFruit = fruit + "\napple";
console.log(moreFruit);
console.log(moreFruit.length);
console.log(moreFruit.indexOf("b"));
console.log(moreFruit.slice(1, 6)); // start 1 until but not including index 6
console.log(moreFruit.replace("a", "1")); // only the first one found gets replaced
console.log(moreFruit.toUpperCase());
console.log(moreFruit.toLowerCase());
console.log(moreFruit.split(""));

// arrays
let names = ["John", "Anne", "Mark", "Susan"];
console.log(names.toString());
console.log(names.join("-"));
console.log(names.pop());
console.log(names.push("McShizzle"), names);
console.log(names.shift(), names); // more resource intensive
console.log(names.unshift("Amy", "Ian"), names); // more resource intensive

// Objects
let person = {
  firstName: "Stephen",
  lastName: "Axtell",
  sex: "Male",
  age: 48,
  personInfo: function () {
    console.log(`${this.firstName}`);
  },
};

console.log(person.age);
console.log(person["sex"]);
person.personInfo();
