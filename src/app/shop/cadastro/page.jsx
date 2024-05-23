import Logo from "../../../assets/logo.png";

import Image from "next/image";




export default function Cadastro() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
           <div className="max-w-xl w-full space-y-8 border border-gray-200 rounded-lg p-8 shadow-md">
           <div className="mt-[-20px] mb-8  flex items-center justify-center">
                <Image
                    className="text-center"
                    src={Logo}
                    style={{ width: "150px", height: "auto" }}
                    alt="Logo da Empresa"
    />
            </div>
                <div>
                    <h2 className="mt-6 text-center text-2xl font-bold text-gray-800">
                    Cadastre-se
                    </h2>
                </div>
                <form className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="mb-6">
                            <label htmlFor="nome" className="sr-only">
                                Nome
                            </label>
                            <input
                                id="nome"
                                name="nome"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg"
                                placeholder="Nome"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="sr-only">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg"
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="mb-6">
                            <label htmlFor="senha" className="sr-only">
                                Senha
                            </label>
                            <input
                                id="senha"
                                name="senha"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg"
                                placeholder="Senha"
                            />
                        </div>
                    </div>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="mb-6">
                            <label htmlFor="senha" className="sr-only">
                                Corfirmar Senha
                            </label>
                            <input
                                id="senha"
                                name="senha"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg"
                                placeholder="Confirmar senha"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-6 border border-transparent text-lg font-medium rounded-full text-white bg-green-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Cadastre-se
                        </button>
                    </div>
                    <button className="text-center hover:text-pink-600">
                        <a href="#">Já possui uma conta?</a>
                    </button>

                </form>
            </div>
        </div>
    );
};
