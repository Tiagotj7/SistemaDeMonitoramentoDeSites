// components/Hero.tsx
import InstallSnippet from './InstallSnippet';
import DashboardMockup from './DashboardMockup';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-blue-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 border border-blue-500/20">
              <div className="w-2 h-2 rounded-full bg-green-500 status-dot" />
              <span className="font-code text-xs text-blue-200">
                Sistema Operacional • Uptime 99.99%
              </span>
            </div>

            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
                Monitore Tudo.
                <br />
                <span className="gradient-text glow-text">Sempre Vigilante.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl">
                Plataforma de monitoramento em tempo real para aplicações web. Ping, uptime, SSL,
                performance e analytics em um único dashboard.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all flex items-center justify-center space-x-2">
                <span>Iniciar Monitoramento</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="glass px-8 py-4 rounded-lg font-semibold text-white hover:bg-white/10 transition-all neon-border">
                Ver Demo ao Vivo
              </button>
            </div>

            <InstallSnippet />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800">
              <div>
                <div className="text-3xl font-bold font-code text-white mb-1">15+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Regiões Globais</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-code text-white mb-1">500ms</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Resposta Média</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-code text-white mb-1">24/7</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Suporte Ativo</div>
              </div>
            </div>
          </div>

          {/* Right */}
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}