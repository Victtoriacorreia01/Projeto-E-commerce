'use client'

import { useContext } from 'react'
import { CartContext } from '../contexts/cart-provider'

const useCart = () => {
    return useContext(CartContext)
}

export default useCart