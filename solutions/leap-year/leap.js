function isleapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0 ) {
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  } else {
    return false
  }
}

console.log(isleapYear(2000));
console.log(isleapYear(2024));
console.log(isleapYear(2023));