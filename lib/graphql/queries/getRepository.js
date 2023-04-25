import {gql} from 'graphql-request'

export default gql`
query{

    user(login: "MNKagiri"){

        repositories(first:10){
           nodes{
            name
            url
           }
        }
    }
}

`