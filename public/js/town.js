export class Town {
  constructor({ name, size, position, mailbox }) {
    this.name = name;
    this.size = size;
    this.position = position;
    this.mailbox = mailbox;
  }

  template() {
    return `<div class="town">
              <div class="town-info">
                <h2 class="town-title">${this.name}</h2>
                ${
                  this.mailbox.isExist === 1
                    ? `<span class="mailbox" data-size="${this.mailbox.size}">📮</span>`
                    : ""
                }
              </div>
            </div>`;
  }
  // grid-template-columns
  static setTownStyle(node, style) {
    // if (grid.row === 1) style.gridTemplateRows = "auto auto";
    // if (grid.column === 1) style.gridTemplateColumns = "auto auto";

    Object.assign(node.style, style);
  }
}
