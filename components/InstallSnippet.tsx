// components/InstallSnippet.tsx
'use client';

export default function InstallSnippet() {
  const handleCopy = () => {
    const code = '$ npm install @vigilant/sdk';
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(code).then(
        () => {
          alert('Comando copiado!');
        },
        () => {
          alert(`Não foi possível copiar automaticamente. Copie manualmente: ${code}`);
        },
      );
    } else {
      alert(`Não foi possível copiar automaticamente. Copie manualmente: ${code}`);
    }
  };

  return (
    <div className="pt-8">
      <div className="font-code text-xs text-gray-500 mb-3">INSTALAÇÃO RÁPIDA</div>
      <div className="glass rounded-lg p-4 font-code text-sm border border-blue-900/30">
        <div className="flex items-center justify-between">
          <span className="text-gray-400">$ npm install @vigilant/sdk</span>
          <button
            className="text-blue-400 hover:text-blue-300 transition-colors"
            type="button"
            onClick={handleCopy}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}