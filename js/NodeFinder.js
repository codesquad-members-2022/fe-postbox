export class NodeFinder {
  static querySelector(el) {
    return document.querySelector(el);
  }
}

const body = NodeFinder.querySelector('body');