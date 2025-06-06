
import React from 'react';
import { Calendar, Settings, Database, Monitor } from 'lucide-react';

const ConclusionSlide = () => {
  const achievements = [
    {
      icon: Monitor,
      title: 'Interface Moderna',
      description: 'Sistema web responsivo e intuitivo'
    },
    {
      icon: Calendar,
      title: 'Agendamento Eficiente',
      description: 'Gestão automatizada de atendimentos'
    },
    {
      icon: Database,
      title: 'Arquitetura Robusta',
      description: 'Infraestrutura escalável e segura'
    },
    {
      icon: Settings,
      title: 'DevOps Moderno',
      description: 'Pipeline CI/CD totalmente automatizado'
    }
  ];

  const nextSteps = [
    'Implementação de notificações em tempo real',
    'Sistema de avaliação de atendimentos',
    'Dashboard analytics avançado',
    'Integração com sistemas externos',
    'App mobile para técnicos',
    'IA para otimização de agendamentos'
  ];

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text mb-4">
            Conclusão e Próximos Passos
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Resultado alcançado e visão para evolução contínua do sistema
          </p>
        </div>

        {/* Achievements */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Objetivos Alcançados
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="tech-card text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Project Impact */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="tech-card">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Impacto do Projeto
            </h3>
            
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">
                  ✅ Eficiência Operacional
                </h4>
                <p className="text-sm text-green-700">
                  Redução significativa no tempo de agendamento e gestão de atendimentos
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">
                  ✅ Experiência do Usuário
                </h4>
                <p className="text-sm text-blue-700">
                  Interface moderna e intuitiva, melhorando a satisfação dos usuários
                </p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2">
                  ✅ Escalabilidade
                </h4>
                <p className="text-sm text-purple-700">
                  Arquitetura preparada para crescimento e alta demanda
                </p>
              </div>
            </div>
          </div>

          <div className="tech-card">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Próximos Passos
            </h3>
            
            <div className="space-y-3">
              {nextSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-600">{index + 1}</span>
                  </div>
                  <span className="text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 shadow-xl text-white">
            <h3 className="text-3xl font-bold mb-4">
              Obrigado!
            </h3>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Sistema de Suporte T.I: Modernização completa com tecnologias de ponta
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">
                Node.js + React
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full">
                MySQL + Docker
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full">
                Jenkins + Kubernetes
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full">
                CI/CD Pipeline
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConclusionSlide;
