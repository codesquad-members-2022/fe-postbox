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

      Object.assign(village.style, {
        position: "absolute",
        border: "solid 1px black",
        left: `${left}px`,
        bottom: `${bottom}px`,
        height: `${height}px`,
        width: `${width}px`,
      });
      document.querySelector(".map").appendChild(village);
    }
  }
}

export default View;
