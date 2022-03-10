import { STYLE } from '../constants.js';
import { getRandomNumber } from '../utils.js';
import Template from './Template.js';
const { LAYER_COLOR } = STYLE;

class Town extends Template {
  constructor(size) {
    super(size);
    this.name = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substr(0, 2);
    this.$child = document.createElement('div');
    this.width = getRandomNumber(this.size * 0.5, this.size);
    this.height = getRandomNumber(this.size * 0.5, this.size);
  }
  render(layer) {
    const styleObj = {
      width: `${this.width}px`,
      height: `${this.height}px`,
      border: `1px solid ${LAYER_COLOR[layer]}`,
    };
    const className = 'town';
    const contents = `<span class="town__name">${this.name}</span>`;
    return super.render({ styleObj, className, contents });
  }
}
export default Town;
