import { Person } from "src/model/person.model";

function helloPerson(firstName: string, lastName: string, age: number): string {
  const person = new Person();
  person.firstName = firstName;
  person.lastName = lastName;
  person.age = age;

  return `Hello ${person.firstName} ${person.lastName}!`;
}

export {
  helloPerson
}
