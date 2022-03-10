export default class Button {
  constructor(redButton) {
    this.redButton = redButton;
  }
  btnAddEvent() {
    this.redButton.addEventListener('click', this.startEvent);
  }
  startEvent = ({ target }) => {
    const villageList = document.querySelectorAll('.village');
    const mailbox = [...villageList].filter(
      (village) => village.lastElementChild.className === 'postbox'
    );
    const villageTotal = document.querySelector('.village-total');
    const postboxSize = document.querySelector('.postbox-size');
    const postboxInfo = mailbox.map((element) => {
      return {
        name: element.firstElementChild.innerHTML,
        size: element.lastElementChild.style.padding,
      };
    });
    // console.log(postboxInfo);
    let showPostbox = '';
    postboxInfo.forEach((element) => (showPostbox += ` ${element.name}`));
    showPostbox += `<br> 총 ${postboxInfo.length}개의 마을입니다.`;
    showPostbox += villageTotal.innerHTML = showPostbox;
    // console.log(this);
    console.log(this.getSort(postboxInfo));
  };
  getSort(postboxInfo) {
    return [...postboxInfo].sort(
      (a, b) => b.size.substr(0, 1) - a.size.substr(0, 1)
    );
  }
}
