import React from 'react';
import Image from 'next/image';
import fotoprincipal from '../../public/baixados (55).jpg';

const saleItems = [
  { id: 1, link: '', img: '/calça.jpg', subtitle: 'man', title: 'sale 40% off' },
  { id: 2, link: '', img: '/mulhersport.jpg', subtitle: 'sport', title: 'sale 25% off' },
  { id: 3, link: '', img: '/homembranco.jpg', subtitle: 'man', title: 'sale 20% off' },
];

const mustHaveItems = [
  { id: 1, link: '', img: '/sportwoman.jpg', title: 'Gym Clothing Set', oldPrice: 'R$120,00', newPrice: 'R$99,90' },
  { id: 2, link: '', img: '/tshirtbutton.jpg', title: 'T-shirt with buttons', oldPrice: 'R$60,00', newPrice: 'R$45,00' },
  { id: 3, link: '', img: '/vans.jpg', title: 'Pair of high shoes', oldPrice: 'R$150,00', newPrice: 'R$80,00' },
  { id: 4, link: '', img: '/tshirtpink.jpg', title: 'Pink T-shirt', oldPrice: 'R$80,00', newPrice: 'R$65,00' },
  { id: 5, link: '', img: '/bagblack.jpg', title: 'Black bag', oldPrice: 'R$100,00', newPrice: 'R$84,00' },
  { id: 6, link: '', img: '/blackdress.jpg', title: 'Black dress', oldPrice: 'R$200,00', newPrice: 'R$150,00' },
  { id: 7, link: '', img: '/browntshirt.jpg', title: 'Brown T-shirt', oldPrice: 'R$80,00', newPrice: 'R$64,00' },
  { id: 8, link: '', img: '/jeans.jpg', title: 'Simple Jeans', oldPrice: 'R$180,00', newPrice: 'R$120,00' },
  { id: 9, link: '', img: '/blackboots.jpg', title: 'Black Boots', oldPrice: 'R$199,90', newPrice: 'R$100,00' },
  { id: 10, link: '', img: '/greenshoes.jpg', title: 'Set of shorts', oldPrice: 'R$250,00', newPrice: 'R$120,00' },
  { id: 11, link: '', img: '/blackshort.jpg', title: 'Black short', oldPrice: 'R$60,00', newPrice: 'R$38,00' },
  { id: 12, link: '', img: '/dresssclack.jpg', title: 'Black dress with sleeves', oldPrice: 'R$205,00', newPrice: 'R$167,00' },
];

const reviews = [
  {
    id: 1,
    name: 'Lara Silva',
    text: 'lorem lorem lorem.',
    rating: 5,
  },
  {
    id: 2,
    name: 'André Oliveira',
    text: 'lorem lorem lorem.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Alice Lourem',
    text: 'lorem lorem lorem.',
    rating: 4,
  },
];

const blogPosts = [
  {
    id: 1,
    title: 'lorem lorem lorem',
    excerpt: 'lorem',
    img: '/summer fashion.jpg',
    link: '',
  },
  {
    id: 2,
    title: 'lorem lorem lorem',
    excerpt: 'lorem ',
    img: '/acessorios.jpg',
    link: '',
  },
  {
    id: 3,
    title: 'lorem lorem lorem',
    excerpt: 'lorem ',
    img: '/gymm.jpg',
    link: '/blog/essential-accessories-for-every-outfit',
  },
];

export default function Home() {
  return (
    <div>
      <header className="py-20 custom-bg-color">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="text-center md:text-left animate__animated animate__fadeInLeft">
            <p className="text-red-700 font-semibold mb-2 animate__animated animate__bounceInLeft animate__delay-1s">EXTRA 55% OFF IN SPRING SALE</p>
            <h1 className="text-4xl font-light mb-8 animate__animated animate__fadeInLeft animate__delay-2s">Discover & Shop<br />Don't miss this opportunity</h1>
            <button className="btn btn-primary px-8 py-2 bg-red-500 text-white rounded animate__animated animate__pulse animate__infinite">SHOP NOW</button>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 animate__animated animate__fadeInRight">
            <a href="">
              <Image src={fotoprincipal} alt="Spring Sale" width={500} height={600} className="rounded-lg animate__animated animate__zoomIn animate__delay-3s" />
            </a>
          </div>
        </div>
      </header>
      <section className="bg-white py-20">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-3xl text-center mb-12 font-semibold">On Sale</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 justify-center items-center">
            {saleItems.map(item => (
              <div key={item.id} className="relative overflow-hidden shadow-lg rounded transition duration-300 transform hover:scale-105 h-96 w-60">
                <a href={item.link} className="block overflow-hidden h-full">
                  <Image src={item.img} alt={item.subtitle} layout="fill" objectFit="cover" className="transition-opacity duration-300 transform hover:scale-110" />
                </a>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center">
                    <p className="text-gray-200 text-sm">{item.subtitle}</p>
                    <h4 className="text-xl font-semibold mt-2">Sale {item.title.split(' ')[1]} off</h4>
                    <button className="btn btn-primary mt-4 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-white hover:text-red-500 transition duration-300">Shop Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto ml-40 fade-in">
          <h2 className="text-3xl text-center mb-12 font-semibold">Must Have</h2>
          <div className="flex flex-wrap justify-center cursor-pointer">
            {mustHaveItems.map(item => (
              <div key={item.id} className="w-full md:w-1/4 px-4 mb-8 transform transition duration-500 hover:scale-105">
                <a href={item.link}>
                  <div className="relative">
                    <Image src={item.img} className="transition duration-500 ease-in-out transform hover:scale-110" alt={item.title} width={200} height={200} />
                  </div>
                </a>
                <h4 className="text-lg font-semibold mt-4">{item.title}</h4>
                <p className="text-gray-600">
                  <del>{item.oldPrice}</del> <span className="font-semibold text-red-500">{item.newPrice}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center mb-12 font-semibold">Customer Reviews</h2>
          <div className="flex flex-wrap justify-center">
            {reviews.map(review => (
              <div key={review.id} className="w-full md:w-1/3 px-4 mb-8 cursor-pointer">
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                  <h3 className="text-xl font-semibold mb-4">{review.name}</h3>
                  <p className="text-gray-700 mb-4">{review.text}</p>
                  <div className="flex items-center">
                    {Array.from({ length: review.rating }, (_, index) => (
                      <svg key={index} className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927C9.239 2.402 9.759 2.402 9.949 2.927l1.62 4.73 5.051.733c.526.077.738.684.354 1.035l-3.666 3.577.865 5.04c.09.523-.46.915-.912.67L10 15.347l-4.541 2.388c-.452.244-1.002-.147-.912-.67l.865-5.04-3.666-3.577c-.384-.35-.172-.958.354-1.035l5.051-.733 1.62-4.73z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center mb-12 font-semibold">Latest Blog Posts</h2>
          <div className="flex flex-wrap justify-center">
            {blogPosts.map(post => (
              <div key={post.id} className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 h-full flex flex-col">
                  <a href={post.link}>
                    <Image src={post.img} alt={post.title} width={600} height={400} className="rounded-t-lg" />
                    <div className="flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="text-xl font-semibold mt-4">{post.title}</h3>
                        <p className="text-gray-700 mt-2">{post.excerpt}</p>
                      </div>
                      <div className="mt-4">
                        <a href={post.link} className="text-red-500 hover:underline">Read More</a>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
