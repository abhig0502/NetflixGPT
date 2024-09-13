import React from "react";

export const getUserNameFromLocalStorage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
//   console.log({ user });
  return user?.name;
};

