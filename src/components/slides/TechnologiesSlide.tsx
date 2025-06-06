
import React from 'react';

const TechnologiesSlide = () => {
  const technologies = [
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', description: 'Runtime JavaScript para servidor' },
        { name: 'Express', description: 'Framework web minimalista e flexível' }
      ]
    },
    {
      category: 'Banco de Dados',
      items: [
        { name: 'MySQL', description: 'Sistema de gerenciamento de banco relacional' },
        { name: 'Sequelize', description: 'ORM para Node.js com suporte a MySQL' }
      ]
    },
    {
      category: 'Containerização',
      items: [
        { name: 'Docker', description: 'Plataforma de containerização de aplicações' },
        { name: 'Docker Compose', description: 'Ferramenta para definir aplicações multi-container' }
      ]
    },
    {
      category: 'CI/CD & Orquestração',
      items: [
        { name: 'Jenkins', description: 'Servidor de automação para CI/CD' },
        { name: 'Kubernetes', description: 'Orquestração de containers em produção' }
      ]
    }
  ];

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text mb-4">
            Tecnologias Utilizadas
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stack moderno e robusto para desenvolvimento e deploy escalável
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {technologies.map((category, index) => (
            <div key={index} className="tech-card">
              <h3 className="text-xl font-bold text-slate-800 mb-6 pb-3 border-b border-slate-200">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.items.map((tech, techIndex) => (
                  <div key={techIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">
                        {tech.name}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                Arquitetura Cloud-Native
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto mb-6">
                Infraestrutura moderna preparada para escalabilidade horizontal e alta disponibilidade
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-700 shadow-sm">
                  Microserviços
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-700 shadow-sm">
                  API RESTful
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-700 shadow-sm">
                  Auto-scaling
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-700 shadow-sm">
                  Load Balancing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSlide;
