export class Town {
  constructor(_name, _width, _height, _absolutePosition) {
    this.name = _name;
    this.width = _width;
    this.height = _height;
    this.absolutePosition = _absolutePosition;
  }

  getTemplate(className = "", childTownTemplate = "", postboxTemplate = "") {
    return `<div class="town ${className}" style="width: ${this.width}%;height: ${this.height}%;top: ${this.absolutePosition.top}%;left: ${this.absolutePosition.left}%;">
              <span class="town-name">${this.name}</span>
              ${childTownTemplate}
              ${postboxTemplate}
            </div>`;
  }
}
