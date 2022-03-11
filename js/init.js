import Model from './src/model.js';
import View from './src/view.js';
import Button from './src/button.js';

(function startSearchVillage() {
  const model = new Model();

  const view = new View(model);
  view.renderVillage();

  const button = new Button();
  button.btnAddEvent();
})();
