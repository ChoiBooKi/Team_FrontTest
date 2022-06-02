import { players } from "./barcelona";

const formatedPlayers = players.map((item) => {
  return { ...item, selected: false };
});

export const initialState = {
  startingLineup: formatedPlayers
  // subs: subs
};
