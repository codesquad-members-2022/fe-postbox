import { Village, RootVillage } from './src/models/Village.js';
import { range } from './src/utils/utils.js';
import {
  getElementByClassName,
  getElementsByClassName,
} from './src/dom/getElement.js';
const sectionWidth = 1200 / 2;
const sectionHeight = 600 / 2;
const minWidth = 300;
const maxWidth = 600;
const minHeight = 150;
const maxHeight = 300;
const chance = 30;

const lower = (x) => {
  if (!parseInt(x)) return false;
  if (x < 1 || x > 100) return false;

  const random = Math.random(); // 0 ~ 1
  if (random <= parseInt(x) * 0.01) return true;
  return false;
};

const rootVillages = Array.from({ length: 4 }).map(() => {
  if (lower(chance)) return {};

  const props = {
    width: range(minWidth, maxWidth + 1),
    height: range(minHeight, maxHeight + 1),
  };

  return new RootVillage({ props, sectionHeight, sectionWidth });
});

console.log(rootVillages);
