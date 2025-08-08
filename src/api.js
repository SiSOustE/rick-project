export const fetchEpisodes = () => {
  return fetch("https://rickandmortyapi.com/api/episode")
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    });
};

export const fetchLocations = () => {
  return fetch("https://rickandmortyapi.com/api/location")
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    });
};

// const sleep = (ms) => {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// };

export const fetchCharacters = async (ids) => {
  // await sleep(500); // Опционально: задержка для демонстрации загрузки
  if (!ids || ids.length === 0) return Promise.resolve([]);
  return fetch(
    `https://rickandmortyapi.com/api/character/${ids.join(",")}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  });
};