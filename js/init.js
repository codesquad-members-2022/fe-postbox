import Model from './src/model.js';
import View from './src/view.js';
import Button from './src/button.js';
import { myQuerySelector } from './utility/querySelector.js';

(function startSearchVillage() {
  const villageInfo = myQuerySelector(document.body, 'village-info');
  const redButton = myQuerySelector(document.body, 'red-button');

  const model = new Model();

  const view = new View(model, villageInfo);
  view.renderVillage();

  const button = new Button(redButton);
  button.btnAddEvent();
})();
