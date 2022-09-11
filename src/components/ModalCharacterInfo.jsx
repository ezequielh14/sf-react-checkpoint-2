const ModalCharacterInfo = ({character}) => {
  const { name, status, species, type, gender, origin, location } = character;
  const typeDisable = type === "" ? "disable" : "" 
  return (
  <div
    id="characterModal"
    tabIndex={-1}
    aria-hidden="true"
    className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
  >
    <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
      {/* Modal content */}
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        {/* Modal header */}
        <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Character Info
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="characterModal"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        {/* Modal body */}
        <div className="p-6 space-y-6">
          <h5 className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            {name}
          </h5>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Status: {status}
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Specie: {species}
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 ${typeDisable}">
            Type: {type}
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Gender: {gender}
          </p><p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Origin: {origin.name}
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Location: {location.name}
          </p>
        </div>
        {/* Modal footer */}
        <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
          <button
            data-modal-toggle="characterModal"
            type="button"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  )
};
export default ModalCharacterInfo;
