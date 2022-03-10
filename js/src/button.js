export default class Button {
  constructor(redButton) {
    this.redButton = redButton;
  }
  btnAddEvent() {
    this.redButton.addEventListener('click', this.startEvent);
  }

  startEvent = () => {
    const $postbox = document.querySelectorAll('.postbox');

    const postboxInfo = this.getPostboxInfo($postbox);

    this.showPostbox(postboxInfo);
    this.showSortedPostbox(postboxInfo);

    setTimeout(() => {
      this.changeBorder($postbox);
    }, 2000);
  };

  getPostboxInfo($postbox) {
    return [...$postbox].map((element) => {
      return {
        name: element.previousElementSibling.innerHTML,
        size: element.style.width,
      };
    });
  }

  changeBorder($postbox) {
    $postbox.forEach(
      (element) => (element.parentNode.style.border = '2px solid red')
    );
  }

  showSortedPostbox(postboxInfo) {
    const $postboxSize = document.querySelector('.postbox-size');
    let showSortedPostbox = '우체통의 크기는 <br>';
    const sorted = this.getSort(postboxInfo);
    sorted.forEach(
      (element) => (showSortedPostbox += ` ${element.name}(${element.size})`)
    );
    showSortedPostbox += '<br>순서 입니다.';
    $postboxSize.innerHTML = showSortedPostbox;
  }

  showPostbox(postboxInfo) {
    const $villageTotal = document.querySelector('.village-total');
    let showPostbox = '';

    postboxInfo.forEach((element) => (showPostbox += ` ${element.name}`));

    showPostbox += `<br> 총 ${postboxInfo.length}개의 마을입니다.`;
    $villageTotal.innerHTML = showPostbox;
  }

  getSort(postboxInfo) {
    return [...postboxInfo].sort(
      (a, b) => b.size.substr(0, 1) - a.size.substr(0, 1)
    );
  }
}
