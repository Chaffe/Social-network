function renderDateOfBirth() {
  const dateOptions = {
    days: [],
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    years: [],
  };
  const countDays = 31;
  const countYears = 70;
  const currentYear = 2021;

  for (let i = 1; i <= countDays; i += 1) {
    dateOptions.days.push(i);
  }

  for (let i = currentYear; i >= currentYear - countYears; i -= 1) {
    dateOptions.years.push(i);
  }

  return dateOptions;
}

export default renderDateOfBirth;
