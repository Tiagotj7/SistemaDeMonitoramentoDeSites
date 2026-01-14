// components/HowItWorks.tsx
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-black/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Como Funciona</h2>
          <p className="text-gray-400 text-lg">Configure em minutos, monitore para sempre</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
              <span className="text-2xl font-bold font-code text-blue-400">1</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Adicione seu Site</h3>
            <p className="text-sm text-gray-400">Cole a URL e configure intervalos de verificação</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
              <span className="text-2xl font-bold font-code text-blue-400">2</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Conecte Integrações</h3>
            <p className="text-sm text-gray-400">
              Slack, Discord, Email ou Webhooks customizados
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
              <span className="text-2xl font-bold font-code text-blue-400">3</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Monitore em Tempo Real</h3>
            <p className="text-sm text-gray-400">
              Dashboard atualizado ao vivo com WebSockets
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
              <span className="text-2xl font-bold font-code text-blue-400">4</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Receba Alertas</h3>
            <p className="text-sm text-gray-400">
              Notificações instantâneas quando algo falhar
            </p>
          </div>
        </div>

        {/* Code example */}
        <div className="mt-16 glass rounded-xl p-8 max-w-3xl mx-auto neon-border">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Exemplo de Código</h4>
              <p className="text-gray-400 text-sm mb-4">
                Integre o Vigilant em sua aplicação com poucas linhas de código:
              </p>
              <div className="bg-black/60 rounded-lg p-4 font-code text-sm overflow-x-auto">
                <pre className="text-gray-300">
                  <code>
                    <span className="text-purple-400">import</span> {'{ Vigilant }'}{' '}
                    <span className="text-purple-400">from</span>{' '}
                    <span className="text-green-400">'@vigilant/sdk'</span>;
                    {'\n\n'}
                    <span className="text-blue-400">const</span> monitor ={' '}
                    <span className="text-purple-400">new</span>{' '}
                    <span className="text-yellow-400">Vigilant</span>({'{'}
                    {'\n'} {'  '}apiKey:{' '}
                    <span className="text-green-400">'your-api-key'</span>,
                    {'\n'} {'  '}site:{' '}
                    <span className="text-green-400">'https://yoursite.com'</span>
                    {'\n'}
                    {'});'}
                    {'\n\n'}
                    <span className="text-gray-500">// Iniciar monitoramento</span>
                    {'\n'}monitor.<span className="text-yellow-400">start</span>();
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}