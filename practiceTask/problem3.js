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
// const marks = [55, 75, 41, 33, 47, 21, 30];

// const marks = 8877777777;

// console.log(willSuccess(marks));
