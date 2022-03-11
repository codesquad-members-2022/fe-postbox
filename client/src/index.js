import { range, delay, sort } from './utils/utils.js';
import {
  getElementByClassName,
  getElementsByClassName,
} from './dom/selector.js';

import { createRootVillage } from './views/village.js';
import { getData } from './fakeServer/data.js';

const demo = true;

const searchVillagesWithPostbox = (rootVillages) => {
  const result = [];

  // rootVillage = {} || { villageInfo }
  const fullDFS = (village) => {
    if (village.postbox?.exist) {
      result.push(village);
    }

    village.children?.forEach((child) => {
      fullDFS(child);
    });
  };

  rootVillages.forEach((rootVillage) => {
    fullDFS(rootVillage);
  });

  return result;
};

const renderVillages = (rootVillages) => {
  const $$section = getElementsByClassName('section');
  const $$rootVillage = rootVillages.map((rootVillage) =>
    createRootVillage(rootVillage)
  );

  $$rootVillage.forEach(($rootVillage, idx) => {
    if ($rootVillage) $$section[idx].appendChild($rootVillage);
  });

  const $btn = getElementByClassName('check-btn');
  $btn.addEventListener('click', (event) => {
    delay(2000).then(() => {
      const $$villages = getElementsByClassName('with-postbox');
      $$villages.forEach(($village) => {
        $village.style.borderColor = 'var(--red)';
      });
      const villagesWithPostbox = searchVillagesWithPostbox(rootVillages);
      const length = villagesWithPostbox.length;
      if (length === 0) {
        getElementByClassName('sort-by-name').textContent =
          '우체통이 없습니다.';
        return;
      }

      const villagesSortedByName = sort(villagesWithPostbox, (a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });

      const villagesSortedByPostboxSize = sort(villagesWithPostbox, (a, b) => {
        if (a.postbox.size < b.postbox.size) return -1;
        if (a.postbox.size > b.postbox.size) return 1;
        return 0;
      });

      let textContent = '';
      textContent += villagesSortedByName
        .map((village) => village.name)
        .join(', ');
      textContent += ` 총 ${length}개 마을 입니다.`;
      getElementByClassName('sort-by-name').textContent = textContent;

      textContent = '우체통의 크기는<br />';
      textContent += villagesSortedByPostboxSize
        .map((village) => `${village.name} (${village.postbox.size}), <br />`)
        .join('');
      textContent += '순입니다.';
      getElementByClassName('sort-by-size').innerHTML = textContent;
    });
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
