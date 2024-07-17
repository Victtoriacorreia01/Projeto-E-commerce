'use client'

import Image from 'next/image'
import useCart from '../../hooks/use-cart'

const Cart = () => {
    const { cart } = useCart()

    console.log(cart)

    return (
        <>
            <h1>MEU CARRINHO</h1>

            {cart.map(cart => (
                <div key={cart.id}>
                    <span>{cart.nome}</span>
                    <Image src={cart.imagem} alt={cart.nome}/>
                </div>
            ))}
        </>
    )
}

export default Cart