import Component from './Component';

const div1 = new Component();
const div2 = new Component();

const props1 = {
  tag: 'p',
  className: 'content',
  text: 'text',
};
const component = new Component(props1, div1, div2);
console.log(component);
