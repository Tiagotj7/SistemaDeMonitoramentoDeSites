// components/Footer.tsx
const productLinks = ['Recursos', 'Preços', 'Documentação', 'API'];
const companyLinks = ['Sobre', 'Blog', 'Carreiras', 'Contato'];
const communityLinks = ['GitHub', 'Discord', 'Twitter', 'Status'];
const legalLinks = ['Privacidade', 'Termos', 'Cookies'];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/60 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <span className="font-bold text-xl">Vigilant</span>
            </div>
            <p className="text-sm text-gray-400">
              Monitoramento inteligente de aplicações web para desenvolvedores.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm">Produto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {productLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {companyLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm">Comunidade</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {communityLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2024 Vigilant. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500 mt-4 md:mt-0">
            {legalLinks.map((item) => (
              <a key={item} href="#" className="hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}