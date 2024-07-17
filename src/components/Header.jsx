import Link from "next/link"
import Image from "next/image"
import Logo from "../assets/logo2.png"

import { CiShoppingCart } from "react-icons/ci";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart, faHeart, faHeadset } from "@fortawesome/free-solid-svg-icons";
// import '../lib/fontawesome'; 

export default function Header() {
  return (
    <header>
      <div className="bg-white">
        <div className="container mx-auto py-4">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0"></div>
            <div className="flex items-center">
              <ul className="flex space-x-4">
                <li>
                  <Link
                    href="/shop/cadastro"
                    className="text-black hover:text-green-700 text-sm"
                  >
                    Cadastre-se
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/contato"
                    className="text-black hover:text-green-700 text-sm"
                  >
                    Contato
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/patrocinio"
                    className="text-black hover:text-green-700 text-sm"
                  >
                    Meus pedidos!
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black relative">
        <div className="container mx-auto py-4">
          <div className="flex justify-between items-center">
            <div className="mt-[-10px]">
              <Image src={Logo} alt="Logo do Empresa" width={200} height={100} />
            </div>
            <nav className="w-full bg- px-32 py-5 flex items-center justify-between mt-[-8px]">
              <ul className="flex space-x-10">
                <li>
                  <Link
                    href="/"
                    className="text-white hover:text-red-400 text-1xl"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/feminino"
                    className="text-white hover:text-red-400 text-1xl"
                  >
                    Feminino{" "}
                  </Link>
                </li>
                <li className="relative">
                  <Link
                    href="/shop/masculino"
                    className="text-white hover:text-red-400 text-1xl"
                  >
                    Masculino{" "}
                    <i className="ri-arrow-down-s-line text-xs ml-1"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/esportes"
                    className="text-white hover:text-red-400 text-1xl"
                  >
                    Esporte{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/beleza"
                    className="text-white hover:text-red-400 text-1xl"
                  >
                    Beleza{" "}
                    <i className="ri-arrow-down-s-line text-xs ml-1"></i>
                  </Link>
                </li>
              </ul>
              <div className="right flex items-center space-x-4">
                <form className="flex items-center bg-gray-100 rounded-md px-4 py-2 shadow-md ml-12">
                  <span className="icon large text-gray-400">
                    <i className="ri-search-line"></i>
                  </span>
                  <input
                    type="search"
                    placeholder="Procure por seu produto"
                    className="bg-transparent outline-none text-gray-700 placeholder-gray-500"
                  />
                  <button
                    type="submit"
                    className="bg-red-500 hover:bg-black text-white py-1 px-4 rounded-md"
                  >
                    Procure
                  </button>
                </form>
                <Link href='/cart'>
                  <CiShoppingCart className='text-white w-10 h-10'/>
                </Link>
                {/* <button className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faShoppingCart} className="text-white text-2xl" />
                </button>
                <button className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faHeart} className="text-white text-2xl" />
                </button>
                <button className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faHeadset} className="text-white text-2xl" />
                </button> */}
              </div>
            </nav>
            <div className="absolute inset-x-0 bottom-0 h-7 bg-green-400"></div>
            <div className="absolute inset-x-0 bottom-0 flex mb-1 justify-center items-center text-white">
              <p className="text-sm font-bold text-black animate-pulse cursor-pointer">Free Shipping on Orders Over $200</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
