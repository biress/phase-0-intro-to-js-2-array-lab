// Define the initial cats array
let cats = ["Milo", "Otis", "Garfield"];

// 1. Destructively prepend a cat to the array
function destructivelyPrependCat(name) {
  cats.unshift(name); // This modifies the original cats array
}

// 2. Destructively remove the last cat from the array
function destructivelyRemoveLastCat() {
  cats.pop(); // This modifies the original cats array
}

// 3. Destructively remove the first cat from the array
function destructivelyRemoveFirstCat() {
  cats.shift(); // This modifies the original cats array
}

// 4. Destructively append a cat to the array
function destructivelyAppendCat(name) {
  cats.push(name); // This modifies the original cats array
}

// 5. Append a cat to the array (returns a new array)
function appendCat(name) {
  return [...cats, name]; // This doesn't modify the original array
}

// 6. Prepend a cat to the array (returns a new array)
function prependCat(name) {
  return [name, ...cats]; // This doesn't modify the original array
}

// 7. Remove the last cat (returns a new array)
function removeLastCat() {
  return cats.slice(0, -1); // This doesn't modify the original array
}

// 8. Remove the first cat (returns a new array)
function removeFirstCat() {
  return cats.slice(1); // This doesn't modify the original array
}

// Export all functions
module.exports = {
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  destructivelyAppendCat,  // Include this function
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat
};
