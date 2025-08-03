export const fetchEpisodes = () => {
  return fetch("https://rickandmortyapi.com/api/episode")
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    });
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const fetchCharacters = async (ids) => { // список персонажей в эпизоде / массив
  await sleep(1000);
  return fetch(
    `https://rickandmortyapi.com/api/character/${ids.join(",")}`
  ).then((response) => response.json());
};