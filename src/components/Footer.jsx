"use client";

import Link from "next/link";

import Image from "next/image";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import Logo from "@/assets/logo2.png";

export default function Footer() {
  return (
    <footer className="bg-black py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-white">
        <div className="flex items-center mb-4 md:mb-0 mr-auto">
          <Image src={Logo} className="h-12 mr-7" alt="Logo da Empresa" />
          <div>
            <h2 className="text-lg font-semibold mb-2 text-red-400">
              Entre em Contato
            </h2>
            <p>Telefone: (00) 1234-5678</p>
            <p>Email: contato@example.com</p>
          </div>
        </div>
        <div className="md:flex items-center">
          <nav className="md:ml-6">
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:underline">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:underline">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:underline">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
          <div className="md:ml-6">
            <p>Siga-nos nas redes sociais:</p>
            <div className="flex space-x-2 mt-2">
              <a
                href="https://facebook.com/minhaloja"
                className="text-white hover:text-gray-200"
                target="_blank"
              >
                <FaFacebook size="2rem" />
              </a>
              <a
                href="https://twitter.com/minhaloja"
                className="text-white hover:text-gray-200"
                target="_blank"
              >
                <FaTwitter size="2rem" />
              </a>
              <a
                href="https://instagram.com/minhaloja"
                className="text-white hover:text-gray-200"
                target="_blank"
              >
                <FaInstagram size="2rem" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
