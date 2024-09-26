'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  popularity: number;
  video: boolean;
}

const FeaturedMovie = ({ topRatedMovies }: { topRatedMovies: Movie[] }) => {
    console.log(topRatedMovies)
    return (
        <Carousel>
            <CarouselContent>
                {topRatedMovies.slice(12,18)?.map((movie) => (
                    <CarouselItem>
                        <div className="h-[800px] relative">
                            <Image
                                 unoptimized
                                 src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                 fill
                                 alt={movie.title}
                                 className="object-cover"
                              
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    )
}

export default FeaturedMovie