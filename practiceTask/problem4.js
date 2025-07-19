function validProposal(person1, person2) {
  if (typeof person1 !== "object" || typeof person2 !== "object") {
    return "Invalid";
  }
  if (
    (person1.gender === "male" && person2.gender === "female") ||
    (person1.gender === "female" && person2.gender === "male")
  ) {
    const ageDifference = person1.age - person2.age;
    if (Math.abs(ageDifference) <= 7) {
      return true;
    }
  }
  return false;
}

// const person1 = { name: "Rahul", gender: "female", age: 28 };
// const person2 = { name: "Joya", gender: "male", age: 30 };

// console.log(validProposal(person1, person2));
// console.log(validProposal("Mizan", { name: "mitu", gender: "male", age: 32 }));
