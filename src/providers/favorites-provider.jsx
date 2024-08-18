'use client';

import { FavoritesProvider } from '../contexts/favorites-provider';

export default function ProviderFavorites({ children }) {
  return <FavoritesProvider>{children}</FavoritesProvider>;
}
