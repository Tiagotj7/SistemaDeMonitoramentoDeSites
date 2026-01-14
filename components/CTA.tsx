// components/CTA.tsx
export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para Começar?</h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Junte-se a milhares de desenvolvedores que confiam no Vigilant para manter suas
          aplicações online
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-gray-200 transition-all text-lg">
            Criar Conta Grátis
          </button>
          <button className="glass px-8 py-4 rounded-lg font-bold text-white hover:bg-white/10 transition-all neon-border text-lg">
            Agendar Demo
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-6">
          Sem cartão de crédito • Setup em 2 minutos
        </p>
      </div>
    </section>
  );
}