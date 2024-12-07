import { Play } from "@phosphor-icons/react";

export default function CardFilm({ index, movie }) {
    return (
        <div key={index} className="w-40 md:w-40 xl:w-56">
            <div
                className="relative overflow-hidden rounded-lg shadow-xl transform transition duration-300 hover:scale-102 h-60 lg:h-80"
            >
                <div className="group cursor-pointer">
                    <a href={`/film/${movie.id}`}>
                        <img
                            src={`${process.env.REACT_APP_PANEL_WEBSITE}/storage/` + movie.image}
                            alt={movie.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div
                            className="absolute top-2 right-2 bg-primary text-white text-sm font-medium py-1 px-3 rounded-lg shadow-lg">
                            {movie.status === "Up-Coming" ? "Upcoming" : movie.status.replace("-", " ")}
                        </div>
                        <div
                            className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Play
                                size={46}
                                className="rounded-full p-2 border border-white text-white"
                            />
                        </div>
                    </a>
                </div>
            </div>
            <h1 className="text-md md:text-lg font-medium text-white mt-4 text-center truncate">
                {movie.title}
            </h1>
            <h1 className="text-sm md:text-md font-medium text-white mt-2 text-center bg-primary rounded-md py-1">
                {movie.rating}
            </h1>
        </div>
    );
}

