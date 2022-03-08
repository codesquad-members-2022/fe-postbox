import Village from './src/village/Village.js';

for (let i = 0; i < 6; i++) {
  const village = new Village(i + 1);
  console.log(village.size.width, village.size.height);
}
