import React from "react";
import { Link } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacters";
import "./CharacterList.css";

export default function CharacterList() {
  const { error, loading, data } = useCharacters();

  console.log(error, loading, data);

  if (loading) {
    return <div>spinner...</div>;
  }

  if (error) {
    return <div>something went wrong...</div>;
  }
  //   data.error
  //   data.loading
  //   data.data
  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`}>
            <img src={character.image} />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}
