import { TraverseDOM } from './util.js';

export class View {
  constructor() {
    this.mapWrapper = TraverseDOM.querySelector(document, 'map__wrapper');
  }

  renderArea(data) {
    data.forEach((el) => {
      const newTown = document.createElement('div');
      newTown.classList.add('map__area');
      newTown.appendChild(this.renderRootTown(el));
      this.mapWrapper.appendChild(newTown);
    });
  }

  renderRootTown(data) {
    const makeRoot = document.createElement('div');
    makeRoot.classList.add('root');

    const rootName = this.addTownName(data);
    this.addChildTown(makeRoot, rootName, data);
    return makeRoot;
  }

  addTownName(data) {
    const rootName = document.createElement('span');
    rootName.classList.add('town__name');
    rootName.innerText = data.name;
    return rootName;
  }

  addChildTown(root, name, data) {
    if (!data.child.length) {
      root.appendChild(name);
      if (data.postBox.hasPostBox) {
        root.appendChild(this.addPostBox(data));
      }
    } else {
      root.appendChild(name);
      if (data.postBox.hasPostBox) {
        root.appendChild(this.addPostBox(data));
      }
      this.renderChildTown(root, data.child);
    }
  }

  addPostBox(data) {
    const postBox = document.createElement('span');
    postBox.classList.add('postBox');
    postBox.dataset.postboxSize = data.postBox.size;
    postBox.innerText = '📮';
    return postBox;
  }

  renderChildTown(root, data) {
    data.forEach((el) => {
      const makeChild = document.createElement('div');
      makeChild.classList.add('child');
      const childName = this.addTownName(el);

      this.addChildTown(makeChild, childName, el);
      root.appendChild(makeChild);
    });
  }
}
