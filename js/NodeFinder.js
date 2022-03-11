const NodeFinder = {
  startNode : document.body,

  getElById(idName) {
    const queue = [this.startNode];

    while(true) {
      if(queue[0].id === idName) {
        return queue[0];
      }
      queue.push(...queue[0].children);
      queue.shift();
    }
  },

  getElsById(idName) {
    const queue = [this.startNode];
    const idNodes = [];

    while(queue.length) {
      if(queue[0].id === idName) {
        idNodes.push(queue[0])
      }
      queue.push(...queue[0].children);
      queue.shift();
    }
    return idNodes;
  },

  getElsByClass(className) {
    const queue = [this.startNode];
    const classNodes = [];

    while(queue.length) {
      if(queue[0].className === className) {
        classNodes.push(queue[0])
      }
      queue.push(...queue[0].children);
      queue.shift();
    }
    return classNodes;
  },
  
  getElBytag(tagName) {
    const queue = [this.startNode];

    while(true) {
      if(queue[0].tagName === tagName.toUpperCase()) {
        return queue[0];
      }
      queue.push(...queue[0].children);
      queue.shift();
    }
  },

  getElsBytag(tagName) {
    const queue = [this.startNode];
    const tagNodes = [];
    
    while(queue.length) {
      if(queue[0].tagName === tagName.toUpperCase()) {
        tagNodes.push(queue[0]);
      }
      queue.push(...queue[0].children);
      queue.shift();
    }
    return tagNodes;
  },

  querySelector(elName) {
    switch(elName[0]) {
      case "#" :
        const idName = elName.slice(1,elName.length);
        return this.getElById(idName);
      case "." :
        const className = elName.slice(1,elName.length);
        const classNodes = this.getElsByClass(className);
        return classNodes[0];
      default : 
        return this.getElBytag(elName);
    }
  },

  querySelectorAll(elName) {
    switch(elName[0]) {
      case "#" :
        const idName = elName.slice(1,elName.length);
        return this.getElsById(idName);
      case "." :
        const className = elName.slice(1,elName.length);
        const classNodes = this.getElsByClass(className);
        return classNodes;
      default : 
        return this.getElsBytag(elName);
    }
  }
}

console.log(NodeFinder.querySelectorAll("#name2"));
console.log(NodeFinder.querySelectorAll(".box"));
console.log(NodeFinder.querySelectorAll("div"));