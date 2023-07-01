import { NextPage } from 'next'
import AnimeList from '@/modules/anime/list/AnimeList'

const Page: NextPage = () => {
  return <AnimeList />
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default Page
