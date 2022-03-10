export class Town {
    constructor(height, width) {
      this.width = width;
      this.height = height;
      this.towns = [];
      this.postBox = null;
  }
  
  getSize() {
    return this.width * this.height;
  }
}