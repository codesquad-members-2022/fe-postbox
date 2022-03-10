import { range } from './utils/utils.js';
import {
  getElementByClassName,
  getElementsByClassName,
} from './dom/selector.js';

import { createRootVillage } from './views/village.js';

const $$section = getElementsByClassName('section');

fetch('http://localhost:3000/api/villages')
  .then((res) => res.json())
  .then((rootVillages) => {
    const $$rootVillage = rootVillages.map((rootVillage) =>
      createRootVillage(rootVillage)
    );

    $$rootVillage.forEach(($rootVillage, idx) => {
      if ($rootVillage) $$section[idx].appendChild($rootVillage);
    });
  });
