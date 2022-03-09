class View {
  constructor(villageContainer) {
    this.villageContainer = villageContainer;
  }

  render() {
    for (const villageInfo of this.villageContainer) {
      const {
        x: [left, width],
        y: [bottom, height],
      } = villageInfo;
      const village = document.createElement("div");

      village.style.position = "absolute";
      village.style.border = "solid 1px black";
      village.style.left = `${left}px`;
      village.style.bottom = `${bottom}px`;
      village.style.height = `${height}px`;
      village.style.width = `${width}px`;
      document.querySelector(".map").appendChild(village);
    }
  }
}

export default View;
