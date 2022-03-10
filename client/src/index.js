import { range } from './utils/utils.js';
import {
  getElementByClassName,
  getElementsByClassName,
} from './dom/selector.js';

import { createRootVillage } from './views/village.js';
import { getData } from './fakeServer/data.js';

const demo = true;

const renderVillages = (rootVillages) => {
  const $$section = getElementsByClassName('section');
  const $$rootVillage = rootVillages.map((rootVillage) =>
    createRootVillage(rootVillage)
  );

  $$rootVillage.forEach(($rootVillage, idx) => {
    if ($rootVillage) $$section[idx].appendChild($rootVillage);
  });
};

const main = () => {
  if (demo) {
    renderVillages(getData());
    return;
  }

  fetch('http://localhost:3000/api/villages')
    .then((res) => res.json())
    .then((rootVillages) => {
      renderVillages(rootVillages);
    });
};

main();
