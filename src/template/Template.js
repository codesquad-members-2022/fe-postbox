import { assignStyles } from '../utils.js';

class Template {
  constructor(size) {
    this.size = size;
  }
  render({ styleObj, className, contents }) {
    const $element = document.createElement('div');
    assignStyles($element, styleObj);
    $element.classList.add(className);
    $element.innerHTML = contents;
    return $element;
  }
}

export default Template;
