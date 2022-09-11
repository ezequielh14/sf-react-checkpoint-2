import Characters from "../components/Characters";
import Loading from "../components/Loading";
import { useConsumRickMortyAPI } from "../hooks/useConsumRickMortyAPI";

const RickMortyAPI = () => {
  const [characters, loading] = useConsumRickMortyAPI();

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {characters.map((item) => (
        <Characters key={item.id} character={item} />
      ))}
    </div>
  );
};
export default RickMortyAPI;
