B11_A6_A60;

function calculateVAT(price) {
  if (typeof price === "number" && price >= 0) {
    const vatRate = 7.5;
    const totalVat = (price * vatRate) / 100;
    return totalVat;
  } else {
    return "Invalid";
  }
}

function validContact(contact) {
  if (typeof contact !== "string") {
    return "Invalid";
  }
  if (contact.length === 11 && contact.startsWith("01")) {
    for (const char of contact) {
      if (char < "0" || char > "9") {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

function willSuccess(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }

  let countPass = 0;
  let countFail = 0;
  for (const mark of marks) {
    // console.log(mark);
    if (mark >= 50) {
      countPass++;
    } else {
      countFail++;
    }
  }
  if (countFail >= countPass) {
    return false;
  }
  return true;
}

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

function calculateSleepTime(times) {
  let sumTotal = 0;

  for (const time of times) {
    if (typeof time !== "number") {
      return "Invalid";
    }
    sumTotal = sumTotal + time;
  }
  const hour = sumTotal / 3600;
  const remainingHour = Math.abs(sumTotal - 3600 * Math.floor(hour));
  const minutes = remainingHour / 60;
  const remainingMinutes = remainingHour - 60 * Math.floor(minutes);

  return {
    hour: Math.floor(hour),
    minutes: Math.floor(minutes),
    seconds: remainingMinutes,
  };
}
