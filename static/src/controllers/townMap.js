import { postboxData } from "../models/data/postbox.js";
import { townData } from "../models/data/town.js";
import { renderTownMap } from "../views/render.js";

export const renderMap = () => {
  renderTownMap(townData, postboxData);
};
