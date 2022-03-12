export class Town {
  constructor(height, width) {
    this.width = width;
    this.height = height;
    this.towns = [];
    this.postBoxSize = 0;
  }

  getSize() {
    return this.width * this.height;
  }
}
