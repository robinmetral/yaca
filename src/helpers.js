export const formatTime = timestamp => {
  // initialize date objects
  const date = new Date(timestamp);
  const now = new Date();

  // extract date values
  const minutes = `${date.getMinutes() < 10 ? `0` : ``}${date.getMinutes()}`;
  const hours = date.getHours();
  // build time string
  const time = `${hours}:${minutes}`;
  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const weekday = daysOfTheWeek[date.getDay()];
  const day = date.getDate();
  const monthsOfTheYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const month = monthsOfTheYear[date.getMonth()];
  const year = date.getFullYear();

  // if message is from today return time
  if (new Date(date).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0)) {
    return time;
  }

  // if message is from this week return weekday and time
  else if (
    new Date().setHours(0, 0, 0, 0) - new Date(date).setHours(0, 0, 0, 0) <
    6 * 24 * 60 * 60 * 1000
  ) {
    console.log(
      new Date(date).setHours(0, 0, 0, 0) - new Date().setHours(0, 0, 0, 0)
    );
    console.log(6 * 24 * 60 * 60 * 1000);
    return `${weekday} at ${time}`;
  }

  // if message is from this year return month day and time
  else if (date.getFullYear() === now.getFullYear()) {
    return `${month} ${day} at ${time}`;
  }

  // if message is from last year or older return year month day and time
  else {
    return `${month} ${day}, ${year} at ${time}`;
  }
};