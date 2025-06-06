
import React from 'react';
import { Monitor, Calendar, Users, Settings } from 'lucide-react';

const SystemScreensSlide = () => {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text mb-4">
            Telas do Sistema
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Interface intuitiva e moderna para gestão de suporte técnico
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Login Screen */}
          <div className="tech-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Users className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Tela de Login</h3>
            </div>
            
            <div className="bg-slate-50 rounded-lg p-6 mb-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-2"></div>
                  <h4 className="font-semibold text-slate-800">Sistema T.I</h4>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-slate-600 mb-1">Email</div>
                    <div className="w-full h-8 bg-slate-100 rounded border"></div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-600 mb-1">Senha</div>
                    <div className="w-full h-8 bg-slate-100 rounded border"></div>
                  </div>
                  <div className="w-full h-8 bg-blue-500 rounded text-white text-xs flex items-center justify-center">
                    Entrar
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Autenticação JWT segura</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Diferentes perfis de usuário</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Recuperação de senha</span>
              </div>
            </div>
          </div>

          {/* Scheduling Screen */}
          <div className="tech-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <Calendar className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Agendamento</h3>
            </div>
            
            <div className="bg-slate-50 rounded-lg p-6 mb-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="grid grid-cols-7 gap-1 mb-3">
                  {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, i) => (
                    <div key={i} className="text-xs text-center text-slate-600 p-1">{day}</div>
                  ))}
                  {Array.from({length: 14}, (_, i) => (
                    <div key={i} className={`text-xs text-center p-1 rounded ${
                      i === 8 ? 'bg-blue-500 text-white' : 'text-slate-600'
                    }`}>
                      {i + 1}
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <div className="text-xs text-slate-600">Horários disponíveis:</div>
                  <div className="grid grid-cols-3 gap-1">
                    <div className="text-xs bg-green-100 text-green-800 p-1 rounded text-center">09:00</div>
                    <div className="text-xs bg-green-100 text-green-800 p-1 rounded text-center">14:00</div>
                    <div className="text-xs bg-slate-100 text-slate-500 p-1 rounded text-center">16:00</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Calendário interativo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Horários em tempo real</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Notificações automáticas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="tech-card">
            <div className="flex items-center gap-3 mb-4">
              <Monitor className="h-5 w-5 text-blue-500" />
              <h4 className="font-semibold text-slate-800">Dashboard Admin</h4>
            </div>
            <p className="text-sm text-slate-600 mb-3">
              Painel completo para gestão de atendimentos, usuários e relatórios
            </p>
            <div className="space-y-1 text-xs text-slate-500">
              <div>• Estatísticas em tempo real</div>
              <div>• Gestão de técnicos</div>
              <div>• Relatórios de performance</div>
            </div>
          </div>

          <div className="tech-card">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="h-5 w-5 text-purple-500" />
              <h4 className="font-semibold text-slate-800">Configurações</h4>
            </div>
            <p className="text-sm text-slate-600 mb-3">
              Personalização completa do sistema e preferências do usuário
            </p>
            <div className="space-y-1 text-xs text-slate-500">
              <div>• Perfis personalizáveis</div>
              <div>• Notificações configuráveis</div>
              <div>• Temas e preferências</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemScreensSlide;
