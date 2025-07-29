/* Get all episodes
You can access the list of episodes by using the /episode endpoint.*/
export const fetchEpisodes = () => {
    return fetch('https://rickandmortyapi.com/api/episode')
		.then((response) => 
			response.json())
		.then((data) => {
    return data.results // Получ поле  results
  })
}

// get multiple characters by adding an array of ids as parameter: /character/[1,2,3] or /character/1,2,3

export const fetchCharacters = (ids) => { 
    return fetch( 
			`https://rickandmortyapi.com/api/character/${ids.join(',')}`) // массив → список
			}