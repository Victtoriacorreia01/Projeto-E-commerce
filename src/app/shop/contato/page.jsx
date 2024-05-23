import Logo from "../../../assets/logo.png";

import Image from "next/image";

export default function Cadastro() {
    return (
        <div>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5">
              <div className="mt-[-30px]">
                <Image
                    className="text-orange-600"
                    src={Logo}
                    style={{ width: "150px", height: "auto" }}
                    alt="Logo da Empresa"
                />
                </div>
                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                  <h2 className="leading-relaxed">Entre em contato</h2>
                  <p className="text-sm text-gray-500 font-normal leading-relaxed">Envie-nos uma mensagem e responderemos em breve!</p>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="flex flex-col">
                    <label className="leading-loose">Nome</label>
                    <input type="text" className="px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500" placeholder="Seu nome" />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Email</label>
                    <input type="email" className="px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500" placeholder="Seu email" />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Numero</label>
                    <input type="email" className="px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500" placeholder="Seu wpp" />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Mensagem</label>
                    <textarea rows="4" className="px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500" placeholder="Sua mensagem"></textarea>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="bg-pink-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-indigo-600">Enviar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};
