import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const useConsumRickMortyAPI = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [preDisable, setPreDisable] = useState("");
  const [nextDisable, setNextDisable] = useState("");

  useEffect(() => {
    getCharactersAPI
  },[])

  const getCharactersAPI = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      paginationCharacters(data.info);
      setCharacters([...data.results]);
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
  const paginationCharacters = (info) => {
    if (info.prev == null) {
      setPreDisable("disable");
    } else {
      setPreDisable("");
    }

    if (info.next == null) {
      setNextDisable("disable");
    } else {
      setNextDisable("");
    }
  };
  return [characters, loading, preDisable, nextDisable];
};
