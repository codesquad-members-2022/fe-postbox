import { Village, RootVillage } from './src/models/Village.js';
import { range } from './src/utils/utils.js';

const village = new RootVillage({
  props: { width: 400, height: 250, parent: null },
  sectionWidth: 600,
  sectionHeight: 300,
});

console.log(village.toJSON());
