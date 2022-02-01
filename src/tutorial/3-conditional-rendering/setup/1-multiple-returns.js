import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  const getUser = async () => {
    const response = await fetch(url);
    const user = await response.json();
    const { login } = user;
    setUser(login);
    setIsLoading(false);
    console.log(user);
  };

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <h2>Error...</h2>
      </>
    );
  }

  return (
    <>
      <h2> {user} </h2>
    </>
  );
};

export default MultipleReturns;
