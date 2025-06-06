
import React from 'react';
import { Folder, FolderOpen, File } from 'lucide-react';

const RepositorySlide = () => {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text mb-4">
            Estrutura do Repositório
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Organização modular e escalável do código fonte
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="tech-card">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <FolderOpen className="h-5 w-5 text-blue-500" />
              Estrutura de Pastas
            </h3>
            
            <div className="font-mono text-sm bg-slate-50 rounded-lg p-6 space-y-2">
              <div className="flex items-center gap-2">
                <Folder className="h-4 w-4 text-blue-500" />
                <span className="font-semibold">it-support-system/</span>
              </div>
              <div className="ml-6 space-y-1">
                <div className="flex items-center gap-2">
                  <Folder className="h-4 w-4 text-green-500" />
                  <span>frontend/</span>
                </div>
                <div className="ml-6 space-y-1 text-slate-600">
                  <div>├── src/components/</div>
                  <div>├── src/pages/</div>
                  <div>├── src/services/</div>
                  <div>└── public/</div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Folder className="h-4 w-4 text-blue-500" />
                  <span>backend/</span>
                </div>
                <div className="ml-6 space-y-1 text-slate-600">
                  <div>├── src/controllers/</div>
                  <div>├── src/models/</div>
                  <div>├── src/routes/</div>
                  <div>└── src/middleware/</div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Folder className="h-4 w-4 text-purple-500" />
                  <span>database/</span>
                </div>
                <div className="ml-6 space-y-1 text-slate-600">
                  <div>├── migrations/</div>
                  <div>├── seeders/</div>
                  <div>└── scripts/</div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Folder className="h-4 w-4 text-orange-500" />
                  <span>devops/</span>
                </div>
                <div className="ml-6 space-y-1 text-slate-600">
                  <div>├── docker/</div>
                  <div>├── k8s/</div>
                  <div>└── jenkins/</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="tech-card">
              <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <File className="h-4 w-4 text-green-500" />
                Frontend
              </h4>
              <p className="text-sm text-slate-600 mb-3">
                Interface React com TypeScript e Tailwind CSS
              </p>
              <div className="space-y-2 text-xs">
                <div className="bg-slate-50 p-2 rounded">
                  <strong>components/</strong> - Componentes reutilizáveis
                </div>
                <div className="bg-slate-50 p-2 rounded">
                  <strong>pages/</strong> - Páginas da aplicação
                </div>
                <div className="bg-slate-50 p-2 rounded">
                  <strong>services/</strong> - Integração com APIs
                </div>
              </div>
            </div>

            <div className="tech-card">
              <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <File className="h-4 w-4 text-blue-500" />
                Backend
              </h4>
              <p className="text-sm text-slate-600 mb-3">
                API REST com Node.js e Express
              </p>
              <div className="space-y-2 text-xs">
                <div className="bg-slate-50 p-2 rounded">
                  <strong>controllers/</strong> - Lógica de negócio
                </div>
                <div className="bg-slate-50 p-2 rounded">
                  <strong>models/</strong> - Modelos de dados
                </div>
                <div className="bg-slate-50 p-2 rounded">
                  <strong>routes/</strong> - Definição de rotas
                </div>
              </div>
            </div>

            <div className="tech-card">
              <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <File className="h-4 w-4 text-orange-500" />
                DevOps
              </h4>
              <p className="text-sm text-slate-600 mb-3">
                Configurações de infraestrutura e deploy
              </p>
              <div className="space-y-2 text-xs">
                <div className="bg-slate-50 p-2 rounded">
                  <strong>docker/</strong> - Containerização
                </div>
                <div className="bg-slate-50 p-2 rounded">
                  <strong>k8s/</strong> - Orquestração Kubernetes
                </div>
                <div className="bg-slate-50 p-2 rounded">
                  <strong>jenkins/</strong> - Pipeline CI/CD
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepositorySlide;
