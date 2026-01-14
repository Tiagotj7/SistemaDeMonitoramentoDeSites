// components/Features.tsx
export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Recursos Poderosos</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tudo que você precisa para manter suas aplicações online e performáticas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="glass neon-border rounded-xl p-8 group">
            <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4 feature-icon">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Monitoramento em Tempo Real</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Receba atualizações instantâneas via WebSocket. Veja mudanças de status ao vivo sem
              refresh.
            </p>
            <div className="mt-4 flex items-center text-sm font-code text-blue-400">
              <span>Latência &lt; 100ms</span>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="glass neon-border rounded-xl p-8 group">
            <div className="w-12 h-12 bg-green-600/10 rounded-lg flex items-center justify-center mb-4 feature-icon">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Uptime 99.9%</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Infraestrutura redundante em múltiplas regiões garante disponibilidade máxima.
            </p>
            <div className="mt-4 flex items-center text-sm font-code text-green-400">
              <span>SLA Garantido</span>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="glass neon-border rounded-xl p-8 group">
            <div className="w-12 h-12 bg-purple-600/10 rounded-lg flex items-center justify-center mb-4 feature-icon">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Alertas Inteligentes</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Configure notificações via Slack, Discord, Email ou Webhook. Você escolhe quando e
              como ser notificado.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="px-2 py-1 bg-purple-900/20 rounded text-xs text-purple-300">Slack</span>
              <span className="px-2 py-1 bg-purple-900/20 rounded text-xs text-purple-300">
                Discord
              </span>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="glass neon-border rounded-xl p-8 group">
            <div className="w-12 h-12 bg-yellow-600/10 rounded-lg flex items-center justify-center mb-4 feature-icon">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Verificação SSL</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Monitore certificados SSL/TLS. Receba alertas antes da expiração.
            </p>
            <div className="mt-4 flex items-center text-sm font-code text-yellow-400">
              <span>Auto-renewal check</span>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="glass neon-border rounded-xl p-8 group">
            <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4 feature-icon">
              <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Analytics Avançado</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Métricas detalhadas de performance, Core Web Vitals, e tempo de resposta por região.
            </p>
            <div className="mt-4 flex items-center text-sm font-code text-red-400">
              <span>Dashboard customizável</span>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="glass neon-border rounded-xl p-8 group">
            <div className="w-12 h-12 bg-cyan-600/10 rounded-lg flex items-center justify-center mb-4 feature-icon">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">API RESTful</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Integre facilmente com seus sistemas existentes. Documentação completa e SDKs
              oficiais.
            </p>
            <div className="mt-4 glass rounded px-3 py-1 font-code text-xs text-cyan-400">
              GET /api/v1/sites
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}