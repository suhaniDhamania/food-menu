const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "bison steak",
    category: "Dinner",
    price: 22.99,
    img: "item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// Function to display menu items dynamically
function displaymenu(menuItems) {
  let info = menuItems
    .map((item) => {
      return `
        <div class="items">
          <div class="image1">
            <img src="${item.img}" alt="${item.title}">
          </div>
          <div class="item-text">
            <div class="item-name">
              <span>${item.title}</span>
              <span style="color: darkgoldenrod">$${item.price}</span>
            </div>
            <p>${item.desc}</p>
          </div>
        </div>`;
    })
    .join("");

  const menuContainer = document.querySelector(".all-items");
  menuContainer.innerHTML = info;
}

window.addEventListener("DOMContentLoaded", () => {
  displaymenu(menu);
});

const allButton = document.querySelector(".all");
const bkButton = document.querySelector(".bk");
const lunchButton = document.querySelector(".lunch");
const shakesButton = document.querySelector(".shakes");
const dinnerButton = document.querySelector(".Dinner");
console.log(dinnerButton);

allButton.addEventListener("click",function() {
//  this.style.border="2px solid black";
  displaymenu(menu);
});

bkButton.addEventListener("click", function() {
 // this.style.border="2px solid black";

  let breakfastitems = menu.filter((item) =>
     item.category === "breakfast");
  displaymenu(breakfastitems);
});

lunchButton.addEventListener("click", function(){
 // this.style.border="2px solid black";
  let lunchitems = menu.filter((item) =>
     item.category === "lunch");
  displaymenu(lunchitems);
});

shakesButton.addEventListener("click",function(){
//  this.style.border="2px solid black";
  let shakesitems = menu.filter((item) =>
     item.category === "shakes");
  displaymenu(shakesitems);
});

dinnerButton.addEventListener("click",function(){
 // this.style.border="2px solid black";
  let dinneritems = menu.filter((item) =>
     item.category === "Dinner");
  displaymenu(dinneritems);
});

