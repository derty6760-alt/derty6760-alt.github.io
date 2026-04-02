const skins = [
  { name: "AK-47 | Redline", chance: 40 },
  { name: "M4A1-S | Printstream", chance: 25 },
  { name: "AWP | Asiimov", chance: 15 },
  { name: "Knife | Karambit", chance: 5 },
  { name: "Gloves | Sport", chance: 2 }
];

function getRandomSkin() {
  let rand = Math.random() * 100;
  let sum = 0;

  for (let skin of skins) {
    sum += skin.chance;
    if (rand <= sum) return skin.name;
  }
}

function openCase() {
  const roulette = document.getElementById("roulette");
  const result = document.getElementById("result");

  roulette.innerHTML = "";
  result.innerHTML = "";

  let items = [];

  for (let i = 0; i < 30; i++) {
    let skin = skins[Math.floor(Math.random() * skins.length)].name;
    items.push(skin);
  }

  const winSkin = getRandomSkin();
  items[25] = winSkin;

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerText = item;
    roulette.appendChild(div);
  });

  let position = 0;
  let interval = setInterval(() => {
    position += 10;
    roulette.style.transform = `translateX(-${position}px)`;

    if (position >= 150 * 25) {
      clearInterval(interval);
      result.innerHTML = "🎉 Ты выбил: " + winSkin;
    }
  }, 20);
}
