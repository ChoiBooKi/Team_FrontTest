export const findPlayerIndexById = (array, id) => {
  let newPlayerIndex = null;

  array.forEach((item, index) => {
    if (item._id === id) {
      newPlayerIndex = index;
    }
  });

  return newPlayerIndex;
};
//모달에서 변경하는 로직
export const diffSubstitution = (formation, array, i, j) => {
  let newPlayer = { ...array[i], already: false , select:'----'};
  array[i] = { ...array[j], already: true, select: formation.positions[i].name };
  array[j] = newPlayer;
  return array;
};
//선수들끼리
export const sameSubstitution = (formation, array, i, j) => {
  let newPlayer = { ...array[i], already: true, select: formation.positions[j].name };
  array[i] = { ...array[j], already: true, select: formation.positions[i].name };
  array[j] = newPlayer;
  // console.log(formation.positions[i].name)//먼저 선택된 애
  // console.log(formation.positions[j].name)//교체할 애
  return array;
};