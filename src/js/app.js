const reviews = [
  {
    id: 1,
    name: "John Doe",
    job: "Barista",
    img: "https://res.cloudinary.com/dxlainz2v/image/upload/v1668362322/coffee-shop/our-team-1_xhcihp.jpg",
    text: `Cat ipsum dolor sit amet, nya nya nyan. Make meme, make cute face
    carrying out surveillance on the neighbour's dog. Meow. Bite off
    human's toes chill on the couch table. Walk on a keyboard.`,
  },
  {
    id: 2,
    name: "Jack Smith",
    job: "Barista",
    img: "https://res.cloudinary.com/dxlainz2v/image/upload/v1668362324/coffee-shop/our-team-2_zyyiph.jpg",
    text: `Cat ipsum dolor sit amet, poop in litter box, scratch the walls. Look at dog hiiiiiisssss trip on catnip, rub whiskers on bare skin act innocent. Stare out the window ask for petting for meow all night.`,
  },
  {
    id: 3,
    name: "Jane Doe",
    job: "Marketing",
    img: "https://res.cloudinary.com/dxlainz2v/image/upload/v1668362323/coffee-shop/our-team-3_fkg1yx.jpg",
    text: `Cat ipsum dolor sit amet, grass smells good and this cat happen now, it was too purr-fect!!! i vomit in the bed in the middle of the night. Stare out the window cuddle no cuddle cuddle love scratch scratch for gnaw the corn cob. `,
  },
  {
    id: 4,
    name: "Alan Doe",
    job: "Manager",
    img: "https://res.cloudinary.com/dxlainz2v/image/upload/v1668362323/coffee-shop/our-team-4_rfc6hx.jpg",
    text: `Cat ipsum dolor sit amet, jump off balcony, onto stranger's head yet human clearly uses close to one life a night no one naps that long so i revive by standing on chestawaken!. Destroy couch meowing non stop for food. `,
  },
  {
    id: 5,
    name: "Sarah Smith",
    job: "Barista",
    img: "https://res.cloudinary.com/dxlainz2v/image/upload/v1668362324/coffee-shop/our-team-5_cilgzp.jpg",
    text: `Cat ipsum dolor sit amet, mice cat playing a fiddle in hey diddle diddle?. Eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric.`,
  },
  {
    id: 6,
    name: "Barry Allen",
    job: "Chef",
    img: "https://res.cloudinary.com/dxlainz2v/image/upload/v1668362324/coffee-shop/our-team-6_jknrrj.jpg",
    text: `Cat ipsum dolor sit amet, toilet paper attack claws fluff everywhere meow miao french ciao litterbox, or stare at guinea pigs scratch the furniture. Attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what's your problem?`,
  },
];

const img = document.getElementById("person-img");
const person = document.getElementById("person");
const job = document.getElementById("job");
const description = document.getElementById("description");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

//set starting item
let currentItem = 0;

// load inital person
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

// show person based on item
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  person.textContent = item.name;
  job.textContent = item.job;
  description.textContent = item.text;
}

//snow next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// show previous person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});
