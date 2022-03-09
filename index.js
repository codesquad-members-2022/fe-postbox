import Controller from "./src/services/controller.js";
import View from "./src/services/view.js";

const MAP_SIZE = 600;

const villageController = new Controller(MAP_SIZE);

villageController.initService();

const { villageContainer } = villageController;

const view = new View(villageContainer);

view.render();
