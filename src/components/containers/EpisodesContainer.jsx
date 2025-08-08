import { useEffect, useState } from "react"
import { fetchEpisodes } from "../../api"
import { EpisodeList } from "../presentational/EpisodeList"

export const EpisodesContainer = () => {
	const [episodes, setEpisodes] = useState([])
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		fetchEpisodes().then((data) => {
			setEpisodes(data)
			setIsLoading(false);
		}).catch(error => {
			console.error("Ошибка загрузки эпизодов:", error);
			setEpisodes([]);
			setIsLoading(false);
		})
	}, [])

	if (isLoading) {
		return <div className="loading">Загрузка эпизодов...</div>;
	}

	if (!episodes || episodes.length === 0) {
		return <div className="no-data">Эпизоды не найдены.</div>;
	}

	return <EpisodeList episodes={episodes} />
}