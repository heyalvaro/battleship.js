const { HTMLElem } = require('../../../HTMLElem/HTMLElem');

const HoldButton = (parentNode, clickable = true, coordinate) => {
  let activeIconClasses = ['fas', 'fa-circle'];
  const button = HTMLElem('i', [...activeIconClasses, 'target'], parentNode);
  let clicked = false;
  const { node } = button;
  const clickFunctions = [];
  const setCSS = (iconClasses) => {
    [activeIconClasses, iconClasses].forEach(classSet =>
      classSet.forEach(cssClass => node.classList.toggle(cssClass)),
    );
    activeIconClasses = iconClasses;
  };

  const addClickFunction = fn => clickFunctions.push(fn);

  const onClick = () => {
    if (clicked === false) {
      clickFunctions.forEach(fn => fn(coordinate));
      clicked = true;
    }
  };

  const setAsClickable = () => {
    node.classList.toggle('clickable');
    node.addEventListener('click', onClick);
  };

  if (clickable) setAsClickable();
  return { addClickFunction, coordinate, setCSS, node };
};

module.exports = {
  HoldButton,
};
