'use client'

import Link from 'next/link';
import React, { useState } from 'react'
import Logo from "../../../assets/logo.png"
import Image from "next/image"
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const createUserFormSchema = z.object({
    email: z.string().min(1, 'O e-mail é obrigatório.').email('Informe um endereço de e-mail válido.'),
    name: z.string().min(1, 'Campo obrigatório.'),
    password: z.string().min(8, 'Verifique se a sua senha tem pelo menos 8 caracteres.'),
    passwordConfirmation: z.string().min(1, 'Informe a sua senha novamente.')
}).refine(({ password, passwordConfirmation }) => password === passwordConfirmation, {
    message: 'As senhas informadas não correspondem. Tente novamente.',
    path: ['passwordConfirmation']
})

export default function Cadastro() {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
        defaultValues: {
            email: '',
            name: '',
            password: '',
            passwordConfirmation: ''
        },
        mode: 'onBlur',
        criteriaMode: 'all',
        resolver: zodResolver(createUserFormSchema)
    })

    const onSubmit = async (data) => {
        setLoading(true)

        try {
            const url = 'http://localhost:3333/users'

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
                        <h2 className="mb-4 text-2xl">Cadastrado com sucesso!</h2>
                        <p>Olhe o seu email, por favor!</p>
                        <button
                            onClick={() => setSuccess(false)}
                            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg"
                        >
                            Ok
                        </button>
                    </div>
                </div>
            )}

            <div className={`max-w-md w-full space-y-8 border border-gray-200 rounded-lg p-6 shadow-md ${loading || success ? 'filter blur-sm' : ''}`}>
                <div className="mb-6 flex items-center justify-center">
                    <Image
                        className="text-center"
                        src={Logo}
                        style={{ width: "120px", height: "auto" }}
                        alt="Logo da Empresa"
                    />
                </div>
                <div>
                    <h2 className="mt-6 text-center text-2xl font-bold text-gray-800">
                        Cadastre-se
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit, onError)}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="mb-4">
                            <label htmlFor="name" className="sr-only">
                                Nome
                            </label>
                            <input
                                id="name"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg"
                                placeholder="Nome"
                                {...register('name')}
                            />
                            {errors?.name && <span className='text-red-500 text-sm'>{errors?.name?.message}</span>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="sr-only">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg"
                                placeholder="Email"
                                {...register('email')}
                            />
                            {errors?.email && <span className='text-red-500 text-sm'>{errors?.email?.message}</span>}
                        </div>
                    </div>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="mb-4">
                            <label htmlFor="password" className="sr-only">
                                Senha
                            </label>
                            <input
                                id="password"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg"
                                placeholder="Senha"
                                {...register('password')}
                            />
                            {errors?.password && <span className='text-red-500 text-sm'>{errors?.password?.message}</span>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="passwordConfirmation" className="sr-only">
                                Confirmar Senha
                            </label>
                            <input
                                id="passwordConfirmation"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg"
                                placeholder="Confirmar senha"
                                {...register('passwordConfirmation')}
                            />
                            {errors?.passwordConfirmation && <span className='text-red-500 text-sm'>{errors?.passwordConfirmation?.message}</span>}
                        </div>
                    </div>
                    <div>
                    <button
                            type="submit"
                            className="group relative px-4 py-1.5 border border-transparent text-lg ml-24 font-medium rounded-full text-white bg-green-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            style={{ width: '200px' }}
                        >
                            {isSubmitting || loading ? 'Enviando formulário' : 'Cadastre-se'}
                        </button>

                    </div>
                    <Link href="../Login">
                        <button type='button' className="ml-28 text-center hover:text-pink-600 mt-4">
                            Já possui uma conta?
                        </button>
                    </Link>


                </form>
            </div>
        </div>
    );
};
