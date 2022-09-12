import { useState } from "react";
import Swal from "sweetalert2";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coment, setComent] = useState("");
  const [data, setData] = useState({});

  const resetForm = () => {
    setName("");
    setEmail("");
    setComent("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      name,
      email,
      coment,
    };
    resetForm();

    setData(newData);

    return Swal.fire({
      title: "Success!",
      icon: "success",
      html:
        `<h5>Name: ${data.name}</h5>` +
        `<h5>Email: ${data.email}</h5>` +
        `<p>Coments: ${data.coment}</p>`,
      confirmButtonText: "Cool",
    });
  };
  return (
    <main className="min-h-screen bg-lims-700 pt-32 md:pt-52">
      <div className="max-w-6xl mx-auto h-full">
        <div className="flex flex-col justify-center items-center w-full gap-2 h-full">
          <h1 className="text-lime-400/80 text-2xl md:text-5xl font-bold">
            Contact Form
          </h1>
          <form
            className="grid grid-cols-1 gap-4 w-full px-5 md:px-0 md:w-1/2 mt-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required=""
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="md-6">
              <label
                htmlFor="email-address-icon"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Email
              </label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input
                  type="email"
                  id="email-address-icon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                  required="true"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="coment"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Coments
              </label>
              <textarea
                type="text"
                id="repeat-password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light resize-none"
                name="coment"
                required="true"
                value={coment}
                onChange={(e) => setComent(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
export default Form;
