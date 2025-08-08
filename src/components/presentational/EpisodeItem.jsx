import React, { useMemo, useState } from "react";
import { CharactersContainer } from "../containers/CharactersContainer";

export const EpisodeItem = ({ episode }) => {
	const [open, setOpen] = useState(false);

	const ids = useMemo(() => {
		if (!episode?.characters) return [];
		return episode.characters.map((characterUrl) => {
			const parts = characterUrl.split("/");
			return parts[parts.length - 1];
		});
	}, [episode?.characters]);

	const toggleCharacters = () => {
		setOpen(!open);
	};

	return (
		<div className="episode">
			<h3 onClick={toggleCharacters}>
				{episode.episode}: {episode.name} {open ? '[-]' : '[+]'}
			</h3>
			<div className="episode-info">
				Дата выхода: {episode.air_date}
			</div>
			{open && <CharactersContainer ids={ids} />}
		</div>
	);
};