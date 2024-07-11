import '@fortawesome/fontawesome-free/css/all.css';
import Image from 'next/image';
import tenis from '../../../assets/tenis.jpg';
import topnike from '../../../assets/topnike.jpg';
import bone from '../../../assets/bonee.jpg';
import bola from '../../../assets/bola.jpg';
import leg from '../../../assets/calca.jpg';
import blusa from '../../../assets/blusaa.jpg';
import meia from '../../../assets/meiabranca.jpg';
import peso from '../../../assets/pesoo.jpg';
import short from '../../../assets/short.jpg';

const Esporte = () => {
  // Array de produtos
  const produtos = [
    { id: 1, nome: "Tênis adidas", preco: 299.99, info: "O mais vendido", imagem: tenis },
    { id: 2, nome: "Top nike", preco: 109.99, imagem: topnike, button: "" },
    { id: 3, nome: "Boné nike", preco: 89.99, info: "Se sinta linda!", imagem: bone },
    { id: 4, nome: "Bola Mikasa", preco: 99.99, imagem: bola, button: "" },
    { id: 5, nome: "Calça Adidas", preco: 108.99, imagem: leg, button: "" },
    { id: 6, nome: "Blusas nike", preco: 89.99, imagem: blusa, button: "" },
    { id: 7, nome: "Meia", preco: 39.99, imagem: meia, button: "" },
    { id: 8, nome: "Peso rosa", preco: 59.99, imagem: peso, button: "" },
    { id: 9, nome: "Short preto", preco: 75.99, imagem: short, button: "" },
  ];

  return (
    <div className="container mx-auto mt-8 mb-10">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1 bg-white p-4 shadow-lg rounded-lg">
          <h1 className="text-lg font-bold mb-2">Ordenar Por</h1>
          <div className="relative">
            <select
              name="sort"
              id="sort"
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
              {['Nike', 'Adidas', 'Puma', 'Newbalance', 'Vans', 'NBA', 'Converse', 'ERKE'].map((marca) => (
                <button
                  key={marca}
                  className="py-1 px-3 border rounded-full text-gray-700 hover:bg-gray-200 text-xs"
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
              max="100"
              className="w-full accent-green-500"
            />
            <p className="text-gray-600 mt-1">Até R$ 1000</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Estilos</h3>
            <div className="flex flex-wrap gap-2">
              {['Meias', 'Tênis', 'Roupas', 'Bolas', 'Academia', 'Acessórios', 'Chapéus'].map((estilo) => (
                <button
                  key={estilo}
                  className="py-1 px-3 border rounded-full text-gray-600 hover:bg-gray-200 text-xs"
                >
                  {estilo}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-4 gap-4">
          {produtos.map((produto) => (
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
              {produto.info && <p className="text-gray-600">{produto.info}</p>}
              <button className="mt-1 rounded-full border border-gray-300 p-1"><i className="fas fa-cart-plus text-red-500 hover:text-green-500"></i></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Esporte;
