import React from "react";
import { useParams } from "react-router";
import User from "../../model/User.js";
import { FirstName, Message, Title } from "./index.styles.js";

function UserMessage({ message }) {
  const params = useParams();
  const firstName = new User(parseInt(params.userId)).getFirstName();
  console.log("first Name:", firstName);
  return (
    <>
      <Title>
        Bonjour <FirstName>{firstName}</FirstName>
      </Title>
      <Message>
        <span>{message}</span>
      </Message>
    </>
  );
}

export default UserMessage;
