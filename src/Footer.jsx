import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-400 py-8">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <p className="text-center md:text-left">
          &copy; Instituição Espírita de Caridade Solar de Jesus - 2024 Todos os direitos reservados
        </p>
        <div className="mt-4 md:mt-0">
          <p className="text-center md:text-left">
            Endereço: Av. Leonel Beirão de Jesus, 1555, Bairro: Sumaré
            <br />
            CEP: 39402-547 - Montes Claros - MG/BR
          </p>
          <p className="text-center md:text-left">CPNJ 21.355.599/0001-56</p>
        </div>
      </div>
    </footer>
  );
}
