
import React from 'react';
import { Monitor, Database, Settings, Users } from 'lucide-react';

const ArchitectureSlide = () => {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text mb-4">
            Arquitetura da Solução
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Visão geral da arquitetura distribuída e pipeline de desenvolvimento
          </p>
        </div>

        <div className="space-y-8">
          {/* Architecture Diagram */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Frontend */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Monitor className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Frontend</h3>
                <p className="text-sm text-slate-600 mb-3">React + TypeScript</p>
                <div className="space-y-1 text-xs text-slate-500">
                  <div>• Interface responsiva</div>
                  <div>• Login de usuários</div>
                  <div>• Agendamento</div>
                </div>
              </div>

              {/* Backend */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Backend</h3>
                <p className="text-sm text-slate-600 mb-3">Node.js + Express</p>
                <div className="space-y-1 text-xs text-slate-500">
                  <div>• API RESTful</div>
                  <div>• Autenticação JWT</div>
                  <div>• Lógica de negócio</div>
                </div>
              </div>

              {/* Database */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Banco de Dados</h3>
                <p className="text-sm text-slate-600 mb-3">MySQL</p>
                <div className="space-y-1 text-xs text-slate-500">
                  <div>• Dados estruturados</div>
                  <div>• Relacionamentos</div>
                  <div>• Backup automático</div>
                </div>
              </div>

              {/* DevOps */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">DevOps</h3>
                <p className="text-sm text-slate-600 mb-3">Docker + K8s</p>
                <div className="space-y-1 text-xs text-slate-500">
                  <div>• Containerização</div>
                  <div>• Orquestração</div>
                  <div>• Monitoramento</div>
                </div>
              </div>
            </div>

            {/* Connection arrows */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-4 text-slate-400">
                <div className="w-8 h-0.5 bg-slate-300"></div>
                <span className="text-xs">HTTP/REST</span>
                <div className="w-8 h-0.5 bg-slate-300"></div>
                <span className="text-xs">SQL</span>
                <div className="w-8 h-0.5 bg-slate-300"></div>
                <span className="text-xs">CI/CD</span>
                <div className="w-8 h-0.5 bg-slate-300"></div>
              </div>
            </div>
          </div>

          {/* Architecture Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="tech-card">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Fluxo de Dados</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                  <span>Usuário acessa interface React</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                  <span>Frontend faz chamadas à API REST</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                  <span>Backend processa e acessa o banco</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                  <span>Resposta retorna ao cliente</span>
                </div>
              </div>
            </div>

            <div className="tech-card">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Infraestrutura</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 flex-shrink-0" />
                  <span>Containers Docker para isolamento</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 flex-shrink-0" />
                  <span>Kubernetes para orquestração</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 flex-shrink-0" />
                  <span>Jenkins para automação CI/CD</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 flex-shrink-0" />
                  <span>Load balancer para alta disponibilidade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureSlide;
