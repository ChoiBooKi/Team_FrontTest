import { players } from "./barcelona";

const formatedPlayers = players.map((item) => {
  return { ...item, selected: false };
});

export const initialState = {
  startingLineup: formatedPlayers
  // subs: subs
};

//여기서 선택된 선수 아닌선수 받아옴