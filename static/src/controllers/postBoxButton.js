import { getElementByClassName } from "../utils/util.js";
import { findPostboxTowns, printPostboxInfo } from "../views/render.js";
import { postboxData } from "../models/data/postbox.js";

export const addPostboxButtonEventListener = () => {
  const $postboxButtonWrap = getElementByClassName(document.body, "postbox-button-wrap");
  const $postboxButton = getElementByClassName($postboxButtonWrap, "postbox-button");
  $postboxButton.addEventListener("click", () => {
    findPostboxTowns();
    printPostboxInfo(postboxData);
  });
};
