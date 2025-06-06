
import React from 'react';
import { Monitor, Calendar } from 'lucide-react';

const CoverSlide = () => {
  return (
    <div className="slide-container">
      <div className="slide-content text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-8 shadow-2xl">
            <div className="flex">
              <Monitor className="h-8 w-8 text-white mr-1" />
              <Calendar className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-6xl font-bold gradient-text mb-4">
            Agendamento para Suporte de T.I
          </h1>
          
          <p className="text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Sistema de Gestão de Atendimentos Técnicos com Integração e Entrega Contínua
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-slate-700 mb-4">Projeto Acadêmico</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Node.js
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                MySQL
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Docker
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Jenkins
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Kubernetes
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverSlide;
