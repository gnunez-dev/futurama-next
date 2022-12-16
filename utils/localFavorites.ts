import { objToSentToLocalStorageFavorites } from '../interfaces/internal-characters';

const toggleFavorite  = (character: objToSentToLocalStorageFavorites ) => {

  let favorites: objToSentToLocalStorageFavorites[] = JSON.parse( localStorage.getItem('favorites') || '[]' );

  const favoritesIDs = favorites.map( item => item.id );

  if(favoritesIDs.includes(character.id)){
    favorites = favorites.filter(c => c.id !== character.id );
  } else {
    favorites.push(character);
  }

  localStorage.setItem('favorites', JSON.stringify( favorites ))

}

const existInFavorite = (character: objToSentToLocalStorageFavorites): Boolean => {

  if(typeof window === 'undefined') return false;

  const favorites: objToSentToLocalStorageFavorites[] = JSON.parse( localStorage.getItem('favorites') || '[]' );

  const favoritesIDs = favorites.map( item => item.id );
  return favoritesIDs.includes(character.id);
  
}

const characters = (): objToSentToLocalStorageFavorites[] => {
  return JSON.parse( localStorage.getItem('favorites') || '[]' );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  toggleFavorite,
  existInFavorite,
  characters
}