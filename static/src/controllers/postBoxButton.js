import { getElementByClassName } from "../utils/util.js";
import { Town } from "../views/components/town.js";
import { PostboxInfo } from "../views/postboxInfo.js";
import { postboxData } from "../models/data/postbox.js";

export class PostboxButtonController {
  addPostboxButtonEventListener() {
    const $postboxButtonWrap = getElementByClassName(document.body, "postbox-button-wrap");
    const $postboxButton = getElementByClassName($postboxButtonWrap, "postbox-button");
    $postboxButton.addEventListener("click", () => {
      const town = new Town();
      const postboxInfo = new PostboxInfo();
      town.findPostboxTowns();
      postboxInfo.printPostboxInfo(postboxData);
    });
  }
}
