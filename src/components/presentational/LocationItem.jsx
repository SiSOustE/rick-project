// src/components/presentational/LocationItem.jsx
import React, { useState } from "react";
import { fetchCharacters } from "../../api"; // Для загрузки резидентов
import { CharacterList } from "./CharacterList"; // Для отображения резидентов

export const LocationItem = ({ location }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [residents, setResidents] = useState([]);
  const [isLoadingResidents, setIsLoadingResidents] = useState(false);

  const toggleResidents = async () => {
    if (!isOpen) {
      // Загружаем резидентов только при первом открытии
      if (residents.length === 0 && location.residents.length > 0) {
        setIsLoadingResidents(true);
        try {
          // Извлекаем ID из URL резидентов
          const residentIds = location.residents.map(url =>
            url.split("/").pop()
          );
          const residentData = await fetchCharacters(residentIds);
          // fetchCharacters может вернуть массив или объект, если один элемент
          const residentArray = Array.isArray(residentData) ? residentData : [residentData];
          setResidents(residentArray);
        } catch (error) {
          console.error("Ошибка при загрузке резидентов:", error);
          setResidents([]);
        } finally {
          setIsLoadingResidents(false);
        }
      }
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="location-item">
      <div className="location-header" onClick={toggleResidents}>
        <h3 className="location-name">
          {location.name} {isOpen ? '[-]' : '[+]'}
        </h3>
        <p className="location-type-dimension">
          <span className="location-type">{location.type}</span> - <span className="location-dimension">{location.dimension}</span>
        </p>
      </div>
      {isOpen && (
        <div className="location-details">
          <h4>Резиденты:</h4>
          {isLoadingResidents ? (
            <div className="loading">Загрузка резидентов...</div>
          ) : residents.length > 0 ? (
            <CharacterList characters={residents} isLoading={false} />
          ) : (
            <p>Нет доступных данных о резидентах.</p>
          )}
        </div>
      )}
    </div>
  );
};