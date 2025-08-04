import { EpisodeItem } from "./EpisodeItem"
import { Collapse } from "./Collapse"
import { CharactersContainer } from "../containers/CharactersContainer"

export const EpisodeList = ({episodes}) => {
	return (
		<div>
			{episodes.map((episode) => (
				// <EpisodeItem key={episode.id} episode={episode} />
				<Collapse
					key={episode.id}
					className="episode"
					title={episode.episode + ":" + episode.name}
					content={
						<CharactersContainer
							ids={episode.characters.map(character => {
								const id = character.split("/").pop()
								return id
						})}
					/>
				}
			/>
		))}
		</div>
	)
}