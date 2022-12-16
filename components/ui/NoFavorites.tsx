import { Container, Text, Image } from '@nextui-org/react';

const NoFavorites = () => {
  return (
    <Container css={{
      display:'flex',
      flexDirection:'column',
      height:'calc(100vh - 100px)',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center'
    }}>
      <Text h1>There are no favorites</Text>
      <Image
        src='/futurama_favorites.webp'
        alt='No Favorites'
        css={{opacity:0.3}}
      />
    </Container>
  )
}

export default NoFavorites;