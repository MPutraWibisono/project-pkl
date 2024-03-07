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

// Ambil elemen tombol mobile dan menu navigasi
// const mobileButton = document.querySelector(".lg\\:hidden");
const mobileButton = document.querySelector(".mobile");
const navigationMenu = document.querySelector(".navigation");

// Tambahkan event listener untuk klik pada tombol mobile
mobileButton.addEventListener("click", function () {
  // Toggle nilai aria-expanded tombol mobile
  const expanded =
    mobileButton.getAttribute("aria-expanded") === "true" || false;
  mobileButton.setAttribute("aria-expanded", !expanded);

  // Toggle visibilitas menu navigasi
  if (expanded) {
    mobileButton.classList.remove("visible");
    mobileButton.classList.remove("opacity-100");
    navigationMenu.classList.remove("opacity-100");
    navigationMenu.classList.remove("visible");
    navigationMenu.classList.add("invisible");
    navigationMenu.classList.add("opacity-0");
    navigationMenu.setAttribute("aria-hidden", "true");
  } else {
    navigationMenu.classList.remove("opacity-0");
    navigationMenu.classList.remove("invisible");
    mobileButton.classList.add("visible");
    mobileButton.classList.add("opacity-100");
    navigationMenu.classList.add("opacity-100");
    navigationMenu.classList.add("visible");
    navigationMenu.setAttribute("aria-hidden", "false");
  }
});

function startTime() {
  const today = new Date();

  let d = today.getDate();
  const weekday = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];
  let day = weekday[today.getDay()];
  const monthYear = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
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
