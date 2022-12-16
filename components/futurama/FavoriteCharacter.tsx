import { Grid, Card, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'


interface FavoriteCharacterProps {
  name: string,
  image: string,
  id: number
}

interface Props {
  favoriteCharacters: FavoriteCharacterProps[]
}

const FavoriteCharacter = ({favoriteCharacters}: Props ) => {

  const router = useRouter();

  const goToCharacter = (id: number) => {
    router.push(`/character/${id}`);
  }


  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
    {
      favoriteCharacters.map( character => (
        <Grid xs={6} sm={3} md={3} xl={2} key={character.id}>
          <Card isHoverable isPressable css={{padding: 10}} onPress={()=> goToCharacter(character.id)}>
            <Card.Image
              src={character.image}
              alt={character.name}
            />
            <Text>{character.name}</Text>
          </Card>
        </Grid>
      ))
    }
  </Grid.Container>
  )
}

export default FavoriteCharacter