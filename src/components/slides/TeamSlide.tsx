
import React from 'react';
import { Monitor, Database, Settings, Code } from 'lucide-react';

const TeamSlide = () => {
  const teams = [
    {
      icon: Monitor,
      title: 'Frontend',
      description: 'Interface de usuário e experiência',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Code,
      title: 'Backend',
      description: 'Lógica de negócio e APIs',
      technologies: ['Node.js', 'Express', 'JWT'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Database,
      title: 'Banco de Dados',
      description: 'Modelagem e persistência',
      technologies: ['MySQL', 'Sequelize', 'Redis'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Settings,
      title: 'DevOps',
      description: 'Infraestrutura e automação',
      technologies: ['Docker', 'Jenkins', 'Kubernetes'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text mb-4">
            Divisão da Equipe
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Organização especializada por área de expertise para máxima eficiência
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {teams.map((team, index) => (
            <div key={index} className="tech-card group">
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${team.color} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <team.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  {team.title}
                </h3>
                
                <p className="text-slate-600 mb-6">
                  {team.description}
                </p>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {team.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              Metodologia Ágil
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Desenvolvimento colaborativo com sprints semanais, daily standups e integração contínua
              entre todas as equipes para garantir qualidade e eficiência.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSlide;
