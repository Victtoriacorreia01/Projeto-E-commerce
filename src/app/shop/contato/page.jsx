'use client'

import { useState } from 'react';
import Logo from "../../../assets/logo.png";
import Image from "next/image";


export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', number: '', message: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [showResponseBox, setShowResponseBox] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Nome é obrigatório';
    if (!formData.email) tempErrors.email = 'Email é obrigatório';
    if (!formData.number) tempErrors.number = 'Número é obrigatório';
    if (!formData.message) tempErrors.message = 'Mensagem é obrigatória';
    return tempErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tempErrors = validate();
    if (Object.keys(tempErrors).length === 0) {
      setLoading(true);
      try {
        const res = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        const result = await res.json();
        if (res.ok) {
          setResponseMessage(result.message);
        } else {
          setResponseMessage(result.error || 'Erro ao enviar e-mail');
        }
        setFormData({ name: '', email: '', number: '', message: '' }); // Limpar os campos do formulário
        setErrors({}); // Limpar os erros
      } catch (error) {
        setResponseMessage('Erro ao enviar e-mail');
      } finally {
        setLoading(false);
        setShowResponseBox(true);
      }
    } else {
      setErrors(tempErrors);
    }
  };

  const handleOkClick = () => {
    setShowResponseBox(false);
    setFormData({ name: '', email: '', number: '', message: '' }); // Limpar os campos do formulário
    setErrors({}); // Limpar os erros
  };

  return (
    <div className="relative">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
        </div>
      )}
      {showResponseBox && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-md shadow-md text-center">
            <p>{responseMessage}</p>
            <button onClick={handleOkClick} className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md">
              OK
            </button>
          </div>
        </div>
      )}
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5">
                <div className="mt-[-30px]">
                  <Image
                    className="text-orange-600"
                    src={Logo}
                    style={{ width: '150px', height: 'auto' }}
                    alt="Logo da Empresa"
                  />
                </div>
                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                  <h2 className="leading-relaxed">Entre em contato</h2>
                  <p className="text-sm text-gray-500 font-normal leading-relaxed">
                    Envie-nos uma mensagem e responderemos em breve!
                  </p>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="flex flex-col">
                      <label className="leading-loose">Nome</label>
                      <input 
                        type="text" 
                        className="px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500" 
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      {errors.name && <span className="text-red-500">{errors.name}</span>}
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Email</label>
                      <input 
                        type="email" 
                        className="px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500" 
                        placeholder="Seu email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      {errors.email && <span className="text-red-500">{errors.email}</span>}
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Número</label>
                      <input 
                        type="text" 
                        className="px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500" 
                        placeholder="Seu número"
                        value={formData.number}
                        onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                      />
                      {errors.number && <span className="text-red-500">{errors.number}</span>}
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Mensagem</label>
                      <textarea 
                        rows="4" 
                        className="px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500" 
                        placeholder="Sua mensagem"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                      {errors.message && <span className="text-red-500">{errors.message}</span>}
                    </div>
                    <div className="flex items-center space-x-4">
                      <button 
                        type="submit" 
                        className="bg-pink-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-indigo-600"
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
