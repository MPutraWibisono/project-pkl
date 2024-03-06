tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
        base: "#192A56",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",
      },
    },
  },
};

function startTime() {
  const today = new Date();

  let d = today.getDate();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = weekday[today.getDay()];
  const monthYear = [
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
    "December",
  ];
  let mo = monthYear[today.getMonth()];
  let y = today.getFullYear();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  const ampm = h >= 12 ? "PM" : "AM";
  document.getElementById("time").innerHTML =
    d +
    " " +
    mo +
    " " +
    y +
    " | " +
    day +
    " | " +
    h +
    ":" +
    m +
    ":" +
    s +
    " " +
    ampm;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
