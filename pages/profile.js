/*

This page will be created to allow admin to create events

*/

import { useState, useContext } from "react";
import { UserContext } from "../context/ContextProvider";

export async function getStaticProps(context) {
  return {
    props: {
      protected: true,
      title: "Profile",
    },
  };
}

export default function Profile() {
  const UserService = useContext(UserContext);

  /*

  To get user information use the ---> UserService.user

  Get list of info avaliable in User class 

  example: UserService.user.first_name

  */

  return <></>;
}
