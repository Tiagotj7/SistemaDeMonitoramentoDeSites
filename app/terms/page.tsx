import LegalPage from "@/components/LegalPage/LegalPage";

export default function TermsPage() {
  return (
    <LegalPage title="Termos de Uso" lastUpdate="20/02/2026">
      <h2>1. Quem pode usar</h2>
      <p>Você declara ter capacidade legal para contratar e utilizar os Serviços.</p>

      <h2>2. Descrição do serviço</h2>
      <p>A Vigilant oferece recursos de monitoramento e observabilidade, incluindo:</p>
      <ul>
        <li>Monitoramento de uptime e disponibilidade;</li>
        <li>Latência e performance;</li>
        <li>Verificação de certificados SSL;</li>
      </ul>

      {/* ... continue colando o texto dos termos ... */}
    </LegalPage>
  );
}