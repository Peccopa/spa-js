export default class Component {
  #children = [];

  #node = null;

  constructor({ tag = 'div', className = '', text = '' } = {}, ...children) {
    const node = document.createElement(tag);
    node.className = className;
    node.textContent = text;
    this.#node = node;

    if (children.every((e) => typeof e === 'object')) {
      this.appendChildren(children);
    }
  }

  getNode() {
    return this.#node;
  }

  getChildren() {
    return this.#children;
  }

  append(child) {
    this.#children.push(child);
    this.#node.append(child.getNode());
  }

  appendChildren(children) {
    children.forEach((el) => {
      this.append(el);
    });
  }

  setTextContent(content) {
    this.#node.textContent = content;
  }

  setAttribute(attribute, value) {
    this.#node.setAttribute(attribute, value);
  }

  removeAttribute(attribute) {
    this.#node.removeAttribute(attribute);
  }

  toggleClass(className) {
    this.#node.classList.toggle(className);
  }

  addListener(event, listener, options = false) {
    this.#node.addEventListener(event, listener, options);
  }

  removeListener(event, listener, options = false) {
    this.#node.removeEventListener(event, listener, options);
  }

  delete() {
    this.deleteChildren();
    this.#node.remove();
  }

  deleteChildren() {
    this.#children.forEach((child) => {
      child.delete();
    });
    this.#children.length = 0;
  }
}
