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

  const $checkBtn = getElementByClassName('check-btn');

  const delayTime = 2000;
  const isDone = false;
  $checkBtn.addEventListener(
    'click',
    handleBtnClick(rootVillages, delayTime, isDone)
  );
};

const handleBtnClick = (rootVillages, delayTime, isDone) => () => {
  if (isDone) return;
  isDone = true;
  const borderColor = 'var(--red)';
  const $$villages = getElementsByClassName('with-postbox');
  const $postNameInfo = getElementByClassName('sort-by-name');
  const $postSizeInfo = getElementByClassName('sort-by-size');

  const villagesWithPostbox = searchVillagesWithPostbox(rootVillages);
  const postboxCount = villagesWithPostbox.length;

  delay(delayTime) //
    .then(() => {
      $$villages.forEach(($village) => {
        $village.style.borderColor = borderColor;
      });

      if (postboxCount === 0) {
        $postNameInfo.textContent = '우체통이 없습니다.';
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

      let innerHTML;
      innerHTML = villagesSortedByName
        .map((village) => village.name)
        .reduce((result, curStr) => {
          return result + curStr + '<br />';
        }, '우체통이 있는 마을은<br />');
      innerHTML += ` 총 ${postboxCount}개 마을 입니다.`;
      $postNameInfo.innerHTML = innerHTML;

      innerHTML = villagesSortedByPostboxSize
        .map((village) => `${village.name} (${village.postbox.size})`)
        .reduce((result, curStr) => {
          return result + curStr + '<br />';
        }, '우체통의 크기는<br />');
      innerHTML += '순입니다.';
      $postSizeInfo.innerHTML = innerHTML;
    })
    .catch((err) => {
      console.error(err);
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
