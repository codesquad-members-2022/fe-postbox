import { getRandomNumber, getRandomBool } from './util/utils.js';
import { COUNT, TOWN_NAME, PLACE_SELF } from './util/constants.js';
import { DomApi } from './util/DomApi.js';

class Model {
  constructor() {
    this.wrapCount = COUNT.WRAP;
    this.maxTownCount = COUNT.MAX_TOWN;
    this.minTownCount = COUNT.MIN_TOWN;
    this.townNameIdx = 0;
    this.townDataArr = [];
    this.postboxTown = [];
    this.domApi = new DomApi();
    this.totalTownCount = 0;
    this.createTownDataArr();
    this.createTowns('first', 0);
    this.createTowns('second', 1);
    this.createTowns('third', 2);
    this.createTowns('fourth', 3);
  }

  get townData() {
    return {
      location: `${this.setLocation()} ${this.setLocation()}`,
      townName: '',
      children: [],
      postbox: getRandomBool(),
      postboxSize: Math.random(),
      nestedTownCount: 0,
    };
  }

  createOneTownData() {
    const nestedTownCount = getRandomNumber(
      this.minTownCount,
      this.maxTownCount - 1
    );
    this.totalTownCount += nestedTownCount + 1;

    const outerTownData = this.townData;
    outerTownData.townName = TOWN_NAME[this.townNameIdx++];
    if (outerTownData.postbox) {
      this.postboxTown.push([
        outerTownData.townName,
        outerTownData.postboxSize,
      ]);
    }
    outerTownData.nestedTownCount = nestedTownCount;
    outerTownData.size = this.setSize(outerTownData.nestedTownCount);
    let current = outerTownData;

    for (let i = 0; i < nestedTownCount; i++) {
      const child = this.townData;
      child.townName = TOWN_NAME[this.townNameIdx++];
      if (child.postbox) {
        this.postboxTown.push([child.townName, child.postboxSize]);
      }
      child.nestedTownCount = nestedTownCount - i - 1;
      child.size = this.setSize(child.nestedTownCount);
      current.children.push(child);
      current = current.children[0];
    }

    return outerTownData;
  }

  createTownDataArr() {
    while (this.wrapCount--) {
      this.townDataArr.push(this.createOneTownData());
    }
    console.log(this.townDataArr);
    console.log(this.totalTownCount);
  }

  setLocation() {
    return PLACE_SELF[getRandomNumber(0, PLACE_SELF.length - 1)];
  }

  setSize(nestedTownCount) {
    if (!nestedTownCount) {
      return { width: 0, height: 0 };
    }

    return {
      width: getRandomNumber(
        50 * nestedTownCount + 20,
        50 * (nestedTownCount + 1) - 20
      ),
      height: getRandomNumber(
        50 * nestedTownCount + 20,
        50 * (nestedTownCount + 1) - 20
      ),
    };
  }

  createTownElement(currentData) {
    const town = document.createElement('div');
    town.classList.add('town');
    if (currentData.postbox) town.classList.add('has-postbox');

    town.style.width = `${currentData.size.width}px`;
    town.style.height = `${currentData.size.height}px`;
    town.style.placeSelf = currentData.location;

    const postboxTag = `<span class="postbox">📭</span>`;
    const townName = document.createElement('h3');
    townName.classList.add('town-name');
    townName.innerHTML = `${currentData.townName}${
      currentData.postbox ? postboxTag : ''
    }`;

    town.append(townName);

    return town;
  }

  createTowns(className, number) {
    let current = this.townDataArr[number];

    const towns = this.createTownElement(current);
    let outerTown = towns;
    while (current.children.length) {
      const childTown = this.createTownElement(current.children[0]);
      outerTown.append(childTown);

      outerTown = childTown;
      current = current.children[0];
    }
    this.domApi.getElementByclassName(className).append(towns);
    this.displayTownCount();
    this.displayPostboxSize();
  }

  displayTownCount() {
    const result = TOWN_NAME.slice(0, this.totalTownCount).split('').join(', ');
    this.domApi.getElementByclassName(
      'count'
    ).textContent = `${result} 총 ${this.totalTownCount}개의 마을입니다.`;
  }

  displayPostboxSize() {
    this.postboxTown.sort((a, b) => b[1] - a[1]);
    const result = this.postboxTown
      .reduce((acc, cur) => (acc += `${cur[0]}, `), '')
      .slice(0, -2);
    this.domApi.getElementByclassName(
      'size'
    ).textContent = `우체통이 있는 마을의 개수는 총 ${this.postboxTown.length}개이고, 크기는 ${result} 순입니다.`;
  }
}

export { Model };
