const countOfWorkingDays = (startDate, endDate) => {
  let numWorkDays = 0;
  let currentDate = new Date(startDate);
  const message = 'The first parameter is earlier date, than second!';
  while (currentDate <= endDate) {
    if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
      numWorkDays++;
    } else {
      throw new Error(message);
    }
    currentDate = currentDate.addDays(1);
  }
  return numWorkDays;
};
export default countOfWorkingDays;
