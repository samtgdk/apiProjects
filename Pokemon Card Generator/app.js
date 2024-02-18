const url = " https://pokeapi.co/api/v2/pokemon/";

const card = document.getElementById("card");
const btn = document.getElementById("btn");

let getPokData = () => {
  // 1 ile 150 arasında sayı almak için
  let id = Math.floor(Math.random() * 150) + 1;
  // console.log(id);
  // pokiapi url'sini id ile birleştirir
  const finalUrl = url + id;

  fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {
      generatedCard(data);
    });
};

// card oluştur

let generatedCard = (data) => {
  // gerekli verileri almak ve değişkenlere atama

  const hp = data.stats[0].base_stat;
  // console.log(hp);
  const imgSrc = data.sprites.other.dream_world.front_default;
  // console.log(imgSrc);
  const pokeName = data.name;
  const statAttack = data.stats[1].base_stat;
  const statDefense = data.stats[2].base_stat;
  const statSpeed = data.stats[5].base_stat;

  card.innerHTML = ` 
  <p class="hp">
    <span>HP</span>
    ${hp}
  </p>
  <img src="${imgSrc}" alt="" />
  <h2 class="poke-name">${pokeName}</h2>
 
  <div class="stats">
    <div>
      <h3>${statAttack}</h3>
      <p>Attack</p>
    </div>
    <div>
      <h3>${statDefense}</h3>
      <p>Defense</p>
    </div>
    <div>
      <h3>${statSpeed}</h3>
      <p>Speed</p>
    </div>
  </div>
`;
};

btn.addEventListener("click", getPokData);
window.addEventListener("load", getPokData);
