import shoppingList from './shopping-list.js';
import store from './store.js';
import item from './item.js';

const main = function () {
  
  shoppingList.bindEventListeners();
  shoppingList.render();
};

store.addItem('bananas');
store.addItem('apples');
store.addItem('rice');

console.log(store.items);
// grab the id of the first store item (bananas)
let id = store.items[0].id;
// delete this item from the store
store.findAndDelete(id);
shoppingList.render();

$(main);