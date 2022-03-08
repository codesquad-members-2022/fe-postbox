import { getRandomNumber } from "./utils.js";

class TownManager {
  constructor() {
    this.towns = [];
    // TODO: min, max 모듈화시킬지 고민.
    this.townNumber = getRandomNumber({ min: 1, max: 10 });
    this.postOfficeNumber = getRandomNumber({
      min: 1,
      max: this.townNumber - 1,
    });
  }

  addTown() {
    const town2 = new Town();
    // town2의 유효성 검사

    // 통과 시 this.towns.push(curToww)
  }

  validateTown(town2) {
    // this.towns 순회한다.
    // 현재타운 x, y 
    
    
    this.towns.every((town) => {
      
    })
  }
  
  isOverlap(town1, town2) {
    const town1location = this.get4location(town1);
    const town2location = this.get4location(town2);

  }

  get4location(town) {
    const x1 = town.location.x;
    const y1 = town.location.y;
    const x2 = x1 + town.width;
    const y2 = y1;
    const x3 = x1;
    const y3 = y1 + town.height;
    const x4 = x2;
    const y4 = y3;

    return {
      x1,y1,x2,y2,x3,y3,x4,y4
    }
  }
  
}
