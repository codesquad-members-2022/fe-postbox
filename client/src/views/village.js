import {
  getElementByClassName as selector,
  createElement,
  addClass,
} from '../utils/utils.js';

const createVillage = (village) => {
  if (Object.keys(village).length === 0) return;
  const $village = createElement('div', 'vil');
  const $vilName = createElement('span', 'vil-name');
  $vilName.textContent = village.name;
  $village.appendChild($vilName);

  if (village.postbox.exist) {
    addClass('with-postbox', $village);
    const $post = createElement('span', 'postbox');
    $post.textContent = '📭';
    $post.style.position = 'absolute';
    $village.appendChild($post);
  }

  const { width, height } = village;

  $village.style.width = `${width}px`;
  $village.style.height = `${height}px`;

  return $village;
};

// width, height, postbox

const appendChildren = ($parent, children) => {
  if (!children) return;

  children.forEach((child) => {
    const $child = createVillage(child);
    $parent.appendChild($child);
    appendChildren($child, child.children);
  });
};

export const createRootVillage = (rootVillage) => {
  const $rootVillage = createVillage(rootVillage);
  const { children, xPos, yPos } = rootVillage;

  if ($rootVillage) {
    $rootVillage.style.position = 'absolute';
    $rootVillage.style.left = xPos + 'px';
    $rootVillage.style.top = yPos + 'px';
  }

  appendChildren($rootVillage, children);
  return $rootVillage;
};
