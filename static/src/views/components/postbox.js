export class Postbox {
  constructor(_length) {
    this.length = _length;
  }

  getTemplate() {
    return `<div class="postbox" style="width: ${this.length}%; height: ${this.length}%;"><span>📮</span></div>`;
  }
}
