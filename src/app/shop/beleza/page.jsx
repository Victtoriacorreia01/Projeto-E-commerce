'use client';

import '@fortawesome/fontawesome-free/css/all.css';
import Image from 'next/image';
import { useState } from 'react';
import rimel from '../../../assets/rimel.jpg';
import blush from '../../../assets/blush.jpg';
import po from '../../../assets/poo.jpg';
import delineador from '../../../assets/delineadorr.jpg';
import batom from '../../../assets/batomm.jpg';
import gloss from '../../../assets/gloss.jpg';
import hidratantelabial from '../../../assets/hidratantelabial.jpg';
import aguamicelar from '../../../assets/aguamicelar.jpg';
import paleta from '../../../assets/paleta.jpg';
import useCart from '../../../hooks/use-cart';

const Beleza = () => {
  const { addProductIntoCart } = useCart();
  const [favorites, setFavorites] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sortOption, setSortOption] = useState('relevancy');

  const produtos = [
    { id: 1, nome: "Blush", preco: 79.99, info: "O mais vendido", imagem: blush, marca: "MAC", estilo: "Maquiagem", rating: 4 },
    { id: 2, nome: "Batom", preco: 39.99, imagem: batom, marca: "Natura", estilo: "Maquiagem", rating: 3 },
    { id: 3, nome: "Rímel", preco: 89.99, info: "Se sinta linda!", imagem: rimel, marca: "Maybelline", estilo: "Maquiagem", rating: 5 },
    { id: 4, nome: "Paleta", preco: 84.99, imagem: paleta, marca: "Revlon", estilo: "Maquiagem", rating: 4 },
    { id: 5, nome: "Pó compacto", preco: 109.99, imagem: po, marca: "LOreal", estilo: "Maquiagem", rating: 4 },
    { id: 6, nome: "Gloss", preco: 36.99, imagem: gloss, marca: "Natura", estilo: "Maquiagem", rating: 2 },
    { id: 7, nome: "Delineador", preco: 69.99, imagem: delineador, marca: "MAC", estilo: "Maquiagem", rating: 3 },
    { id: 8, nome: "Água micelar", preco: 59.99, imagem: aguamicelar, marca: "LOreal", estilo: "Cuidados", rating: 5 },
    { id: 9, nome: "Hidratante labial", preco: 29.99, imagem: hidratantelabial, marca: "Revlon", estilo: "Cuidados", rating: 4 },
  ];

  const toggleFavorite = (produtoId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(produtoId)
        ? prevFavorites.filter((id) => id !== produtoId)
        : [...prevFavorites, produtoId]
    );
  };

  const handleBrandFilter = (brand) => {
    setSelectedBrands((prevSelectedBrands) =>
      prevSelectedBrands.includes(brand)
        ? prevSelectedBrands.filter((b) => b !== brand)
        : [...prevSelectedBrands, brand]
    );
  };

  const handleStyleFilter = (style) => {
    setSelectedStyles((prevSelectedStyles) =>
      prevSelectedStyles.includes(style)
        ? prevSelectedStyles.filter((s) => s !== style)
        : [...prevSelectedStyles, style]
    );
  };

  const sortedProducts = [...produtos].sort((a, b) => {
    if (sortOption === 'price_asc') {
      return a.preco - b.preco;
    } else if (sortOption === 'price_desc') {
      return b.preco - a.preco;
    } else if (sortOption === 'rating_desc') {
      return b.rating - a.rating;
    } else {
      return b.rating - a.rating;
    }
  });

  const filteredProducts = sortedProducts.filter((produto) => {
    return (
      (selectedBrands.length === 0 || selectedBrands.includes(produto.marca)) &&
      (selectedStyles.length === 0 || selectedStyles.includes(produto.estilo)) &&
      produto.preco <= maxPrice
    );
  });

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`fas fa-star ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="container mx-auto mt-20 mb-10">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1 bg-white p-4 shadow-lg rounded-lg">
          <h1 className="text-lg font-bold mb-2">Ordenar Por</h1>
          <div className="relative">
            <select
              name="sort"
              id="sort"
              value={sortOption}
              onChange={handleSortChange}
              className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-3 py-2 pr-6 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-sm"
            >
              <option value="relevancy">Mais relevantes</option>
              <option value="price_asc">Preço - Baixo para Alto</option>
              <option value="price_desc">Preço - Alto para Baixo</option>
              <option value="rating_desc">Avaliação - Alta para Baixa</option>
            </select>
          </div>
          <h2 className="text-xl font-bold text-gray-800 my-4">Filtros</h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Marcas</h3>
            <div className="flex flex-wrap gap-2">
              {['LOreal', 'Maybelline', 'MAC', 'Revlon', 'Natura'].map((marca) => (
                <button
                  key={marca}
                  className={`py-1 px-3 border rounded-full text-xs ${selectedBrands.includes(marca) ? 'bg-gray-200' : 'text-gray-700 hover:bg-gray-200'}`}
                  onClick={() => handleBrandFilter(marca)}
                >
                  {marca}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Preços</h3>
            <input
              type="range"
              min="0"
              max="1000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full accent-green-500"
            />
            <p className="text-gray-600 mt-1">Até R$ {maxPrice}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Estilos</h3>
            <div className="flex flex-wrap gap-2">
              {['Maquiagem', 'Cuidados', 'Perfumes'].map((estilo) => (
                <button
                  key={estilo}
                  className={`py-1 px-3 border rounded-full text-xs ${selectedStyles.includes(estilo) ? 'bg-gray-200' : 'text-gray-600 hover:bg-gray-200'}`}
                  onClick={() => handleStyleFilter(estilo)}
                >
                  {estilo}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-4 gap-4">
          {filteredProducts.map((produto) => (
            <div key={produto.id} className="bg-white p-2 shadow-md rounded-lg">
              <div className="w-full h-40 relative overflow-hidden">
                <Image
                  src={produto.imagem}
                  alt={produto.nome}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-lg font-semibold mt-2">{produto.nome}</h2>
              <p className="text-gray-600">Preço: R$ {produto.preco.toFixed(2)}</p>
              <div className="flex items-center mt-2">
                <button
                  className={`ml-3 mr-3 ${favorites.includes(produto.id) ? 'text-red-500' : 'text-red-500 hover:text-red-800'}`}
                  onClick={() => toggleFavorite(produto.id)}
                >
                  <i className="fas fa-heart"></i>
                </button>
                <button
                  className="text-green-500 hover:text-green-700"
                  onClick={() => addProductIntoCart(produto)}
                >
                  <i className="fas fa-cart-plus"></i>
                </button>
              </div>
              <div className="flex items-center mt-2">
                {renderStars(produto.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Beleza;
