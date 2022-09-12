import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const useConsumUsersAPI = () => {
    const [users, setUsers] = useState([]);
  
    const getUsersAPI = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
        
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
      getUsersAPI();
    }, []);
    return [users];
}