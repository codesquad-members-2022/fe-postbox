import Model from './src/model.js';
import View from './src/view.js';
import Button from './src/button.js';

const $ = (select) => document.querySelector(select);

(function startSearchVillage() {
  const villageInfo = $('.village-info');
  const redButton = $('.red-button');

  const model = new Model();

  const view = new View(model, villageInfo);
  view.renderVillage();

  const button = new Button(redButton);
  button.btnAddEvent();
})();
