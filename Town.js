import { Mailbox } from "./Mailbox.js";
import { Model } from "./Model.js";
import { randomBoolean, randomNum } from "./util.js";

export default class Town extends Model {
  mailBox = null;
  name;

  constructor(name = undefined, parent = null) {
    super(parent);
    this.name = name;
    Model.objects.add(this);
  }

  _render() {
    Model.objects.delete(this);
    let num = randomNum(Model.objects.size);
    this.el.style.width = `${this.parent.clientWidth / num}px`;
    this.el.style.height = `${this.parent.clientHeight / num}px`;
    this.el = document.createElement("div");
    this.el.classList.add("town");
    this.el.dataset["name"] = this.name;

    const bool = randomBoolean();

    if (bool) {
      this.createMailbox();
    }

    if (!Model.objects.size) return;

    for (const town of Model.objects) {
      if (num) {
        town.parent = this;
        town.render();
        num--;
      }
    }
  }
  createMailbox() {
    const size = Math.floor(Math.random() * Model.objects.size + 1);
    this.mailBox = new Mailbox(size, this);
    this.mailBox.render();
    Model.boxes.add(this);
  }
}
