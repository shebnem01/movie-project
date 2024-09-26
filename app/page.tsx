import { getTopRatedMovies } from "@/services/movie";
import FeaturedMovie from "./_components/Featured-movie";


export default async function Home() {
  const [ { results: topRatedMovies }] = await Promise.all([getTopRatedMovies()]);

  return (
  <div>
  <FeaturedMovie topRatedMovies={topRatedMovies}/>
  </div>
  );
}
