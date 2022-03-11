const { getRandomNumber } = require("./util.js");

class Village {
  constructor(name, { x, y, w, h }, hasPostbox = false) {
    this.name = name;
    [this.x, this.y, this.w, this.h] = [x, y, w, h];
    this.postboxSize = hasPostbox ? getRandomNumber(1, 10) : null;
    this.hasPostbox = hasPostbox;
    this.innerVillage = [];
  }
  createTemplate() {
    return `
    <div class="village${this.hasPostbox ? " has-red-postbox" : ""}" style="${`
      top:${this.y}px;
      left:${this.x}px;
      width:${this.w}px;
      height:${this.h}px;
      `}">
      <div class="village-name">${this.name}</div>
      <div class="village-area">
        ${
          this.hasPostbox
            ? `<div class="red-postbox" data-size="${this.postboxSize}">📮${this.postboxSize}</div>`
            : ""
        }
        ${this.innerVillage.map((village) => village.createTemplate()).join("")}
      </div>
    </div>
    `;
  }
}

module.exports = { Village };
