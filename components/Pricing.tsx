// components/Pricing.tsx
const starterItems = [
  '5 sites monitorados',
  'Verificação a cada 5 minutos',
  'Alertas por email',
  'Histórico de 7 dias',
];

const proItems = [
  '50 sites monitorados',
  'Verificação a cada 1 minuto',
  'Slack, Discord, Webhooks',
  'Histórico de 90 dias',
  'API Access',
];

const enterpriseItems = [
  'Sites ilimitados',
  'Verificação a cada 30 segundos',
  'Suporte prioritário 24/7',
  'Histórico ilimitado',
  'SSO & Audit Logs',
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Planos Transparentes</h2>
          <p className="text-gray-400 text-lg">Escolha o plano ideal para seu projeto</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter */}
          <div className="glass rounded-xl p-8 neon-border">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold font-code">R$0</span>
                <span className="text-gray-500 ml-2">/mês</span>
              </div>
              <p className="text-sm text-gray-400 mt-2">Perfeito para projetos pessoais</p>
            </div>
            <ul className="space-y-3 mb-8">
              {starterItems.map((item) => (
                <li key={item} className="flex items-center text-sm">
                  <svg
                    className="w-5 h-5 text-green-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 border border-gray-700 rounded-lg hover:bg-white/5 transition-all text-sm font-medium">
              Começar Grátis
            </button>
          </div>

          {/* Pro */}
          <div className="glass rounded-xl p-8 border-2 border-blue-500/50 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs px-4 py-1 rounded-full font-bold">
              POPULAR
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Pro</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold font-code text-blue-400">R$49</span>
                <span className="text-gray-500 ml-2">/mês</span>
              </div>
              <p className="text-sm text-gray-400 mt-2">Para desenvolvedores sérios</p>
            </div>
            <ul className="space-y-3 mb-8">
              {proItems.map((item) => (
                <li key={item} className="flex items-center text-sm">
                  <svg
                    className="w-5 h-5 text-green-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition-all text-sm font-medium glow-blue">
              Upgrade para Pro
            </button>
          </div>

          {/* Enterprise */}
          <div className="glass rounded-xl p-8 neon-border">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold font-code">Custom</span>
              </div>
              <p className="text-sm text-gray-400 mt-2">Para equipes e empresas</p>
            </div>
            <ul className="space-y-3 mb-8">
              {enterpriseItems.map((item) => (
                <li key={item} className="flex items-center text-sm">
                  <svg
                    className="w-5 h-5 text-green-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 border border-gray-700 rounded-lg hover:bg-white/5 transition-all text-sm font-medium">
              Falar com Vendas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}