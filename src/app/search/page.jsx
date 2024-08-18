'use client';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './Search.module.css';

export default function SearchResults() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const queryParam = searchParams.get('query') || '';
    const categoryParam = searchParams.get('category') || '';

    setQuery(queryParam);
    setCategory(categoryParam);

    if (queryParam) {
      setMessage('Carregando...');
      const fetchProducts = async () => {
        try {
          const response = await fetch(`/api/Search?query=${encodeURIComponent(queryParam)}${categoryParam ? `&category=${encodeURIComponent(categoryParam)}` : ''}`);
          if (!response.ok) {
            throw new Error('Erro na resposta da API');
          }
          const data = await response.json();
          if (data.message) {
            setMessage(data.message);
            setProducts([]);
          } else if (Array.isArray(data) && data.length > 0) {
            setProducts(data);
            setMessage('');
          } else {
            setMessage('Nenhum produto encontrado.');
            setProducts([]);
          }
        } catch (error) {
          setMessage('Erro ao buscar produtos.');
          setProducts([]);
        }
      };
      fetchProducts();
    } else {
      setMessage('Nenhuma busca foi feita.');
    }
  }, [searchParams]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Resultados da busca para: {query || 'N/A'}</h1>
      {category && <h2 className={styles.category}>Categoria: {category}</h2>}
      {message && <p className={styles.message}>{message}</p>}
      <div className={styles.results}>
        {products.length === 0 && !message && <p>Carregando...</p>}
        {products.map((product) => (
          <div key={product.id} className={styles.productBox}>
            <img src={`/assets/${product.imagem.src}`} alt={product.nome} className={styles.productImage} />
            <h3 className={styles.productName}>{product.nome}</h3>
            <p className={styles.productDescription}>R$ {product.preco.toFixed(2)}</p>
            {product.info && <p className={styles.productInfo}>{product.info}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
