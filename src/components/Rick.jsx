import { useEffect, useState } from "react"
import { fetchEpisodes, fetchCharacters } from "../api"
import "./Rick.css"

export const Rick = () => {
	const [episodes, setEpisodes] = useState([])
	useEffect(() => {
		fetchEpisodes().then((data) => {
			console.log(data)
			setEpisodes(data)
		}); // массив 20 эл. → список эпизодов
	}, [])

const handleEpisodeClick = (episode) => {
	const ids = episode.characters.map((character) => {
		const id = character.split("/").pop()
		return id
	})
	fetchCharacters(ids).then((data) => {
		console.log(data);
	})
}

		return (
			<div>
			{episodes.map((episode) => {
				return (
					<div 
						key={episode.id}
						className="episode"
						onClick={() => handleEpisodeClick(episode)}
					>
						<h3>{episode.name}</h3>
					</div>
					) 
				})}
			</div>
	)
}