export class Town {
  constructor(_name, _width, _height, _coordinate) {
    this.name = _name;
    this.width = _width;
    this.height = _height;
    this.coordinate = _coordinate;
  }

  getTemplate(className = "", postboxTemplate = "") {
    return `<div class="town ${className}" style="width: ${this.width}%;height: ${this.height}%;top: ${this.coordinate.top}%;left: ${this.coordinate.left}%;">
              <span class="town-name">${this.name}</span>
              ${postboxTemplate}
            </div>`;
  }
}
