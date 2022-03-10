
import Town from "./Town.js";
import {Mailbox} from "./Mailbox.js";


// import Town from "./Town";
// import {Mailbox} from "./Mailbox";
//
// class Scanner{
//     #visitor;
//     constructor(visitor) {
//         this.#visitor = visitor;
//     }
//     visit(f,target){this.#visitor.visit(f,target);}
//     scan(target){
//         const binder = new Binder, f= el=>{
//             const model = el.className;
//             if(model instanceof Town) binder.add(new Town())
//             else if(model instanceof Mailbox)binder.add(new Mailbox())
//         }
//         f(target);
//         this.visit(f,target)
//         throw 'override';
//     }
// }
// class Binder{
//     #items = new Set;
//     add(v){
//         this.#items.add(v)
//     }
//     render(){
//         this.#items.forEach(item=>{
//             item.
//         })
//     }
// }
// class Model{
//     #parent;
//     el;
//     constructor(parent) {
//         this.#parent = parent;
//     }
//     _render(){
//         throw 'override';
//     }
//     render(){
//         this._render()
//         this.#parent.
//     }
// }

export default class Scanner {
  #model;
  #visitor;
  constructor(model, visitor) {
    this.#model = model;
    this.#visitor =visitor;
  }
  scan(model) {
    const f = target=>{
      if(!target.parent){
        document.body.appendChild(target.el);
      }
      target.parent.el.appendChild(target.el);
    }
    f(model);
    this.visit(f,model)
  }
  visit(f,target){this.#visitor.visit(f,target);}
}
const = new Town().render();

new Scanner.scan(town)
