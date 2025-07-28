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
  