import { NextPage } from 'next'
import gql from 'graphql-tag'
import client from '../../apollo-client'
import { AnimeListTypes } from '@/types/AnimeListTypes'
import Navbar from "@/components/navbar/Navbar"
import Temp from "@/layout/Temp";

const GET_ANIME = gql`
      query AnimeList {
        Page {
          media(sort: POPULARITY_DESC) {
            coverImage {
              large
              color
            }
            title {
              romaji
              english
              native
              userPreferred
            }
            type
            popularity
            averageScore
            id
            characters(sort: FAVOURITES_DESC) {
              nodes {
                image {
                  large
                }
                name {
                  full
                }
                id
              }
            }
          }
        }
      }
    `

const Page: NextPage<AnimeListTypes> = ({ data }) => {
  console.log(data)
  return (
      <Temp title={'Anime List'} description={'Your Anime List'}>
          <Navbar />

      </Temp>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_ANIME,
  })
  return {
    props: { data },
  }
}

export default Page
