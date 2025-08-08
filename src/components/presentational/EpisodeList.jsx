import React from "react";
import { EpisodeItem } from "./EpisodeItem";

export const EpisodeList = ({ episodes }) => {
	return (
		<div>
			{episodes.map((episode) => (
				<EpisodeItem key={episode.id} episode={episode} />
			))}
		</div>
	);
};