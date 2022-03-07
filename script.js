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
    image: 'Resources/band/member0.png',
    name: 'Alejandro Chavez',
    position: 'Lead Singer',
    description: 'Alejo used to be a solo artist who composed covers for his Instagram account, the band inmediately noticed his talent and potential, and that\'s how he joined the band.',
  },
  {
    image: 'Resources/band/member1.png',
    name: 'Eduardo Palacios',
    position: 'Drummer',
    description: 'Eduardo\'s favorite instrument has always been the drums, he learned it from a young age and now he is one of the founders of the band.',
  },
  {
    image: 'Resources/band/member2.png',
    name: 'Sebastian Valencia',
    position: 'Lead Guitarrist',
    description: 'Sebas is not only the lead guitarrist but also the founder of the band, he is in constantly working on new songs that represent what he feels and think.',
  },
  {
    image: 'Resources/band/member3.png',
    name: 'Jose Gamero',
    position: 'Rhythm Guitarrist',
    description: 'Together with Sebastian, Jose plays the guitar, he is also the one in charge of cheering up the gag when they feel overwhelmed.',
  },
  {
    image: 'Resources/band/member4.png',
    name: 'Franz Conzeta',
    position: 'Bassist',
    description: 'Nobody recognizes better than Franz the importance of a good bass on a song, he knows how to give an special vibe to a song.',
  },
  {
    image: 'Resources/band/member5.png',
    name: 'Paola Moscoso',
    position: 'Music Producer',
    description: 'She may doesn\'t play any particular instrument but still has an important role on the band mixing the instruments and making sure everything is in perfect harmony.',
  },
];

// Band Members Section
const membersSection = document.getElementById('members');

bandMembers.forEach((member, index) => {
  const bandMember = document.createElement('div')
  bandMember.setAttribute('class', 'band-member')

  bandMember.innerHTML = `
  <div class="img-div">
    <img src="/Resources/band/member${index}.png" alt="Band Member Photo" class="band-member-image">
  </div>
  <div class="member-details">
    <h3 class="member-name">${member.name}</h3>
    <p class="member-position">${member.position}</p>
    <p class="dots-separation">.........</p>
    <p class="member-description">${member.description}</p>
  </div>
  `

  membersSection.appendChild(bandMember)
})