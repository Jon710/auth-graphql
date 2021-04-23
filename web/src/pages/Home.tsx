import React from "react";
import { useUsersQuery } from "../generated/graphql";

interface Props {}

export const Home = (props: Props) => {
  const { data } = useUsersQuery({ fetchPolicy: "network-only" });

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>Users:</div>
      <ul>
        {data.users.map((u) => {
          return (
            <li key={u.id}>
              {u.email}, {u.id}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
