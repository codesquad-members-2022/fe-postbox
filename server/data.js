const express = require("express");
const data = express.Router();
const MAX_WIDTH = 1500;
const MAX_HEIGHT = 700;
const DEPTH = 4;
const { createVillagePosition } = require("./createVillagePosition.js");
const { gacha } = require("./util.js");
const { Village } = require("./village.js");

const createRandomVillagesGenerator = () => {
  const positionToVillage = (pos) => new Village(String.fromCharCode(nameCode++), pos, gacha(50));
  let nameCode = 65;
  const createRandomVillages = (maxWidth, maxHeight, depth) => {
    if (depth === 0) return [];

    const villagePosition = createVillagePosition(maxWidth, maxHeight);
    const villages = villagePosition.map(positionToVillage);
    villages.forEach((village) => {
      village.innerVillage = createRandomVillages(village.w, village.h, depth - 1);
    });
    return villages;
  };
  return createRandomVillages;
};

data.get("/", (req, res) => {
  const createVillageTemplate = (villages) => villages.map((village) => village.createTemplate()).join("");
  const createRandomVillages = createRandomVillagesGenerator();
  const villages = createRandomVillages(MAX_WIDTH, MAX_HEIGHT, DEPTH);
  const villagesTemplate = createVillageTemplate(villages);
  res.json(JSON.stringify(villagesTemplate));
});

module.exports = data;
