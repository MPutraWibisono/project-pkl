
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".relative.flex");

  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("mouseover", function (event) {
      const menuList = dropdown.querySelector(".dropdown-content");
      const arrowIcon =
        dropdown.querySelector(".fa-chevron-down") ||
        dropdown.querySelector(".fa-chevron-right");

      menuList.classList.add("block");
      menuList.classList.remove("hidden");
      arrowIcon.style.transform = "rotate(180deg)";
      // arrowIcon.style.transform = "scale(0)";
    });

    // Tambahan: reset transform saat mouse leave dropdown
    dropdown.addEventListener("mouseleave", function (event) {
      const menuList = dropdown.querySelector(".dropdown-content");
      const arrowIcon =
        dropdown.querySelector(".fa-chevron-down") ||
        dropdown.querySelector(".fa-chevron-right");
      arrowIcon.style.transform = "rotate(0deg)";
      // arrowIcon.style.transform = "scale(1)";
      menuList.classList.remove("block");
      menuList.classList.add("hidden");
    });
  });
});

// Tombol Mobile Hamburger Menu--------------------------------------
// Ambil elemen tombol mobile dan menu navigasi
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
  } else {
    mobileButton.classList.remove("visible");
    mobileButton.classList.remove("opacity-100");
    navigationMenu.classList.remove("opacity-100");
    navigationMenu.classList.remove("visible");
    navigationMenu.classList.add("invisible");
    navigationMenu.classList.add("opacity-0");
  }
});

// Fungsi Header Waktu-----------------------------------------------
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
    day +
    ",  " +
    d +
    " " +
    mo +
    " " +
    y +
    "&nbsp;  &nbsp;" +
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
  }
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
