import { Link } from "react-router-dom";

const CharacterInfo = ({
  id,
  name,
  status,
  gender,
  species,
  image,
  location,
  origin,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-violet-50/20 rounded shadow shadow-violet-500/20 overflow-hidden">
      <div className="relative">
        <img className="object-cover w-full h-full" src={image} alt={name} />
      </div>
      <div className="p-4">
        <p className="text-4xl text-white font-semibold opacity-90">{name}</p>

        <p className="opacity-50 text-white text-lg">Status</p>
        <p className="text-xl text-white opacity-80">{status}</p>
        <p className="opacity-50 text-white text-lg">Specie</p>
        <p className="text-xl text-white opacity-80">{species}</p>
        <p className="opacity-50 text-white text-lg">Gender</p>
        <p className="text-xl text-white opacity-80">{gender}</p>
        <p className="opacity-50 text-white text-lg">Origin</p>
        <p className="text-xl text-white opacity-80">{origin?.name}</p>
        <p className="opacity-50 text-white text-lg">Location</p>
        <p className="text-xl text-white opacity-80">{location?.name}</p>
        <Link
          className=" flex inline-flex align-bottom justify-rigth p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-cyan-700 from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
          to={`/rickmorty`}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Back 
            <svg
              className="w-6 h-6 ml-2 inline"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};
export default CharacterInfo;
