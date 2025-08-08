// src/components/containers/LocationsContainer.jsx
import React, { useEffect, useState } from "react";
import { fetchLocations } from "../../api";
import { LocationList } from "../presentational/LocationList";

export const LocationsContainer = () => {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchLocations()
      .then((data) => {
        setLocations(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке локаций:", error);
        setLocations([]);
        setIsLoading(false);
      });
  }, []);

  return <LocationList locations={locations} isLoading={isLoading} />;
};