const items = [
    { id: 1, name: "apple", price: 1.75, categoryId: 1, inventory: 100 },
    { id: 2, name: "banana", price: 0.25, categoryId: 1, inventory: 100 },
    { id: 3, name: "orange", price: 1.0, categoryId: 1, inventory: 100 },
    { id: 4, name: "broccoli", price: 3.0, categoryId: 2, inventory: 100 },
    { id: 5, name: "cucumber", price: 1.0, categoryId: 2, inventory: 100 },
    { id: 6, name: "milk", price: 5.75, categoryId: 3, inventory: 100 },
    { id: 7, name: "cheddar cheese", price: 4.0, categoryId: 3, inventory: 100 },
    { id: 8, name: "sourdough loaf", price: 5.5, categoryId: 4, inventory: 100 },
  ];
function getItemNames(items) {
  return items.map( item => item.name);
}
function getItemPrices(items) {
  return items.map( item => item.price);
}
function findItemById(itemId, items) {
  return items.find(item => item.id === itemId);
}
function mostExpensiveItem(items) {
  let maxPriceItem = items[0];
for (let i = 1; i < items.length; i++) {
  if (items[i].price > maxPriceItem.price) {
  maxPriceItem = items[i];
  }
  }
  return maxPriceItem;
}
function leastExpensiveItem(items) {
  let leastExpensive = items[0];

  for (let i = 1; i < items.length; i++) {
  if (items[i].price < leastExpensive.price) {
leastExpensive = items[i];
}
}
 return leastExpensive;
}
function calculateInventory(items) {
  let totalInventory = 0;

  for (let i = 0; i < items.length; i++) {
      totalInventory += items[i].inventory;
  }

  return totalInventory;
}
console.log(getItemNames(items));
console.log(getItemPrices(items));
console.log(findItemById(2, items));
console.log(mostExpensiveItem(items));
console.log(leastExpensiveItem(items));
console.log(calculateInventory(items));