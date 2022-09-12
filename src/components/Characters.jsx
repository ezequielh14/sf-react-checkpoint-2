import { Link } from "react-router-dom";

const Characters = ({ character }) => {
  const { id, name, image, species } = character;

  return (
    <>
      <div className="mx-auto max-w-sm bg-white rounded-lg border border-gray-200 shadow-md transform-gpu transition hover:shadow-xl hover:z-10 hover:scale-105 dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src={image} alt={`image-${name}`} />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {species}
          </p>
          <Link
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            to={`character/${id}`}
            key={id}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Character Info
              <svg
                className="w-6 h-6 inline"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </Link>
          
        </div>
      </div>
    </>
  );
};
export default Characters;
