const getSecondsOfThisYearUntilNow = () => 
(Math.round(Date.now() - new Date(2022 - 1 - 1).getTime()) / 1000);

export default getSecondsOfThisYearUntilNow;
