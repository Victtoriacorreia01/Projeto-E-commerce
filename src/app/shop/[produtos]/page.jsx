"use client";

import { space } from "postcss/lib/list";

async function buscarProdutos(categoria){
    const resposta = await fetch('http://localhost:3000/produtos/$')
    return await resposta.json();
}
export default function Produtos({ params }){
    const categoria = params.Produtos;
    console.log(categoria);

    return (
        
              <div className="container mx-auto p-8">
                <h1 className="text-3xl font-bold mb-4">Produtos para Casa</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  
                </div>
              </div>
            
      );
    }