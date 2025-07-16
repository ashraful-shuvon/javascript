// check weather a year is a leap year or not

function leapYear(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

const isLeap = leapYear(2000);
console.log(isLeap);
