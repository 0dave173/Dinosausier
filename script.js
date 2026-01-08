
import { Analytics } from "@vercel/analytics/next"

// const coffeeTypes = [
//     "Ankylosaurus", "Stegosaurus", "Spinosaurus", "Triceratops", "Velociraptor",
//     "Pterandon", "Plesiosaurus", "Mosasaurus", "Brachiosaurus", "Allosaurus",
// ];

// const coffeeImages = {
//     "Ankylosaurus": "../imgs/ankylosaurus-in-nature.webp",
//     "Stegosaurus": "../imgs/stegosaurus-side.webp",
//     "Spinosaurus": "../imgs/spinosaurus-dinosaur-artwork.webp",
//     "Triceratops": "../imgs/triceratops.webp",
//     "Velociraptor": "../imgs/velociraptor-dinosaur-standing-in-the-yellow-grass.webp",
//     "Pterandon": "../imgs/pterosaur-pteranodon.webp",
//     "Plesiosaurus": "../imgs/elasmosaurus.webp",
//     "Mosasaurus": "../imgs/hunting_mosasaurus_hobetsuensis_by_malvit-d6k30gt_2aed.webp",
//     "Brachiosaurus": "../imgs/brachiosaurus.webp",
//     "Allosaurus": "../imgs/allosaurus-dinosaur-isolated-background-photo.webp",
// };

// const coffeeList = document.getElementById("coffeeList");
// const searchInput = document.getElementById("searchInput");

// function renderCoffeeList(filter = "") {
//     coffeeList.innerHTML = "";

//     coffeeTypes.forEach(coffee => {
//         if (coffee.toLowerCase().includes(filter.toLowerCase())) {
//             const li = document.createElement("li");

//             const box = document.createElement("div");
//             box.className = "coffee-box";

//             const img = document.createElement("img");
//             img.src = coffeeImages[coffee] || "../imgs/default.jpg";
//             img.alt = coffee;

//             const title = document.createElement("h3");
//             title.textContent = coffee;

//             box.appendChild(img);
//             box.appendChild(title);

//             // Klickverhalten auf Detailseite
//             box.addEventListener("click", () => {
//                 window.location.href = `${coffee.toLowerCase().replace(/\s+/g, '-')}.html`;
//             });

//             li.appendChild(box);
//             coffeeList.appendChild(li);
//         }
//     });
// }

// renderCoffeeList();

// searchInput.addEventListener("input", () => {
//     renderCoffeeList(searchInput.value);
// });

// Wait for the page to be ready
// document.addEventListener('DOMContentLoaded', () => {
//     const homeBtn = document.getElementById('homeBtn');
//     if (homeBtn) {
//         homeBtn.addEventListener('click', () => {
//             // Simple relative navigation – adjust if you store home in a different folder
//             window.location.href = '../index.html';
//         });
//     }
// });

