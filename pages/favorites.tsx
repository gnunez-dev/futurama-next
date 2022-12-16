import { useEffect, useState } from 'react';
import { NextPage } from 'next';

import { Layout } from '../components/layouts';
import NoFavorites from '../components/ui/NoFavorites';
import { localFavorites } from '../utils';
import { objToSentToLocalStorageFavorites } from '../interfaces';
import FavoriteCharacter from '../components/futurama/FavoriteCharacter';


const FavoritesPage: NextPage = () => {

  const [favoriteCharacters, setFavoriteCharacters] = useState<objToSentToLocalStorageFavorites[]>([]);

  useEffect(()=>{
    setFavoriteCharacters( localFavorites.characters() );
  },[])

  return (
    <Layout title='Favorites'>
      { favoriteCharacters.length === 0
        ? ( <NoFavorites/> )
        : ( <FavoriteCharacter favoriteCharacters={favoriteCharacters} /> )
      }
    </Layout>
  )
}

export default FavoritesPage;
