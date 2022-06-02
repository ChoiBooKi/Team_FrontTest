const sofaApi = "https://api.sofascore.com/api/v1/";

export function formatFlag(code) {
  let lower = code.toLowerCase();
  return `https://www.sofascore.com/static/images/flags/${lower}.png`;
}

export function getPlayerImage(id) {
  return `${sofaApi}player/${id}/image`;
}

export function getClubImage(id) {
  return `${sofaApi}team/${id}/image`;
}
