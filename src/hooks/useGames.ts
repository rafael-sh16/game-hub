import useData from "./useData";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string
    parent_platforms: { platform: Platform }[]  // design issue of this API data: parent_platforms is an array of objects that have a plaform property
    metacritic: number;
}

const useGames = () => useData<Game>('/games');

export default useGames;