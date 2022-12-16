import { NextPage, GetStaticProps } from 'next';
import { futuramaApi } from '../api';
import { Grid } from '@nextui-org/react';
import { Layout } from '../components/layouts';
import { FuturamaList, SmallFuturama } from '../interfaces';
import { FuturamaCard } from '../components/futurama';


type Props = {
  characters: SmallFuturama[]
}


const HomePage: NextPage<Props> = ({characters}) => {
  
  return (
    <Layout title='Characters Futurama'>
      { characters.length > 0 && 
        <Grid.Container gap={2} justify='center'>
          {
            characters.map(item => (
              <FuturamaCard
                key={item.id} id={item.id}
                name={item.name} age={item.age}
                image={item.image}
              />
            ))
          }
        </Grid.Container>
      }
    </Layout>
  )
}

export default HomePage;

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  const {data} = await futuramaApi.get<FuturamaList[]>('/characters');

  const characters: SmallFuturama[] = data.map(character => (
    {
      name: `${character.name?.first ?? ''} ${character.name?.last ?? ''}`,
      age: character?.age ?? '',
      image: character.images?.main ?? '',
      id: character.id
    }
  ))
  
  return {
    props: {
      characters: characters
    }
  }
}