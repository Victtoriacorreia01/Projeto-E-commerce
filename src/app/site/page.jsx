import Head from 'next/head';

export default function Account() {
  return (
    <div className="min-h-screen bg-red-500 flex justify-center items-center">
      <Head>
        <title>Página Principal</title>
      </Head>

      <div className="relative flex items-start justify-start mt-10 pl-10 bg-white">
        <div className="grid grid-cols-2 gap-8 container mx-auto py-8 px-20 relative z-10">
        <div>
            <h1 className='text-4xl font-normal text-black mb-4'>Nova Coleção Incrível <br /> </h1>
            <div className="w-30 h-px bg-red-400 mb-4"></div>
            <p className='text-sm font-semibold text-red-400'>inverno e verão com mais de 50% de desconto</p>
       </div>
       <br />
        <div className="mt-40 pl-20">
      <p className="text-sm font-semibold text-yellow-400 mb-4">OFERTA DE 55% EM TODA MODA PRAIA</p>
      <h1 className="text-5xl font-normal text-black mb-9">Descubra Você &<br />Não perca essa oportunidade.</h1>
      <button className="bg-green-800 text-white px-6 py-2 rounded-md hover:bg-gray-700">Compre agora</button>
    </div>
    <div className="header__image relative">
      <a href="https://imgur.com/RH67JPX">
        <img className="" src="https://i.imgur.com/RH67JPX.jpg" style={{ minWidth: '400px', height: '600px' }} alt="Spring Sale" />
      </a>
    </div>
  </div>
  <div className="absolute inset-0 bg-white w-1/2 h-1/2 mx-auto my-auto"></div>
</div>



    </div>
  );
}