import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
const getAllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const token = Cookies.get("jwt");
        const res = await axios.get(
          "/api/user/getUserProfile",
          {
            Credentials: "include",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setAllUsers(res.data.filteredUsers);
        setLoading(false);
      } catch (error) {
        console.log("Error in getAllUsers " + error);
      }
    };
    getUsers();
  }, []);

  return [allUsers, loading];
};

export default getAllUsers;
