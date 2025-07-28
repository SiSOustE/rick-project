import { useEffect, useState } from "react"
import { fetchEpisodes } from "../api"
import "./Rick.css"

export const Rick = () => {
	const [episodes, setEpisodes] = useState([])
	useEffect(() => {
		fetchEpisodes().then((data) => {
			console.log(data)
			setEpisodes(data)
		}); // массив 20 эл. → список эпизодов
	}, [])

		return (
			<div>
			{episodes.map((episode) => {
				return (
					<div key={episode.id} className="episode">
						<h1>{episode.name}</h1>
					<p>{episode.air_date}</p>
				</div>
			) 
		})}
		</div>
	)
}