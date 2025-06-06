
import React from 'react';
import { Settings, Database, Monitor, Calendar } from 'lucide-react';

const CICDSlide = () => {
  const pipelineSteps = [
    {
      title: 'Commit',
      description: 'Desenvolvedor faz push no repositório Git',
      icon: '📝',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Build',
      description: 'Jenkins detecta mudanças e inicia build',
      icon: '🏗️',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Test',
      description: 'Execução de testes automatizados',
      icon: '🧪',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      title: 'Deploy',
      description: 'Deploy automático no Kubernetes',
      icon: '🚀',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text mb-4">
            Pipeline CI/CD
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Automação completa com Jenkins e Kubernetes para deploy contínuo
          </p>
        </div>

        {/* Pipeline Flow */}
        <div className="mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Fluxo de Integração Contínua
            </h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              {pipelineSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="tech-card text-center">
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <h4 className="font-bold text-slate-800 mb-2">{step.title}</h4>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </div>
                  
                  {index < pipelineSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <div className="w-6 h-0.5 bg-blue-300"></div>
                      <div className="absolute -right-1 -top-1 w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="tech-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Settings className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Jenkins Pipeline</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-2">Stages</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Checkout do código</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Build da aplicação</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Execução de testes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Build da imagem Docker</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Deploy no Kubernetes</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-2">Triggers</h4>
                <div className="text-sm text-slate-600">
                  <div>• Push no branch main</div>
                  <div>• Pull requests</div>
                  <div>• Scheduled builds (nightly)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="tech-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Database className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Kubernetes Deploy</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-2">Resources</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span>Deployments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span>Services</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span>ConfigMaps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span>Secrets</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span>Ingress</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-2">Features</h4>
                <div className="text-sm text-slate-600">
                  <div>• Rolling updates</div>
                  <div>• Health checks</div>
                  <div>• Auto-scaling</div>
                  <div>• Load balancing</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-8">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
              Benefícios do Pipeline
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">⚡</span>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Velocidade</h4>
                <p className="text-sm text-slate-600">Deploy em minutos, não horas</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">🛡️</span>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Qualidade</h4>
                <p className="text-sm text-slate-600">Testes automatizados garantem qualidade</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">📈</span>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Confiabilidade</h4>
                <p className="text-sm text-slate-600">Rollback automático em caso de falhas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CICDSlide;
