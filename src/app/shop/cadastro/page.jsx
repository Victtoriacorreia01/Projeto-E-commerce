'use client'

import Logo from "../../../assets/logo.png";

import Image from "next/image";

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

        console.log(data)

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
            }

            const response = await request.json()
            console.log(response)
            reset()
        } catch (error) {
            console.error(error)
        }
    }

    const onError = (errors) => console.log(errors)

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
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit, onError)}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="mb-6">
                            <label htmlFor="nome" className="sr-only">
                                Nome
                            </label>
                            <input
                                id="nome"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg"
                                placeholder="Nome"
                                {...register('name')}
                            />
                            {errors?.name && <span className='text-red-500 text-sm'>{errors?.name?.message}</span>}
                        </div>
                        <div className="mb-6">
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
                                {...register('password')}
                            />
                            {errors?.password && <span className='text-red-500 text-sm'>{errors?.password?.message}</span>}
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
                                {...register('passwordConfirmation')}
                            />
                            {errors?.passwordConfirmation && <span className='text-red-500 text-sm'>{errors?.passwordConfirmation?.message}</span>}
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-6 border border-transparent text-lg font-medium rounded-full text-white bg-green-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            {isSubmitting ? 'Enviando formulário' : 'Cadastre-se'}
                        </button>
                    </div>
                    <button type='submit' className="text-center hover:text-pink-600" >
                        <a href="#">Já possui uma conta?</a>
                    </button>
                </form>
            </div>
        </div>
    );
};
