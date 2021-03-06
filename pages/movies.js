import React from "react";
import Menu from "../components/Menu";
import Link from "next/link";
import movie from "./movie/[id]";

export default function movies(props) {
    const { movies } = props;

    console.log(movies)

    return (
        <div>
            <Menu />
            <h1 style={{ textAlign: "center" }}>This is the movie's page.</h1>
            {movies.map((movie, index) => (
                <Link key={index} href="/movie/[movie]" as={`/movie/${movie.id}`}>
                    <a style={{ marginLeft: 20 }}>{movie.name}</a>
                </Link>
            ))}
        </div>
    );
}

movies.getInitialProps = () => {
    const movies = [
        {
            id: "joker",
            name: "Joker",
        },
        {
            id: "spiderman",
            name: "Spider-Man",
        },
        {
            id: "batman",
            name: "Batman",
        },
    ];

    return { movies };
};
