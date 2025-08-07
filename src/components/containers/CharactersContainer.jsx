import { useEffect, useState } from "react"
import { fetchCharacters } from "../../api"
import { CharacterList } from "../presentational/CharacterList"

export const CharactersContainer = ({ids}) => {
	const [characters, setCharacters] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setIsLoading(true)
		fetchCharacters(ids).then((data) => { // загруж список персонажей
			console.log(data);
			setCharacters(data) // присв их объекту characters
			setIsLoading(false) // измен isLoading
		})
	}, [ids]) // это делается, когда меняются id

	return <CharacterList characters={characters} isLoading={ isLoading } />
}