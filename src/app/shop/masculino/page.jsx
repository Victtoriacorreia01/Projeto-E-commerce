

const masculino = [
  {
    id: 1,
    name: "Camisa Polo",
    price: 79.99,
    discount: 10,
  },
  { id: 2, name: "Camisa Sthill", price: 59.99, discount: 20 },
  { id: 3, name: "Camisa Vans", price: 39.99, discount: 30 },
  { id: 4, name: "Camisa Thunder", price: 61.99, discount: 50 },
  { id: 5, name: "Camisa Zara", price: 99.99, discount: 15 },
];

export default function Masculino() {
  return (
    <div className="w-full flex justify-center">
      {masculino.map((masculino) => (
        <div key={masculino.id}>
          <div className="w-[300px] h-[300px] flex flex-col">
            {/* <Image src={masculino.image} alt="Imagem do produto" /> */}
            <span>{masculino.name}</span>
            <span>{masculino.price}</span>
            <span>{masculino.discount}%</span>
          </div>
        </div>
      ))}
    </div>
  );
}
