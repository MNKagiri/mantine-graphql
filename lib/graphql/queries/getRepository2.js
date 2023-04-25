import {gql } from "@apollo/client";

const getUserRepositories= gql`

query GetUserRepositories($username: String!) {
    user(login: $username) {
      repositories(first: 10) {
        nodes {
          name
          url
        }
      }
    }
  }
`


export default getUserRepositories