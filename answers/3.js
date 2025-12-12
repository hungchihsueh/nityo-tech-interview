let items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5,
4, 4, 7, 8, 8, 0, 1, 2, 3, 1];
// Please write down a function to console log unique value from this array.

function getUniqueNumber (items) {
  // if we want to console log the whole array of unique items
  const uniqueItems = [...new Set(items)];
  console.log(uniqueItems);

  // if we want to console log each unique item one by one
  const uniqueSet = new Set();
  items.forEach(item => {
    if (!uniqueSet.has(item)) {
      uniqueSet.add(item);
      console.log(item);
    }
  });
}