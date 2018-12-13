const { ButtonGrid } = require('../ButtonGrid/ButtonGrid');
const { HTMLElem } = require('../HTMLElem/HTMLElem');

const BottomDisplay = ((id) => {
  const container = HTMLElem('div', []);
  const { node } = container;
  node.id = id
  const grid = ButtonGrid(10, 10, false);
  node.appendChild(grid.node);
  return { grid, node };
})('BottomDisplay');

module.exports = {
  BottomDisplay,
};
