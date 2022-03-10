import Template from './Template.js';

class PostBox extends Template {
  constructor(size) {
    super(size);
  }
  render(townNumber) {
    if (townNumber < 2) {
      return;
    }
    const styleObj = { fontSize: this.size };
    const className = 'post-box';
    const contents = '📮';
    return super.render({ styleObj, className, contents });
  }
}

export default PostBox;
