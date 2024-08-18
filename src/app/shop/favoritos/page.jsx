'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './favoritos.module.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      nome: 'Produto 1',
      imagem: '/path/to/image1.jpg',
      preco: '100.00',
    },
    {
      id: 2,
      nome: 'Produto 2',
      imagem: '/path/to/image2.jpg',
      preco: '200.00',
    },
 
  ]);

  const handleRemoveFavorite = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  const handleAddToCart = (id) => {

    console.log(`Adicionar ao carrinho o item com id: ${id}`);
  };

  return (
    <div className={styles.favoritesContainer}>
      <h1 className={styles.title}>Meus Favoritos</h1>
      <div className={styles.favoritesGrid}>
        {favorites.length > 0 ? (
          favorites.map((item) => (
            <div key={item.id} className={styles.favoriteItem}>
              <div className={styles.favoriteImage}>
                <Image
                  src={item.imagem}
                  alt={item.nome}
                  width={150}
                  height={150}
                  className={styles.image}
                />
              </div>
              <div className={styles.favoriteInfo}>
                <h2 className={styles.favoriteName}>{item.nome}</h2>
                <p className={styles.favoritePrice}>Preço: R$ {item.preco}</p>
                <div className={styles.buttonGroup}>
                  <button
                    className={styles.removeButton}
                    onClick={() => handleRemoveFavorite(item.id)}
                  >
                    Remover
                  </button>
                  <button
                    className={styles.cartButton}
                    onClick={() => handleAddToCart(item.id)}
                  >
                    Carrinho
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.emptyMessage}>Você não tem nenhum item favorito.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
