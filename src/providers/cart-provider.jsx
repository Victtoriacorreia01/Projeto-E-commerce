'use client'

import { CartProvider } from '../contexts/cart-provider'

export default function ProviderCart({ children }) {
    return <CartProvider>{children}</CartProvider>
}
