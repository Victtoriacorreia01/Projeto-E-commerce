'use client'

import React, { useState } from 'react'
import Logo from "../../../assets/logo.png"
import Image from "next/image"
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'

const loginFormSchema = z.object({
    email: z.string().min(1, 'O e-mail é obrigatório.').email('Informe um endereço de e-mail válido.'),
    password: z.string().min(8, 'Verifique se a sua senha tem pelo menos 8 caracteres.')
})

export default function Login() {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        mode: 'onBlur',
        criteriaMode: 'all',
        resolver: zodResolver(loginFormSchema)
    })
    const router = useRouter()

    const onSubmit = async (data) => {
        setLoading(true)

        try {
            const url = 'http://localhost:3333/login'

            const request = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if (!request.ok) {
                const error = await request.json()
                throw new Error(error.message)
            }

            const response = await request.json()
            console.log(response)
            setLoading(false)
            setSuccess(true)
            reset()
        } catch (error) {
            console.error(error)
            setLoading(false)
        }
    }

    const onError = (errors) => console.log(errors)

    const navigateToSignup = () => {
        router.push('/signup') // Substitua '/signup' pela rota real da sua página de cadastro
    }

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="loader"></div>
                </div>
            )}

            {success && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <h2 className="mb-4 text-2xl">Login realizado com sucesso!</h2>
                        <button
                            onClick={() => setSuccess(false)}
                            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg"
                        >
                            Ok
                        </button>
                    </div>
                </div>
            )}

            <div className={`max-w-xl w-1/3 space-y-8 border border-gray-200 rounded-lg p-8 shadow-md ${loading || success ? 'filter blur-sm' : ''}`}>
                <div className="mt-[-20px] mb-8 flex items-center justify-center">
                    <Image
                        className="text-center"
                        src={Logo}
                        style={{ width: "150px", height: "auto" }}
                        alt="Logo da Empresa"
                    />
                </div>
                <div>
                    <h2 className="mt-6 text-center text-2xl font-bold text-gray-600">
                        Fazer Login
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit, onError)}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="mb-6">
                            <label htmlFor="email" className="sr-only">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg"
                                placeholder="Email"
                                {...register('email')}
                            />
                            {errors?.email && <span className='text-red-500 text-sm'>{errors?.email?.message}</span>}
                        </div>
                    </div>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="mb-6">
                            <label htmlFor="password" className="sr-only">
                                Senha
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg"
                                placeholder="Senha"
                                {...register('password')}
                            />
                            {errors?.password && <span className='text-red-500 text-sm'>{errors?.password?.message}</span>}
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-2/3 flex justify-center py-1 px-2 border border-transparent text-lg font-medium rounded-full text-white bg-green-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-16"
                        >
                            {isSubmitting || loading ? 'Enviando formulário' : 'Entrar'}
                        </button>
                    </div>
                    <button type='button' className=" ml-20 text-center hover:text-pink-600" onClick={navigateToSignup}>
                        Não tem uma conta? Cadastre-se
                    </button>
                </form>
            </div>
        </div>
    );
};
