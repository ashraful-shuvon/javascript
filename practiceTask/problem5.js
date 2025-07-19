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

// const times = [66717, 499, 502, 999];

// console.log(calculateSleepTime([5600]));
