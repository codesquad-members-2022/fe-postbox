const vilages = [];
const vilageTemplate = () => {
  return document.createElement("div");
};

const randomLength = (max = 400, min = 100) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const randomLocation = (max = 1000, min = 10) => {
  return Math.floor(Math.random() * (max - min) + min);
};

for (let i = 0; i < 3; i++) {
  const vilage = vilageTemplate();
  vilage.style.width = `${randomLength()}px`;
  vilage.style.height = `${randomLength()}px`;
  vilage.style.top = `${randomLocation()}px`;
  vilage.style.left = `${randomLocation()}px`;
  vilage.style.position = "relative";
  vilage.style.border = "2px solid";
  vilages.push(vilage);
}

const body = document.querySelector("body");
vilages.forEach((vilage) => body.append(vilage));
console.log(vilages);
