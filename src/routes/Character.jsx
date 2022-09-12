import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import CharacterInfo from "../components/CharacterInfo";

const Character = () => {
  const [character, setCharacter] = useState();
  const URL = "https://rickandmortyapi.com/api/character";
  const { id } = useParams();

  const getCharactersAPI = async () => {
    try {
      const res = await fetch(`${URL}/${id}`);
      const data = await res.json();
      setCharacter(data);
    } catch (error) {
      console.log(error);
      return Swal.fire({
        title: "Error!",
        text: `Server error, please reload the web page`,
        icon: "error",
      });
    }
  };
  useEffect(() => {
    getCharactersAPI();
  }, []);

  return (
    <>
    <main className="min-h-screen pt-32 md:pt-52">
      <div className="max-w-6xl mx-auto h-full">
        <div className="flex flex-col w-full h-full px-2">
          <CharacterInfo
            id={character?.id}
            name={character?.name}
            status={character?.status}
            gender={character?.gender}
            species={character?.species}
            image={character?.image}
            location={character?.location}
            origin={character?.origin}
          />
        </div>
      </div>
    </main>
    </>
  );
};
export default Character;
