import { RootVillage } from './Village.js';
import { range } from '../utils/utils.js';

const isChanceLowerThan = (x) => {
  if (!parseInt(x) || x < 1 || x > 100) return false;

  const random = Math.random(); // 0 ~ 1
  if (random <= parseInt(x) * 0.01) return true;
  return false;
};

export const getData = () => {
  const sectionWidth = 1200 / 2;
  const sectionHeight = 1200 / 2;
  const minWidth = 300;
  const maxWidth = 600;
  const minHeight = 300;
  const maxHeight = 600;
  const chance = 30;
  const length = 4;
  RootVillage.initNameList();
  const rootVillages = Array.from({ length }) //
    .map(() => {
      if (isChanceLowerThan(chance)) return {};

      const props = {
        width: range(minWidth, maxWidth + 1),
        height: range(minHeight, maxHeight + 1),
      };

      const vil = new RootVillage({ props, sectionHeight, sectionWidth });
      return vil.toObject();
      /* return vil 하는 경우 json 변환 과정에서 상속받은 프로퍼티만 생성됨 */
    });

  return rootVillages;
};
