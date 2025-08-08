// src/components/presentational/LocationList.jsx
import React from "react";
import { LocationItem } from "./LocationItem";

export const LocationList = ({ locations, isLoading }) => {
  if (isLoading) {
    return <div className="loading">Загрузка локаций...</div>;
  }

  if (!locations || locations.length === 0) {
    return <div className="no-data">Локации не найдены.</div>;
  }

  return (
    <div className="locations-container">
      {locations.map((location) => (
        <LocationItem key={location.id} location={location} />
      ))}
    </div>
  );
};