import { Typography } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";

export const UsersList = () => {
  const [users, setusers] = useState(null);
  const [load, setload] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const token = localStorage.getItem("token");
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        url: "https://localhost:8090/user/",
      };
      try {
        const { data } = await Axios(options);
        setusers(data);
        console.log(data);

        setload(false);
      } catch (e) {
        console.log(e);
      }
    };
    getUsers();
  }, []);

  return (
    <div>
      {!load &&
        users.map((user) => {
          return (
            <>
              <h1>{user.firstName}</h1>
            </>
          );
        })}
    </div>
  );
};
