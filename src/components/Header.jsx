import Link from "next/link";

import Image from "next/image";

import Logo from "@/assets/logo.png";

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
                    Patrocinadores
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto py-4">
          <div className="flex justify-between items-center">
            <div className="mt-[-30px] ">
              <Image
                className="text-orange-600 h-auto "
                src={Logo}
                style={{ minWidth: "200px" }}
                alt="Logo do Empresa"
              />
            </div>
            <nav className="w-full bg-white px-32 py-5 flex items-center justify-between mt-[-16px]">
              <ul className="flex space-x-10 ml-4">
                <li>
                  <Link
                    href="/"
                    className="text-black hover:text-green-700 text-sm md:text-lg xl:text-xl "
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/feminino"
                    className="text-black hover:text-green-700 text-sm md:text-lg xl:text-xl "
                  >
                    Feminino
                  </Link>
                </li>
                <li className="relative">
                  <Link
                    href="/shop/masculino"
                    className="text-black hover:text-green-700 text-sm md:text-lg xl:text-xl"
                  >
                    Masculino{" "}
                    <i className="ri-arrow-down-s-line text-xs ml-1"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/esports"
                    className="text-black hover:text-green-700 text-sm md:text-lg xl:text-xl"
                  >
                    Esporte
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shops/beleza"
                    className="text-black hover:text-green-700 text-sm md:text-lg xl:text-xl"
                  >
                    Beleza
                  </Link>
                </li>
                <div className="absolute left-0 mt-2 py-2 bg-gray-800 rounded-md hidden"></div>

                <div className="right flex items-center space-x-4 mt-[-16px]">
                  <form className="flex items-center bg-gray-100 rounded-md px-8 py-2 shadow-md ml-12">
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
                </div>
              </ul>
            </nav>
            <button className="md:hidden"></button>
          </div>
        </div>
      </div>
    </header>
  );
}
