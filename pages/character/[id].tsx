import { useState } from 'react';
import { Button, Card, Grid, Row, Text } from '@nextui-org/react';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { futuramaApi } from '../../api';
import { Layout } from '../../components/layouts';
import { FuturamaList } from '../../interfaces';
import { localFavorites } from '../../utils';

import confetti from 'canvas-confetti';

interface Props {
  character: FuturamaList
}


const CharacterPage: NextPage<Props> = ({ character }) => {

  const characterToSet = {
    id: character.id,
    name: `${character.name.first} ${character.name.last}`,
    image: character.images.main
  }

  const [isInFavorite, setIsInFavorite] = useState(  localFavorites.existInFavorite(characterToSet) );

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(characterToSet);
    setIsInFavorite(!isInFavorite);

    if(isInFavorite) return;
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 100,
      angle: -100,
      origin: {
        x: 1,
        y: 0
      }
    })

  }

  return (
    <Layout title={`${character.name.first} ${character.name.last} | Character Futurama`} image={character.images.main}>
      <Grid.Container css={{ marginTop: '5px'}} gap={ 2 }>

        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={character.images.main}
                alt={`${character.name.first} ${character.name.last}`}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card css={{ padding: '30px' }}>
            <Card.Header>
              <Row justify="space-between">
                <Text h1 transform='capitalize'>{`${character.name.first} ${character.name.last}`}</Text>
                <Button
                  color="gradient"
                  ghost={ !isInFavorite }
                  onPress={onToggleFavorite}
                >
                  { !isInFavorite ? `Add to favorite` : `Delete from favorite`}
                </Button>
              </Row>
            </Card.Header>
              
            <Card.Body>
              <Text>Age: {character.age}</Text>
              <Text>Gender: {character.gender}</Text>
              <Text>Species: {character.species}</Text>
              <Text>Occupation: {character.occupation}</Text>

              <Text h2 css={{marginTop:'15px'}}>Sayings</Text>
                <ul>
                  { 
                    character.sayings.map((saying, index) => (
                      <li key={index}><Text>{`#${index + 1} - ${saying}`}</Text></li>
                    )) 
                  }
                </ul>
            </Card.Body>
          </Card>
        </Grid>

      </Grid.Container>
    </Layout>
  )
}

export default CharacterPage;


// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  //const { data } = await  // your fetch function here 

  const character15 = [...Array(15)].map( (value, index) => (
    { params: 
      { id: `${ index + 1 }` }
    })
  );

  return {
    paths: character15,
    fallback: false
  }
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async ({params}) => {
  const { id } = params as {id: string};
  const {data} = await futuramaApi.get<FuturamaList>(`/characters/${id}`);
  return {
    props: {
      character: data
    }
  }
}