// components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-blue-600 rounded-lg blur opacity-50" />
              <div className="relative w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
            </div>
            <span className="font-bold text-xl tracking-tight">
              <span className="text-white">Vigilant</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">
              Recursos
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Como Funciona
            </a>
            <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">
              Preços
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Documentação
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              Entrar
            </a>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all glow-blue">
              Começar Grátis
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}