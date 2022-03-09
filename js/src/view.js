export default class View {
  constructor(model, villageInfo) {
    this.model = model;
    this.villageInfo = villageInfo;
    this.renderVillage();
  }
  renderVillage() {
    const villageData = this.model.getVillage();
    let template = '';
    for (let i = 0; i < villageData.length; i++) {
      template += `<div class = 'village' style = 'width:${villageData[i].width}px; height:${villageData[i].height}px;'>${villageData[i].name}</div>`;
    }
    this.villageInfo.innerHTML = template;
  }
}
