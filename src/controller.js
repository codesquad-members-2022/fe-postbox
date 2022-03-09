import { Map } from './model.js';
import { View } from './view.js';

class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.model.randomCreateTown();
    this.view.renderTown(this.model.townList);
  }
}

const model = new Map();
const view = new View();

const controller = new Controller(view, model);
controller.init();
