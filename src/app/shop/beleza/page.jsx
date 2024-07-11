import '@fortawesome/fontawesome-free/css/all.css';
import Image from 'next/image';
import rimel from '../../../assets/rimel.jpg'
import blush from '../../../assets/blush.jpg'
import po from '../../../assets/poo.jpg'
import delineador from '../../../assets/delineadorr.jpg'
import batom from '../../../assets/batomm.jpg'
import gloss from '../../../assets/gloss.jpg'
import hidratantelabial from '../../../assets/hidratantelabial.jpg'
import aguamicelar from '../../../assets/aguamicelar.jpg'
import paleta from '../../../assets/paleta.jpg'

const Beleza = () => {
  // Array de produtos
  const produtos = [
    { id: 1, nome: "Blush", preco: 79.99, info: "O mais vendido", imagem: blush  },
    { id: 2, nome: "Batom", preco: 39.99, imagem: batom , button: ""},
    { id: 3, nome: "Rímel", preco: 89.99, info: "Se sinta linda!", imagem: rimel },
    { id: 4, nome: "paleta", preco: 84.99, imagem: paleta, button: "" },
    { id: 5, nome: "Pó compacto", preco: 109.99, imagem: po , button: "" },
    { id: 6, nome: "Gloss", preco: 36.99, imagem: gloss , button: ""},
    { id: 7, nome: "Delineador", preco: 69.99, imagem: delineador, button: "" },
    { id: 8, nome: "Água micelar", preco: 59.99, imagem: aguamicelar, button: "" },
    { id: 9, nome: "Hidratante labial", preco: 29.99, imagem: hidratantelabial , button: "" },
    // Adicione mais produtos conforme necessário
  ];

  return (
    <div className="container mx-auto mt-8 mb-10">
      <div className="grid grid-cols-4 gap-20">
        <div className="col-span-1 bg-white p-6 shadow-lg rounded-lg"> 
          <h1 className="text-lg font-bold mb-4">Ordenar Por</h1>
          <div className="relative">
            <select name="sort" id="sort" className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option value="relevancy">Mais relevantes</option>
              <option value="price_asc">Preço - Baixo para Alto</option>
              <option value="price_desc">Preço - Alto para Baixo</option>
              <option value="rating_desc">Avaliação - Alta para Baixa</option>
            </select>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-4 mt-10">Filtros</h2> 
          <div className="mb-6"> 
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Marcas</h3> 
            <div className="flex flex-wrap gap-2"> 
              {['Dior', 'MAC', 'Natura', 'MariMaria', 'Maybelline', 'Chanel', 'Dailus', 'Impala'].map((marca) => (
                <button
                  key={marca}
                  className="py-2 px-4 border rounded-full text-gray-700 hover:bg-gray-200"
                >
                  {marca}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-10"> 
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Preços</h3> 
            <input
              type="range"
              min="0"
              max="100"
              className="w-full accent-green-500" 
            />
            <p className="text-gray-600 mt-2">Até R$ 100</p> 
          </div>
          <div> 
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Estilos</h3> 
            <div className="flex flex-wrap gap-2"> 
              {['Batons', 'Rímels', 'Sombras', 'Pó', 'Blushs', 'Cuidados com a pele', 'delineadores', 'hidratantes'].map((estilo) => (
                <button
                  key={estilo}
                  className="py-2 px-4 border rounded-full text-gray-600 hover:bg-gray-200" 
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

export default Beleza;
