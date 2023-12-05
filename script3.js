// Object-Oriented Programming

// Write A “Person” Class To Hold All The Details:
class Person {
  constructor(firstName, lastName, age, location, mail, number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
    this.mail = mail;
    this.number = number;
  }
}
var personDetails = new Person(
  "Balaji Venkateshwaran",
  "Panchatsaram",
  "29",
  "Chennai",
  "bxxxx@gmail.com",
  "+91-9xxxxxxxx0"
);
console.log(personDetails);
