
export default async function handler(req, res) {
    const { query, category } = req.query;
  
    const produtos = [
        { id: 1, nome: "Tênis adidas", preco: 299.99, info: "O mais vendido", imagem: { src: 'assets/tenis.jpg' }, categoria: "Tênis" },
        { id: 2, nome: "Top nike", preco: 109.99, imagem: { src: 'assets/topnike.jpg' }, categoria: "Roupas" },
      ];
  
    try {
      const filteredProducts = produtos.filter(product => {
        return (
          product.nome.toLowerCase().includes(query.toLowerCase()) &&
          (category ? product.categoria === category : true)
        );
      });
  
      if (filteredProducts.length === 0) {
        return res.status(404).json({ message: 'Nenhum produto encontrado' });
      }
  
      res.status(200).json(filteredProducts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao buscar produtos' });
    }
  }
  