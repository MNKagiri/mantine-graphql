import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Card, Grid, MantineProvider } from '@mantine/core'
import graphql from '../lib/graphql'
import getRepository from '../lib/graphql/queries/getRepository'
import { GetServerSideProps } from 'next'


export default function Home({data}: {data:any}) {
  return (
    <div style={{height: '100vh', background: 'linear-gradient(black, #0C2340)'}}>

    
     <Grid>

       <>
         {data?.map((repository: any) => (
                <Grid.Col span={4}>
          <Card  color = 'grey'>
          <Card.Section  color = 'black'component="a" href = {repository.url}>
                {repository.name}
        </Card.Section> 
          </Card>
          </Grid.Col>
        ) )} 
        
        </> 
       
     </Grid>

    </div>
  )
}

export async function getServerSideProps() {

  type data = {
    user:{
      repositories:{
        nodes: [{name: string, url:string}]
      }
    }
  }
  const  repos:data= await graphql.request(getRepository)
/*   const actualdata = repos?.data?.user?.repositories?.nodes
 */
  console.log(repos.user.repositories.nodes) 
 /*  const re_repo = JSON.parse(repo)
  console.log(re_repo) */

  

  return {
    props:{
      data: repos.user.repositories.nodes
    }
    }
}
