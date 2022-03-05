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
  document.getElementById('menu').style.width = '0%';
}));

window.addEventListener('resize', () => {
  if (window.innerWidth >= 800) {
    document.getElementById('menu').style.width = 'fit-content';
  }

  if (window.innerWidth <= 800) {
    document.getElementById('menu').style.width = '0%';
  }
});