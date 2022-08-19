const countOfWorkingDays = (from, to) => {
  const startDate = new Date(from);
  const endDate = new Date(to);

  if (startDate > endDate) {
    throw new Error('The first parameter is earlier date, than second!');
  } else {
    return (Date.now(endDate) - Date.now(startDate)) / 1000 / 60 / 60 / 24 / (7 / 5);
  }
};

export default countOfWorkingDays;
