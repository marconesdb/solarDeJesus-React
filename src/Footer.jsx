import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-400 py-8">
      <div className="container mx-auto md:flex md:items-center md:justify-between px-4">
        <p className="text-center md:text-left md:ml-4 mb-4 md:mb-0">
          &copy; Instituição Espírita de Caridade Solar de Jesus - 2024 Todos os direitos reservados
        </p>
        <div className="text-center md:text-left">
          <p className="mb-2">
            Endereço: Av. Leonel Beirão de Jesus, 1555, Bairro: Sumaré
            <br />
            CEP: 39402-547 - Montes Claros - MG/BR
          </p>
          <p>CPNJ 21.355.599/0001-56</p>
          <p>Telefone: (38) 3214-2878/

            Alfredo Lorenço: (38) 99979-9996/

            Cláudio Mendes: (38) 99166-0454</p>
        </div>
      </div>
    </footer>
  );
}
