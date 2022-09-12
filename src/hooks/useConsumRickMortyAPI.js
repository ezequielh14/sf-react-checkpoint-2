import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const useConsumRickMortyAPI = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCharactersAPI = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      const dataCharacters = data.results;
      console.log(dataCharacters);
      setCharacters(dataCharacters);
      
    } catch (error) {
      console.log(error);
      return Swal.fire({
        title: "Error!",
        text: `Server error, please reload the web page`,
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCharactersAPI();
  }, []);
  return [characters, loading];
};
