import Link from "next/link";
import React from "react";
import MovieCard from "../components/MovieCard";

const Movie = async () => {
  const url = process.env.RAPID_KEY;

  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "18be337404msh6d459bbea77a779p1e1108jsn9f6500cf3a65",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  // console.log(data);

  const main_data = data.titles;

  return (
    <>
      <h1 className='movie_head'>Series and Movies</h1>
      {main_data.map((Elem) => {
        return <MovieCard key={Elem.id} {...Elem} />;
      })}
    </>
  );
};

export default Movie;
