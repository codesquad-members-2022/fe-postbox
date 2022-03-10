import { getElementsByClassName } from "./utils/util.js";
import { PostboxButtonController } from "./controllers/postboxButton.js";

const init = () => {
  const postboxButtonController = new PostboxButtonController();
  postboxButtonController.addPostboxButtonEventListener();
};

init();
