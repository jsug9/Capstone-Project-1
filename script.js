// Mobile Menu
function openNav() {
  document.getElementById('menu').style.width = '100%';
}

function closeNav() {
  document.getElementById('menu').style.width = '0%';
}

document.getElementById('openbtn').addEventListener('click', () => {
  openNav();
});

document.getElementById('closebtn').addEventListener('click', () => {
  closeNav();
});

document.querySelectorAll('.menu-li').forEach((n) => n.addEventListener('click', () => {
  if (window.innerWidth <= 800) {
    document.getElementById('menu').style.width = '0%';
  }
}));

window.addEventListener('resize', () => {
  if (window.innerWidth >= 800) {
    document.getElementById('menu').style.width = 'fit-content';
  }

  if (window.innerWidth <= 800) {
    document.getElementById('menu').style.width = '0%';
  }
});

// Band Members
const bandMembers = [
  {
    image: '/Resources/band/member0.jpeg',
    name: 'Alejandro Chavez',
    position: 'Lead Singer',
    description: 'Alejo used to be a solo artist who composed covers for his Instagram account, the band inmediately noticed his talent and potential, and that\'s how he joined the band.',
  },
  {
    image: '/Resources/band/member1.jpeg',
    name: 'Eduardo Palacios',
    position: 'Drummer',
    description: 'Eduardo\'s favorite instrument has always been the drums, he learned it from a young age and now he is one of the founders of the band',
  },
  {
    image: '/Resources/band/member2.jpeg',
    name: 'Sebastian Valencia',
    position: 'Lead Guitarrist',
    description: 'Specialist in covers and stuff like that',
  },
  {
    image: '/Resources/band/member3.jpeg',
    name: 'Alejandro Chavez',
    position: 'Rhythm Guitarrist',
    description: 'Specialist in covers and stuff like that',
  },
  {
    image: '/Resources/band/member4.jpeg',
    name: 'Alejandro Chavez',
    position: 'Bass',
    description: 'Specialist in covers and stuff like that',
  },
  {
    image: '/Resources/band/member5.jpeg',
    name: 'Alejandro Chavez',
    position: 'Music Producer',
    description: 'He may doesn\'t play any particular instrument but still has an important role on the band mixing the instruments and making sure everything is in perfect armony',
  },
];

// Band Members Section
