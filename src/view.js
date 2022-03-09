export class View {
  constructor() {
    // 임의로 구한 값
    this.mapWrapper = document.childNodes[1].childNodes[2].childNodes[1].childNodes[3].childNodes[1];
  }

  renderTown(data) {
    data.forEach((el) => {
      const newTown = document.createElement('div');
      newTown.classList.add('map__town');
      newTown.appendChild(this.renderChildTown(el));
      this.mapWrapper.appendChild(newTown);
    });
  }

  renderChildTown(townData) {
    const newTown = document.createElement('div');
    newTown.classList.add('first');

    if (townData.childTown.length === 1) {
      townData.hasPostBox
        ? (newTown.innerHTML = `<span class="town__name">${townData.childTown}</span><span class="postBox">📮</span>`)
        : (newTown.innerHTML = `<span class="town__name">${townData.childTown}</span>`);
    } else {
      const makeFirst = document.createElement('span');
      makeFirst.classList.add('town__name');
      makeFirst.textContent = townData.childTown[0];
      newTown.appendChild(makeFirst);

      const another = townData.childTown.slice(1);
      newTown.appendChild(this.renderAnotherChild(another));
    }

    return newTown;
  }

  renderAnotherChild(data) {
    const makeChild = document.createElement('div');
    makeChild.classList.add('second');

    // 구현중
    makeChild.innerHTML = `<span class="town__name">${data}</span>`;
    return makeChild;
  }
}
