import { useEffect, useState } from "react";
import { fetchEpisodes, fetchCharacters } from "../api";
import "./Rick.css";

export const Rick = () => {
  const [episodes, setEpisodes] = useState([]); // переменная для списка эпизодов
  const [charactersByEpisodes, setCharactersByEpisodes] = useState({}); //объект → ключ - id эпизода; value - массив персонажей
  const [isLoadingByEpisodes, setIsLoadingByEpisodes] = useState({});

  useEffect(() => {
    fetchEpisodes().then((data) => { // список эпизодов (массив / 20 эл)
      console.log(data);
      setEpisodes(data);
    });
  }, []);

  const handleEpisodeClick = (episode) => {
    const ids = episode.characters.map((character) => {
      const id = character.split("/").pop();
      return id;
    });

    setIsLoadingByEpisodes({ ...isLoadingByEpisodes, [episode.id]: true });

    fetchCharacters(ids).then((data) => { // загруз спис персонаж
      console.log(data);
      setCharactersByEpisodes({ ...charactersByEpisodes, [episode.id]: data }); // получ данные персонажей
      setIsLoadingByEpisodes({ ...isLoadingByEpisodes, [episode.id]: false });
    }); // измен знач IsLoading
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Alive":
        return "character-alive";
      case "Dead":
        return "character-dead";
      default:
        return "character-unknown";
    }
  };

  return (
    <div>
      {episodes.map((episode) => {
        return (
          <div
            key={episode.id}
            className="episode"
            onClick={() => handleEpisodeClick(episode)}
          >
            <h3>{episode.episode + ":" + episode.name}</h3>
            <div className="characters-container">
              {isLoadingByEpisodes[episode.id] && (
                <div className="loading">Загрузка...</div>
              )}
              {charactersByEpisodes[episode.id]?.map((character) => {
                return (
                  <div
                    key={episode.id + ":" + character.id}
                    className={"character " + getStatusClass(character.status)}
                  >
                    <div className="character-left">
                      <img src={character.image} alt={character.name} />
                    </div>
                    <div className="character-right">
                      <h3>{character.name}</h3>
                      <div>Вид: {character.species}</div>
                      <div>Пол: {character.gender}</div>
                      <div>Локация: {character.location.name}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};