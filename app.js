const { RootVillage } = require('./src/models/Village.js');
const { range } = require('./src/utils/utils.js');
const express = require('express');
const app = express();
const port = 3000;

const isChanceLowerThan = (x) => {
  if (!parseInt(x) || x < 1 || x > 100) return false;

  const random = Math.random(); // 0 ~ 1
  if (random <= parseInt(x) * 0.01) return true;
  return false;
};

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/villages', (req, res) => {
  const sectionWidth = 1200 / 2;
  const sectionHeight = 600 / 2;
  const minWidth = 300;
  const maxWidth = 600;
  const minHeight = 150;
  const maxHeight = 300;
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

  res.json(rootVillages);
});

app.listen(port);
