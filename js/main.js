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

let imgContainer = document.querySelector(".my-carousel-images");
console.log(imgContainer);

// MILESTON 1
images.forEach((curImage) => {
  console.log(curImage);

  imgContainer.innerHTML += `
  <div class="my-carousel-item" carousel-item="1">
      <img class="img-fluid" src="${curImage.image}" alt="Marvel photo"/>
      <div class="item-description px-3">
          <h2>${curImage.title}</h2>
          <p> ${curImage.text}</p>
      </div>
  </div>
  `;
});

// Mi aggancio al div delle immagini
const slides = document.querySelectorAll(".my-carousel-item");
console.log(slides);

//Indico che la prima immagine deve rimanere attiva prima che scorra
let activeIndex = 0;
slides[activeIndex].classList.add("active");

//FUNZIONAAAAAA
//Al click sulla freccia avanti
// const nextBtn = document
//   .querySelector(".my-next-hook")
//   .addEventListener("click", () => {
//     //   tolgo la classe active dall'indice corrente
//     slides[activeIndex].classList.remove("active");

//     if (activeIndex < images.length - 1) {
//       // incremento l'indice
//       activeIndex++;
//     } else {
//       activeIndex = 0;
//     }
//     console.log(activeIndex);

//     // aggiungo la classe active alla nuova img con il nuovo indice
//     slides[activeIndex].classList.add("active");
//   });
//___________________________________________________

//Al click sulla freccia avanti
document.querySelector(".my-next-hook").addEventListener("click", showNext);

function showNext() {
  //   tolgo la classe active dall'indice corrente
  slides[activeIndex].classList.remove("active");

  if (activeIndex < images.length - 1) {
    // incremento l'indice
    activeIndex++;
  } else {
    activeIndex = 0;
  }

  // aggiungo la classe active alla nuova img con il nuovo indice
  slides[activeIndex].classList.add("active");
}


//Al click sulla freccia indietro
document.querySelector(".my-prev-hook").addEventListener("click", showBack);

function showBack() {
  //   tolgo la classe active dall'indice corrente
  slides[activeIndex].classList.remove("active");

  if (activeIndex > 0 ) {
    // Decremento l'indice
    activeIndex--;
  } else {
    activeIndex = images.length - 1;
  }

  // aggiungo la classe active alla nuova img con il nuovo indice
  slides[activeIndex].classList.add("active");
}
//___________________________________________________________--
