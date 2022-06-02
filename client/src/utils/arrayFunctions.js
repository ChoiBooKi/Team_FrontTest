export const findPlayerIndexById = (array, id) => {
  let newPlayerIndex = null;

  array.forEach((item, index) => {
    if (item.id === id) {
      newPlayerIndex = index;
    }
  });

  return newPlayerIndex;
};

export const makeSubstitution = (array, i, j) => {
  let newPlayer = { ...array[i], selected: false };
  array[i] = { ...array[j], selected: false };
  array[j] = newPlayer;

  return array;
};
