import Controller from "./src/services/controller/controller.js";
import View from "./src/services/view/view.js";

const MAP_SIZE = 600;

const villageController = new Controller(MAP_SIZE, MAP_SIZE);

villageController.initService();

const { villageContainer } = villageController;

const view = new View(villageContainer);

view.render();
