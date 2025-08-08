import React from "react";
import { CharacterItem } from "./CharacterItem";

export const CharacterList = ({ characters, isLoading }) => {
	if (isLoading) {
		return <div className="loading">Загрузка персонажей...</div>;
	}

	if (!characters || characters.length === 0) {
		return <div className="no-data">Персонажи не найдены.</div>;
	}

	return (
		<div className="characters-container">
			{characters.map((character) => (
				<CharacterItem key={character.id} character={character} />
			))}
		</div>
	);
};