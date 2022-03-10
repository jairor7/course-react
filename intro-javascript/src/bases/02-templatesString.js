const name = "Adam";
const lastName = "Smith";

const fullName = name + lastName;
console.log(fullName);

// Con template strings
const fullName2 = `${name} ${lastName}`;
const fullName3 = `${name} 
${lastName}`;
console.log(fullName2);
console.log(fullName3);

const getGreeting = (name = "John Doe") => `${name}`;
console.log("Hello " + getGreeting("Adam"));
