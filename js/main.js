const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

//Contenitore delle img grandi
let imgContainer = document.querySelector(".my-carousel-images");
console.log(imgContainer);

//MILESTON 2
//Prendo il contenitore delle miniature
let miniContainer = document.querySelector(".my-thumbnails");
console.log(miniContainer);

// MILESTON 1
images.forEach((curElem, index) => {
  console.log(curElem, index);

  imgContainer.innerHTML += `
  <div class="my-carousel-item" carousel-item="1">
      <img class="img-fluid" src="${curElem.image}" alt="Marvel photo"/>
      <div class="item-description px-3">
          <h2>${curElem.title}</h2>
          <p> ${curElem.text}</p>
      </div>
  </div>
  `;
  //MILESTON 2
  miniContainer.innerHTML += `
  <img class="img-fluid my-thumbnail" src="${curElem.image}" alt="Thumbnail of Marvel's"/>
  `;
});

// Mi aggancio al div delle immagini grandi
const slides = document.querySelectorAll(".my-carousel-item");
console.log(slides);

//MILESTON 2
// Mi aggancio al div delle immagini piccole
const thumbs = document.querySelectorAll(".my-thumbnail");
console.log(thumbs);

//Indico che la prima immagine deve rimanere attiva prima che scorra
let activeIndex = 0;

slides[activeIndex].classList.add("active");
// MILESTON2
thumbs[activeIndex].classList.add("active");

//Al click sulla freccia avanti
document.querySelector(".my-next-hook").addEventListener("click", showNext);
// MILESTON2

function showNext() {
  //   tolgo la classe active dall'indice corrente
  slides[activeIndex].classList.remove("active");
  thumbs[activeIndex].classList.remove("active");

  if (activeIndex < images.length - 1) {
    // incremento l'indice
    activeIndex++;
  } else {
    activeIndex = 0;
  }

  // aggiungo la classe active alla nuova img con il nuovo indice
  slides[activeIndex].classList.add("active");
  thumbs[activeIndex].classList.add("active");
}

//Al click sulla freccia indietro
document.querySelector(".my-prev-hook").addEventListener("click", showBack);

function showBack() {
  //   tolgo la classe active dall'indice corrente
  slides[activeIndex].classList.remove("active");

  if (activeIndex > 0) {
    // Decremento l'indice
    activeIndex--;
  } else {
    activeIndex = images.length - 1;
  }

  // aggiungo la classe active alla nuova img con il nuovo indice
  slides[activeIndex].classList.add("active");
}

//___________________________________________________________




