 import {GraphQLClient} from 'graphql-request'

const githubEndpoint = process.env.GITHUB_ENDPOINT
const token = process.env.GITHUB_TOKEN
const authorization = `Bearer ${token}`

export default new GraphQLClient(githubEndpoint, {
    headers: {...(token && {authorization})} 
}) 



