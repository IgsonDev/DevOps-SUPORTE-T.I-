
import React from 'react';
import { Users, Calendar, Settings, Database } from 'lucide-react';

const ObjectivesSlide = () => {
  const objectives = [
    {
      icon: Users,
      title: 'Sistema de Login',
      description: 'Autenticação segura de usuários com diferentes níveis de acesso'
    },
    {
      icon: Calendar,
      title: 'Agendamento Inteligente',
      description: 'Gestão eficiente de atendimentos técnicos com controle de disponibilidade'
    },
    {
      icon: Settings,
      title: 'Automação CI/CD',
      description: 'Pipeline automatizado de integração e entrega contínua'
    },
    {
      icon: Database,
      title: 'Gestão de Dados',
      description: 'Armazenamento seguro e eficiente de informações do sistema'
    }
  ];

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text mb-4">
            Objetivos do Projeto
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Desenvolvimento de um sistema completo de suporte técnico com foco em automação e eficiência
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {objectives.map((objective, index) => (
            <div key={index} className="tech-card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <objective.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {objective.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {objective.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              Resultado Esperado
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Um sistema robusto, escalável e automatizado que modernize os processos de suporte técnico,
              proporcionando melhor experiência para usuários e técnicos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectivesSlide;
