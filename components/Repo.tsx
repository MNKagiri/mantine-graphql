import {useQuery, gql} from "@apollo/client"
import client from '.../lib/graphql'
import { Card, Grid } from '@mantine/core'

const GET_USER_REPOSITORIES = gql`
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
`;


const userRepositories = ({username}: {username:string}) => {

    const {loading, error, data}  = useQuery(GET_USER_REPOSITORIES,  {
        variables: {username}
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p> Error : {error.message}</p>

    const repositories = data?.user?.repositories?.nodes || []
    return(
        <>
        {repositories.map((repo:any) => (


    <Card shadow ="sm">
        <Card.Section component="a" href = {repo.url}>
                {repo.name}
        </Card.Section> 
            </Card>
        ) )} 
       
        </>
    )
}