import { useEffect, useState } from "react"
import { fetchCharacters } from "../../api"
import { CharacterList } from "../presentational/CharacterList"

export const CharactersContainer = ({ids}) => {
	const [characters, setCharacters] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		if (!ids || ids.length === 0) {
			setCharacters([]);
			setIsLoading(false);
			return;
		}
		setIsLoading(true)
		fetchCharacters(ids).then((data) => {
			// API может вернуть объект, если запрашивался один персонаж
			const dataArray = Array.isArray(data) ? data : [data];
			setCharacters(dataArray)
			setIsLoading(false)
		}).catch(error => {
			console.error("Ошибка загрузки персонажей:", error);
			setCharacters([]);
			setIsLoading(false);
		})
	}, [ids])

	return <CharacterList characters={characters} isLoading={ isLoading} />
}