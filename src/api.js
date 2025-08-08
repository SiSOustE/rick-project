// src/api.js
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

export const fetchCharacters = async (ids) => {
  // await sleep(1000); // Опционально: оставьте для демонстрации загрузки
  return fetch(
    `https://rickandmortyapi.com/api/character/${ids.join(",")}`
  ).then((response) => response.json());
};

// --- НОВАЯ ФУНКЦИЯ ---
export const fetchLocations = () => {
  return fetch("https://rickandmortyapi.com/api/location")
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    });
};