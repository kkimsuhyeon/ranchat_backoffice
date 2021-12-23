import { gql } from "@apollo/client";

import { BaseType } from "./base";

export interface UserType extends BaseType {
  __typename: "User";
  id: string;
  email: string;
  fullName: string;
  bio: "W" | "M" | undefined;
  createAt: Date;
  updatedAt: Date;
}

export const QUERY_REQUEST_USER_LIST = gql`
  query users {
    users {
      id
      email
      fullName
      bio
      createdAt
      updatedAt
    }
  }
`;

export const MUTATION_REQUEST_CREATE_USER = gql`
  mutation createUser(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $bio: Bio
  ) {
    createUser(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      bio: $bio
    )
  }
`;
