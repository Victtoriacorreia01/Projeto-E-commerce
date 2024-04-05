import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


export default function Footer() {
    return (
      <footer className="bg-black py-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-white">
          <div className="flex items-center mb-4 md:mb-0 mr-auto">
            <img src="/Clean Elegant Typography Brand Logo (1).png" className="h-12 mr-7" alt="Logo" /> {/* Substitua pelo caminho da sua logo */}
            <div>
              <h2 className="text-lg font-semibold mb-2 text-red-400">Entre em Contato</h2>
              <p>Telefone: (00) 1234-5678</p>
              <p>Email: contato@example.com</p>
            </div>
          </div>
          <div className="md:flex items-center">
            <nav className="md:ml-6">
              <ul className="flex space-x-4">
                <li><Link href="#" className="hover:underline">Home</Link></li>
                <li><Link href="#" className="hover:underline">Produtos</Link></li>
                <li><Link href="#" className="hover:underline">Sobre Nós</Link></li>
                <li><Link href="#" className="hover:underline">Blog</Link></li>
                <li><Link href="#" className="hover:underline">Contato</Link></li>
              </ul>
            </nav>
            <div className="md:ml-6">
              <p>Siga-nos nas redes sociais:</p>
              <div className="flex space-x-2 mt-2">
                <a href="#" className="text-white hover:text-gray-200"><i className="ri-facebook-fill"></i></a>
                <a href="#" className="text-white hover:text-gray-200"><i className="ri-twitter-fill"></i></a>
                <a href="#" className="text-white hover:text-gray-200"><i className="ri-instagram-fill"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    );
  }
  
  