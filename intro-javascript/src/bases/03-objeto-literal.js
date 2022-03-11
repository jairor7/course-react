const person = {
  name: "Juan",
  lastName: "Perez",
  age: 30,
  address: {
    street: "Calle 123",
    city: "Ciudad de Mexico",
    state: "CDMX",
  },
};
const copyPerson = { ...person };
console.log(copyPerson);
console.log(Object.keys(person));
console.table(person);
console.log(person);
