export const formatTime = timestamp => {
  // initialize date objects
  const date = new Date(timestamp);
  const now = new Date();

  // extract date values
  const minutes = `${date.getMinutes() < 10 ? `0` : ``}${date.getMinutes()}`;
  const hours = date.getHours();
  // build time string
  const time = `${hours}:${minutes}`;
  const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const weekday = daysOfTheWeek[date.getDay()];
  const day = date.getDate();
  const monthsOfTheYear = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
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
    return `${weekday}, ${time}`;
  }

  // if message is from this year return month day and time
  else if (date.getFullYear() === now.getFullYear()) {
    return `${month} ${day}, ${time}`;
  }

  // if message is from last year or older return year month day and time
  else {
    return `${month} ${day} ${year}, ${time}`;
  }
};

// method to decode html using the DOMparser API
// https://developer.mozilla.org/en-US/docs/Web/API/DOMParser
export const decodeHTML = encoded => {
  const doc = new DOMParser().parseFromString(encoded, "text/html");
  return doc.documentElement.textContent;
};
