import Characters from "../components/Characters";
import Loading from "../components/Loading";
import { useConsumRickMortyAPI } from "../hooks/useConsumRickMortyAPI";

const RickMortyAPI = () => {
  const [characters, loading] = useConsumRickMortyAPI();

  if (loading) {
    return (
    <div className="container min-h-screen pt-32 pb-16 px-4 mx-auto">
      <div className="grid grid-cols-1 pt-5 gap-x-2 gap-y-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
      {Array(20).fill().map((item, index) => (
        <Loading key={index} />
      ))}
      </div>
    </div>
    );
  }

  return (
      <div className="container text-center min-h-screen pt-32 pb-16 px-4 mx-auto">
        <h1 className="text-cyan-300/80 text-2xl md:text-5xl font-bold">
						Cards
					</h1>
        <div className="grid grid-cols-1 pt-5 gap-x-2 gap-y-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
          {characters.map((item) => (
            <Characters key={item.id} character={item} />
          ))}
        </div>
        
      </div>
  );
};
export default RickMortyAPI;
