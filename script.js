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

// function buat page berita-----------------------------------------
const categoryTitle = document.querySelectorAll(".category-title");
const allCategoryBerita = document.querySelectorAll(".all");
// console.log(allCategoryBerita)
// allCategoryBerita.classList.add("text-white")

categoryTitle[0].classList.add("text-white");
categoryTitle[0].classList.add("bg-accordion");

for (let i = 0; i < categoryTitle.length; i++) {
  categoryTitle[i].addEventListener(
    "click",
    filterBerita.bind(this, categoryTitle[i])
  );
}

function filterBerita(item) {
  kategoriFilter(item);
}


function kategoriFilter(activeItem) {
  for (let i = 0; i < categoryTitle.length; i++) {
    categoryTitle[i].classList.remove("bg-accordion");
    categoryTitle[i].classList.remove("text-white");
  }
  activeItem.classList.add("text-white");
  activeItem.classList.add("bg-accordion");
}

//paginate berita----------------------------------------------------
// const berita = [
//   {
//     id: 1,
//     judulBerita: "Rapat Koordinasi dilingkungan Pemerintah Kota Samarinda",
//     deskripsiBerita:
//       "SAMARINDA - Sekretaris Dinas Pemuda, Olahraga dan Pariwisata (Disporapar) Kota Samarinda Andy Ariefin, M.Pd mewakili Kadisporapar H. Muslimin, SE., M.Si menghadiri Rapat Koordinasi dilingkungan Pemerintah Kota Samarinda yang dilaksanakan oleh Sekretariat Daerah Kota Samarinda di ruang rapat Mangkupelas Balaikota pada hari senin (4/9/2023).",
//     kategori: "umum",
//     tanggalBuat: "7 Februari 2021",
//     penulis: "Beni Maulana",
//     dilihat: "219 kali",
//   },
//   {
//     id: 2,
//     judulBerita: "Rapat Koordinasi dilingkungan Pemerintah Kota Samarinda",
//     deskripsiBerita:
//       "SAMARINDA - Sekretaris Dinas Pemuda, Olahraga dan Pariwisata (Disporapar) Kota Samarinda Andy Ariefin, M.Pd mewakili Kadisporapar H. Muslimin, SE., M.Si menghadiri Rapat Koordinasi dilingkungan Pemerintah Kota Samarinda yang dilaksanakan oleh Sekretariat Daerah Kota Samarinda di ruang rapat Mangkupelas Balaikota pada hari senin (4/9/2023).",
//     kategori: "umum",
//     tanggalBuat: "7 Februari 2021",
//     penulis: "Beni Maulana",
//     dilihat: "219 kali",
//   },
//   {
//     id: 3,
//     judulBerita: "Rapat Koordinasi dilingkungan Pemerintah Kota Samarinda",
//     deskripsiBerita:
//       "SAMARINDA - Sekretaris Dinas Pemuda, Olahraga dan Pariwisata (Disporapar) Kota Samarinda Andy Ariefin, M.Pd mewakili Kadisporapar H. Muslimin, SE., M.Si menghadiri Rapat Koordinasi dilingkungan Pemerintah Kota Samarinda yang dilaksanakan oleh Sekretariat Daerah Kota Samarinda di ruang rapat Mangkupelas Balaikota pada hari senin (4/9/2023).",
//     kategori: "umum",
//     tanggalBuat: "7 Februari 2021",
//     penulis: "Beni Maulana",
//     dilihat: "219 kali",
//   },
//   {
//     id: 4,
//     judulBerita: "Rapat Koordinasi dilingkungan Pemerintah Kota Samarinda",
//     deskripsiBerita:
//       "SAMARINDA - Sekretaris Dinas Pemuda, Olahraga dan Pariwisata (Disporapar) Kota Samarinda Andy Ariefin, M.Pd mewakili Kadisporapar H. Muslimin, SE., M.Si menghadiri Rapat Koordinasi dilingkungan Pemerintah Kota Samarinda yang dilaksanakan oleh Sekretariat Daerah Kota Samarinda di ruang rapat Mangkupelas Balaikota pada hari senin (4/9/2023).",
//     kategori: "umum",
//     tanggalBuat: "7 Februari 2021",
//     penulis: "Beni Maulana",
//     dilihat: "219 kali",
//   },
//   {
//     id: 5,
//     judulBerita: "Rapat Koordinasi dilingkungan Pemerintah Kota Samarinda",
//     deskripsiBerita:
//       "SAMARINDA - Sekretaris Dinas Pemuda, Olahraga dan Pariwisata (Disporapar) Kota Samarinda Andy Ariefin, M.Pd mewakili Kadisporapar H. Muslimin, SE., M.Si menghadiri Rapat Koordinasi dilingkungan Pemerintah Kota Samarinda yang dilaksanakan oleh Sekretariat Daerah Kota Samarinda di ruang rapat Mangkupelas Balaikota pada hari senin (4/9/2023).",
//     kategori: "umum",
//     tanggalBuat: "7 Februari 2021",
//     penulis: "Beni Maulana",
//     dilihat: "219 kali",
//   },
//   {
//     id: 6,
//     judulBerita: "Rapat Koordinasi dilingkungan Pemerintah Kota Samarinda",
//     deskripsiBerita:
//       "SAMARINDA - Sekretaris Dinas Pemuda, Olahraga dan Pariwisata (Disporapar) Kota Samarinda Andy Ariefin, M.Pd mewakili Kadisporapar H. Muslimin, SE., M.Si menghadiri Rapat Koordinasi dilingkungan Pemerintah Kota Samarinda yang dilaksanakan oleh Sekretariat Daerah Kota Samarinda di ruang rapat Mangkupelas Balaikota pada hari senin (4/9/2023).",
//     kategori: "umum",
//     tanggalBuat: "7 Februari 2021",
//     penulis: "Beni Maulana",
//     dilihat: "219 kali",
//   },
//   {
//     id: 7,
//     judulBerita: "Rapat Koordinasi dilingkungan Pemerintah Kota Samarinda",
//     deskripsiBerita:
//       "SAMARINDA - Sekretaris Dinas Pemuda, Olahraga dan Pariwisata (Disporapar) Kota Samarinda Andy Ariefin, M.Pd mewakili Kadisporapar H. Muslimin, SE., M.Si menghadiri Rapat Koordinasi dilingkungan Pemerintah Kota Samarinda yang dilaksanakan oleh Sekretariat Daerah Kota Samarinda di ruang rapat Mangkupelas Balaikota pada hari senin (4/9/2023).",
//     kategori: "umum",
//     tanggalBuat: "7 Februari 2021",
//     penulis: "Beni Maulana",
//     dilihat: "219 kali",
//   },
//   {
//     id: 8,
//     judulBerita: "Rapat Koordinasi dilingkungan Pemerintah Kota Samarinda",
//     deskripsiBerita:
//       "SAMARINDA - Sekretaris Dinas Pemuda, Olahraga dan Pariwisata (Disporapar) Kota Samarinda Andy Ariefin, M.Pd mewakili Kadisporapar H. Muslimin, SE., M.Si menghadiri Rapat Koordinasi dilingkungan Pemerintah Kota Samarinda yang dilaksanakan oleh Sekretariat Daerah Kota Samarinda di ruang rapat Mangkupelas Balaikota pada hari senin (4/9/2023).",
//     kategori: "umum",
//     tanggalBuat: "7 Februari 2021",
//     penulis: "Beni Maulana",
//     dilihat: "219 kali",
//   },
//   {
//     id: 9,
//     judulBerita: "Rapat Koordinasi dilingkungan Pemerintah Kota Samarinda",
//     deskripsiBerita:
//       "SAMARINDA - Sekretaris Dinas Pemuda, Olahraga dan Pariwisata (Disporapar) Kota Samarinda Andy Ariefin, M.Pd mewakili Kadisporapar H. Muslimin, SE., M.Si menghadiri Rapat Koordinasi dilingkungan Pemerintah Kota Samarinda yang dilaksanakan oleh Sekretariat Daerah Kota Samarinda di ruang rapat Mangkupelas Balaikota pada hari senin (4/9/2023).",
//     kategori: "umum",
//     tanggalBuat: "7 Februari 2021",
//     penulis: "Beni Maulana",
//     dilihat: "219 kali",
//   },
//   {
//     id: 10,
//     judulBerita: "Rapat Koordinasi dilingkungan Pemerintah Kota Samarinda",
//     deskripsiBerita:
//       "SAMARINDA - Sekretaris Dinas Pemuda, Olahraga dan Pariwisata (Disporapar) Kota Samarinda Andy Ariefin, M.Pd mewakili Kadisporapar H. Muslimin, SE., M.Si menghadiri Rapat Koordinasi dilingkungan Pemerintah Kota Samarinda yang dilaksanakan oleh Sekretariat Daerah Kota Samarinda di ruang rapat Mangkupelas Balaikota pada hari senin (4/9/2023).",
//     kategori: "umum",
//     tanggalBuat: "7 Februari 2021",
//     penulis: "Beni Maulana",
//     dilihat: "219 kali",
//   },
//   {
//     id: 11,
//     judulBerita: "Rapat Koordinasi dilingkungan Pemerintah Kota Samarinda",
//     deskripsiBerita:
//       "SAMARINDA - Sekretaris Dinas Pemuda, Olahraga dan Pariwisata (Disporapar) Kota Samarinda Andy Ariefin, M.Pd mewakili Kadisporapar H. Muslimin, SE., M.Si menghadiri Rapat Koordinasi dilingkungan Pemerintah Kota Samarinda yang dilaksanakan oleh Sekretariat Daerah Kota Samarinda di ruang rapat Mangkupelas Balaikota pada hari senin (4/9/2023).",
//     kategori: "umum",
//     tanggalBuat: "7 Februari 2021",
//     penulis: "Beni Maulana",
//     dilihat: "219 kali",
//   },
// ];

// function paginate(items, itemsPerPage, paginationContainer) {
//   let currentPage = 1;
//   const totalPages = Math.ceil(items.length / itemsPerPage);

//   function showItems(page) {
//     const startIndex = (page - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const pageItems = items.slice(startIndex, endIndex);

//     const itemsContainer = document.querySelector("#items");
//     itemsContainer.innerHTML = "";

//     pageItems.forEach((item) => {
//       const div = document.createElement("div");
//       div.classList.add("px-2", "w-2/3", "flex", "flex-row");

//       const h1 = document.createElement("h1");
//       h1.classList.add("font-bold", "md:text-2xl", "line-clamp-2");
//       h1.textContent = item.judulBerita;

//       const innerDiv = document.createElement("div");
//       innerDiv.classList.add("flex", "flex-row", "md:my-2");

//       const eyeDiv = document.createElement("div");
//       eyeDiv.classList.add(
//         "flex-row",
//         "flex",
//         "items-center",
//         "text-slate-700",
//         "text-xs",
//         "md:text-base",
//         "pr-2",
//         "mt-2",
//         "my-1",
//         "md:my-1"
//       );
//       const eyeIcon = document.createElement("i");
//       eyeIcon.classList.add("fa-solid", "fa-eye");
//       const eyeText = document.createElement("p");
//       eyeText.classList.add("px-1");
//       eyeText.textContent = item.dilihat + " kali";
//       eyeDiv.appendChild(eyeIcon);
//       eyeDiv.appendChild(eyeText);

//       const cameraDiv = document.createElement("div");
//       cameraDiv.classList.add(
//         "flex-row",
//         "flex",
//         "items-center",
//         "text-slate-700",
//         "text-xs",
//         "md:text-base",
//         "pr-2",
//         "my-1"
//       );
//       const cameraIcon = document.createElement("i");
//       cameraIcon.classList.add("fa-solid", "fa-camera");
//       const cameraText = document.createElement("p");
//       cameraText.classList.add("px-1");
//       cameraText.textContent = item.foto + " foto";
//       cameraDiv.appendChild(cameraIcon);
//       cameraDiv.appendChild(cameraText);

//       innerDiv.appendChild(eyeDiv);
//       innerDiv.appendChild(cameraDiv);

//       const p = document.createElement("p");
//       p.classList.add(
//         "md:line-clamp-4",
//         "line-clamp-3",
//         "md:my-3",
//         "my-1",
//         "text-xs",
//         "md:text-base",
//         "text-slate-500"
//       );
//       p.textContent = item.deskripsiBerita;

//       div.appendChild(h1);
//       div.appendChild(innerDiv);
//       div.appendChild(p);

//       itemsContainer.appendChild(div);
//     });
//   }

//   function setupPagination() {
//     const pagination = document.querySelector(paginationContainer);
//     pagination.innerHTML = "";

//     for (let i = 1; i <= totalPages; i++) {
//       const link = document.createElement("a");
//       link.href = "#";
//       link.innerText = i;

//       if (i === currentPage) {
//         link.classList.add("active");
//       }

//       link.addEventListener("click", (event) => {
//         event.preventDefault();
//         currentPage = i;
//         showItems(currentPage);

//         const currentActive = pagination.querySelector(".active");
//         currentActive.classList.remove("active");
//         link.classList.add("active");
//       });

//       pagination.appendChild(link);
//     }
//   }

//   showItems(currentPage);
//   setupPagination();
// }

// const itemsPerPage = 5;
// const paginationContainer = "#pagination";

// paginate(berita, itemsPerPage, paginationContainer);
