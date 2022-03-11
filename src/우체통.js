export class 우체통 {
  constructor(크기) {
    this.크기 = 크기;
  }
  template() {
    return `<div data-size="${this.크기}" class="box">📮${this.크기}</div>`;
  }
}
