import { delay } from '../utility/util.js';
import { mergeSort } from '../utility/sort.js';
import { myQuerySelector } from '../utility/querySelector.js';
import { myQuerySelectorAll } from '../utility/querySelector.js';
export default class Button {
  btnAddEvent() {
    myQuerySelector(document.body, 'red-button').addEventListener(
      'click',
      this.startEvent
    );
  }

  startEvent = () => {
    const $$postbox = myQuerySelectorAll(document.body, 'postbox');

    const postboxInfo = this.getPostboxInfo($$postbox);

    this.showPostbox(postboxInfo);
    this.showSortedPostbox(postboxInfo);
    delay(2000).then(() => this.changeBorder($$postbox));
  };

  getPostboxInfo($$postbox) {
    return [...$$postbox].map((element) => {
      return {
        name: element.previousElementSibling.innerHTML,
        size: element.style.width,
      };
    });
  }

  showSortedPostbox(postboxInfo) {
    const $postboxSize = myQuerySelector(document.body, 'postbox-size');
    const sorted = mergeSort(postboxInfo);

    const showSortedPostbox =
      sorted.reduce(
        (text, curList) => text + ` ${curList.name}(${curList.size})`,
        '우체통의 크기는 <br>'
      ) + '<br>순서 입니다.';
    $postboxSize.innerHTML = showSortedPostbox;
  }

  showPostbox(postboxInfo) {
    const $villageTotal = myQuerySelector(document.body, 'village-total');

    const showPostbox =
      postboxInfo.reduce((pre, cur) => pre + ` ${cur.name}`, '') +
      `<br> 총 ${postboxInfo.length}개의 마을입니다.`;

    $villageTotal.innerHTML = showPostbox;
  }

  changeBorder($$postbox) {
    $$postbox.forEach(
      (element) => (element.parentNode.style.border = '5px solid #f00')
    );
  }
}
