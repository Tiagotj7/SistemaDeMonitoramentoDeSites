import LegalPage from "@/components/LegalPage/LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage title="Política de Privacidade" lastUpdate="20/02/2026">
      <h2>1. Controlador e Encarregado (DPO)</h2>
      <p>
        <strong>Controlador:</strong> Vigilant Tecnologia Ltda. — [CNPJ], com sede em [Endereço].
      </p>
      <p>
        <strong>Contato do Encarregado (DPO):</strong> tiagotj7dev@gmail.com
      </p>

      <h2>2. Definições (LGPD)</h2>
      <p>Para fins desta política:</p>
      <ul>
        <li><strong>Dado pessoal:</strong> informação relacionada a pessoa natural identificada ou identificável.</li>
        <li><strong>Tratamento:</strong> toda operação com dados pessoais (coleta, uso, armazenamento, etc.).</li>
      </ul>

      <h2>3. Quais dados pessoais coletamos</h2>
      <p>Dependendo de como você usa os Serviços, podemos coletar:</p>
      
      <h3>3.1. Dados de cadastro e conta</h3>
      <ul>
        <li>Nome e/ou nome de usuário;</li>
        <li>E-mail;</li>
        <li>Senha (armazenada de forma criptografada);</li>
      </ul>

      <blockquote>
        <strong>Atenção:</strong> recomendamos que você evite incluir dados pessoais sensíveis em endpoints e logs.
      </blockquote>

      {/* ... continue colando o restante do texto da política ... */}
    </LegalPage>
  );
}