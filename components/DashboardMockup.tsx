// components/DashboardMockup.tsx
import LatencyChart from './LatencyChart';

export default function DashboardMockup() {
  return (
    <div className="relative">
      <div className="scan-line" />

      <div className="terminal rounded-xl overflow-hidden relative">
        {/* Header */}
        <div className="bg-black/40 px-4 py-3 border-b border-gray-800 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="font-code text-xs text-gray-500">vigilant-dashboard.tsx</div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-500 pulse-ring" />
            <span className="font-code text-xs text-green-400">LIVE</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass rounded-lg p-4 metric-card">
              <div className="flex justify-between items-start mb-2">
                <div className="text-xs text-gray-500 font-code">UPTIME</div>
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              <div className="text-2xl font-bold font-code text-green-400">99.98%</div>
              <div className="text-xs text-gray-600 mt-1">Últimos 30 dias</div>
            </div>

            <div className="glass rounded-lg p-4 metric-card">
              <div className="flex justify-between items-start mb-2">
                <div className="text-xs text-gray-500 font-code">PING</div>
                <div className="w-2 h-2 rounded-full bg-blue-500" />
              </div>
              <div className="text-2xl font-bold font-code text-blue-400">24ms</div>
              <div className="text-xs text-gray-600 mt-1">Média global</div>
            </div>

            <div className="glass rounded-lg p-4 metric-card">
              <div className="flex justify-between items-start mb-2">
                <div className="text-xs text-gray-500 font-code">REQUISIÇÕES</div>
                <div className="w-2 h-2 rounded-full bg-purple-500" />
              </div>
              <div className="text-2xl font-bold font-code text-purple-400">1.2M</div>
              <div className="text-xs text-gray-600 mt-1">Este mês</div>
            </div>

            <div className="glass rounded-lg p-4 metric-card">
              <div className="flex justify-between items-start mb-2">
                <div className="text-xs text-gray-500 font-code">SSL</div>
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              <div className="text-2xl font-bold font-code text-green-400">89d</div>
              <div className="text-xs text-gray-600 mt-1">Válido até</div>
            </div>
          </div>

          {/* Live Activity */}
          <div className="glass rounded-lg p-4">
            <div className="text-xs text-gray-500 font-code mb-3">ATIVIDADE AO VIVO</div>
            <div className="space-y-2 font-code text-xs">
              <div className="flex items-center text-gray-400">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">[10:42:18]</span>
                <span className="ml-2">us-east-1</span>
                <span className="text-green-400 ml-auto">12ms</span>
              </div>
              <div className="flex items-center text-gray-400">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">[10:42:17]</span>
                <span className="ml-2">eu-west-1</span>
                <span className="text-green-400 ml-auto">45ms</span>
              </div>
              <div className="flex items-center text-gray-400">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">[10:42:16]</span>
                <span className="ml-2">ap-south-1</span>
                <span className="text-green-400 ml-auto">67ms</span>
              </div>
              <div className="flex items-center text-blue-400 animate-pulse">
                <span className="mr-2">▶</span>
                <span className="text-gray-600">[10:42:19]</span>
                <span className="ml-2">Verificando...</span>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="glass rounded-lg p-4">
            <div className="text-xs text-gray-500 font-code mb-3">LATÊNCIA (24H)</div>
            <LatencyChart />
          </div>
        </div>
      </div>

      {/* Floating Alert */}
      <div className="absolute -bottom-6 -left-6 glass rounded-lg p-4 max-w-xs border border-green-500/30 hidden md:block">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
            <svg
              className="w-4 h-4 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-semibold text-white mb-1">Tudo Operacional</div>
            <div className="text-xs text-gray-400">
              Todos os sistemas estão funcionando normalmente
            </div>
            <div className="text-xs text-gray-600 font-code mt-2">há 2 segundos</div>
          </div>
        </div>
      </div>
    </div>
  );
}