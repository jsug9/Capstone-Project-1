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

// Band Integers
const bandIntegers = [
  {
    image: '/Resources/band/member1',
    name: 'Alejandro Chavez',
    position: 'Lead Singer',
    description: 'Specialist in covers and stuff like that',
  },
  {
    image: '/Resources/band/member1',
    name: 'Alejandro Chavez',
    position: 'Lead Singer',
    description: 'Specialist in covers and stuff like that',
  },
  {
    image: '/Resources/band/member1',
    name: 'Alejandro Chavez',
    position: 'Lead Singer',
    description: 'Specialist in covers and stuff like that',
  },
  {
    image: '/Resources/band/member1',
    name: 'Alejandro Chavez',
    position: 'Lead Singer',
    description: 'Specialist in covers and stuff like that',
  },
  {
    image: '/Resources/band/member1',
    name: 'Alejandro Chavez',
    position: 'Lead Singer',
    description: 'Specialist in covers and stuff like that',
  },
  {
    image: '/Resources/band/member1',
    name: 'Alejandro Chavez',
    position: 'Lead Singer',
    description: 'Specialist in covers and stuff like that',
  },
];

// Band Integers Section