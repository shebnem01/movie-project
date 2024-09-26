import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const fetchMovie = async (pathname: string, query?: string) => {
    try {
        const res = await axios.get(`${BASE_URL}${pathname}?api_key=${API_KEY}${query}`)
        console.log(res)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}
const getTopRatedMovies = async () => {
    console.log('salam')
    return fetchMovie('/movie/top_rated', '&page=1')
}
export { getTopRatedMovies };