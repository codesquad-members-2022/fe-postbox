import { getElementByClassName, getElementsByClassName } from "../../utils/util.js";

export class Town {
  findPostboxTowns() {
    const $map = getElementByClassName(document.body, "map");
    const $postboxTowns = getElementsByClassName($map, "postbox-town");
    $postboxTowns.forEach((postboxTown) => postboxTown.classList.add("postbox-town--active"));
  }
}
