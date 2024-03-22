// tailwind.config = {
//   theme: {
//     extend: {
//       colors: {
//         base: "#085D41",
//       },
//       gridTemplateColumns: {
//         // Simple 16 column grid
//         16: "repeat(16, minmax(0, 1fr))",
//       },
//     },
//   },
// };

document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".relative.flex");

  document.addEventListener("click", function (event) {
    dropdowns.forEach(function (dropdown) {
      const isClickInside = dropdown.contains(event.target);
      const arrowIcon = dropdown.querySelector(".fa-chevron-down");

      if (!isClickInside) {
        const menuList = dropdown.querySelector(".dropdown-content");
        menuList.classList.remove("block");
        menuList.classList.add("hidden");
        arrowIcon.style.transform = "rotate(0deg)";
      }
    });
  });

  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("click", function (event) {
      const menuList = dropdown.querySelector(".dropdown-content");
      const arrowIcon = dropdown.querySelector(".fa-chevron-down");
      menuList.classList.toggle("hidden");
      menuList.classList.toggle("block");

      if (menuList.classList.contains("block")) {
        arrowIcon.style.transform = "rotate(180deg)";
      } else {
        arrowIcon.style.transform = "rotate(0deg)";
      }
    });
  });
});

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
  if (!expanded) {
    navigationMenu.classList.remove("opacity-0");
    navigationMenu.classList.remove("invisible");
    mobileButton.classList.add("visible");
    mobileButton.classList.add("opacity-100");
    navigationMenu.classList.add("opacity-100");
    navigationMenu.classList.add("visible");
    // navigationMenu.setAttribute("aria-hidden", "true");
  } else {
    mobileButton.classList.remove("visible");
    mobileButton.classList.remove("opacity-100");
    navigationMenu.classList.remove("opacity-100");
    navigationMenu.classList.remove("visible");
    navigationMenu.classList.add("invisible");
    navigationMenu.classList.add("opacity-0");
    // navigationMenu.setAttribute("aria-hidden", "false");
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

// function buat page berita
const categoryTitle = document.querySelectorAll(".category-title");
const allCategoryBerita = document.querySelectorAll(".all");

for (let i = 0; i < categoryTitle.length; i++){
  categoryTitle[i].addEventListener('click', filterBerita.bind(this, categoryTitle[i]))
}

function filterBerita(item){
  kategoriFilter(item)

}

function kategoriFilter(activeItem) {
  for (let i = 0; i < categoryTitle.length; i++) {
    categoryTitle[i].classList.remove("bg-accordion");
    categoryTitle[i].classList.remove ("text-white");
  }
  activeItem.classList.add("bg-accordion");
  activeItem.classList.add("text-white");
}
