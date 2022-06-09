export const findPlayerIndexById = (array, id) => {
  let newPlayerIndex = null;

  array.forEach((item, index) => {
    if (item._id === id) {
      newPlayerIndex = index;
    }
  });

  return newPlayerIndex;
};

export const diffSubstitution = (array, i, j) => {
  let newPlayer = { ...array[i], already: false };
  array[i] = { ...array[j], already: true };
  array[j] = newPlayer;

  return array;
};

export const sameSubstitution = (array, i, j) => {
  let newPlayer = { ...array[i], already: true };
  array[i] = { ...array[j], already: true };
  array[j] = newPlayer;

  return array;
};