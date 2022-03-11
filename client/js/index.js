import { getElementByClassName } from "./dom-api/index.js";
import { redPostboxButton } from "./event/redPostBoxButton.js";

fetch("/data")
  .then((res) => res.json())
  .then((data) => JSON.parse(data))
  .then((villagesTemplate) => {
    getElementByClassName(document, "map").innerHTML = villagesTemplate;
  });
