import { initData } from "./models/dataManagement.js";
import { renderMap } from "./controllers/townMap.js";
import { addPostboxButtonEventListener } from "./controllers/postBoxButton.js";

const init = () => {
  initData();
  renderMap();
  addPostboxButtonEventListener();
};

init();
