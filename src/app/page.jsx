import React from 'react';
import Image from 'next/image';

const saleItems = [
  { id: 1, link: '', img: '', subtitle: 'SPORTSWEAR', title: 'sale 40% off' },
  { id: 2, link: '', img: '', subtitle: 'T-shirt', title: 'sale 25% off' },
  { id: 3, link: '', img: '', subtitle: 'DRESS', title: 'sale 20% off' },
];

const mustHaveItems = [
  { id: 1, link: '', img: '', title: 'Gym Clothing Set', oldPrice: 'R$120,00', newPrice: 'R$99,90' },
  { id: 2, link: '', img: '', title: 'T-shirt with buttons', oldPrice: 'R$60,00', newPrice: 'R$45,00' },
  { id: 3, link: '', img: '', title: 'pair of high shoes', oldPrice: 'R$150,00', newPrice: 'R$80,00' },
  { id: 4, link: '', img: '', title: 'Pink T-shirt', oldPrice: 'R$80,00', newPrice: 'R$65,00' },
  { id: 5, link: '', img: '', title: 'Black bag', oldPrice: 'R$100,00', newPrice: 'R$84,00' },
  { id: 6, link: '', img: '', title: 'Black dress', oldPrice: 'R$200,00', newPrice: 'R$150,00' },
  { id: 7, link: '', img: '', title: 'Brown T-shirt', oldPrice: 'R$80,00', newPrice: 'R$64,00' },
  { id: 8, link: '', img: '', title: 'Simple Jeans', oldPrice: 'R$180,00', newPrice: 'R$120,00' },
  { id: 9, link: '', img: '', title: 'Black Boots', oldPrice: 'R$199,90', newPrice: 'R$100,00' },
  { id: 10, link: '', img: '', title: 'Set of shorts', oldPrice: 'R$250,00', newPrice: 'R$120,00' },
  { id: 11, link: '', img: '', title: 'Black short', oldPrice: 'R$60,00', newPrice: 'R$38,00' },
  { id: 12, link: '', img: '', title: 'Black dress with sleeves', oldPrice: 'R$205,00', newPrice: 'R$167,00' },
];

export default function Home() {
  return (
    <div>
      <header className="bg-gray-200 py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="text-center md:text-left">
            <p className="text-red-700 font-semibold mb-2">EXTRA 55% OFF IN SPRING SALE</p>
            <h1 className="text-4xl font-light mb-8">Discover & Shop<br />Dont miss this opportunity</h1>
            <button className="btn btn-primary">SHOP NOW</button>
          </div>
          <div className="w-full md:w-1/2">
            <a href="">
              <Image src="" alt="Spring Sale" width={500} height={600} />
            </a>
          </div>
        </div>
      </header>

      <section className="bg-white py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center mb-12">On Sale</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {saleItems.map(item => (
              <div key={item.id} className="relative overflow-hidden">
                <a href={item.link}>
                  <Image src={item.img} className="w-full" alt={item.subtitle} />
                </a>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4">
                  <p className="text-gray-400 text-sm">{item.subtitle}</p>
                  <h4 className="text-lg font-semibold">sale <span className="text-red-600">{item.title.split(' ')[1]}</span> off</h4>
                  <button className="btn btn-primary mt-2">SHOP NOW</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center mb-12">Must Have</h2>
          <div className="flex flex-wrap justify-center">
            {mustHaveItems.map(item => (
              <div key={item.id} className="w-full md:w-1/4 px-4 mb-8">
                <a href={item.link}>
                  <Image src={item.img} className="w-full" alt={item.title} />
                </a>
                <h4 className="text-lg font-semibold mt-2">{item.title}</h4>
                <p className="text-gray-600"><del>{item.oldPrice}</del> {item.newPrice}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
}

