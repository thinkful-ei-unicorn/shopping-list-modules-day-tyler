import item from './item.js';

const items = [];
let hideCheckedItems = false;

function findById(id){
  let found = items.find(item => {
    return item.id === id;
  });
  return found;
}

function addItem(name){
  try{
    item.validateName(name);
    let newItem = item.create(name);
    items.push(newItem);
  }
  catch(e){
    console.log(`Cannot add item: ${e.message}`);
  }
}

function findAndToggleChecked(id){
  this.findById(id).checked = !this.findById(id).checked;
}

function findAndUpdateName(id, newName){
  try{
    item.validateName(newName);
    findById(id).name = newName;
  }
  catch(e){
    console.log(`Cannot add item: ${e.message}`);
  }
}

function findAndDelete(id){
  let thisItem = findById(id);
  let index = items.findIndex(item =>{
    return item === thisItem;
  });
  items.splice(index, 1);
}

function toggleCheckedFilter(){
  this.hideCheckedItems = !this.hideCheckedItems;
}

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};