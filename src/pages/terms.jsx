import { React, useState, useEffect } from 'react'
import './terms.css';
import Loading from '../components/Loading';

function Terms() {
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "KeyFlix - Termos e Condições";

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="terms-container">
      <h1 className="terms-title">Termos e Condições</h1>
      <div className="terms-content">
        <section>
          <h2>1. Introdução</h2>
          <p>
            Bem-vindo à KeyFlix! Ao utilizar nossos serviços, você concorda com os seguintes Termos e Condições. Por favor, leia-os com atenção antes de se cadastrar ou utilizar nossa plataforma.
          </p>
        </section>

        <section>
          <h2>2. Coleta de Dados</h2>
          <p>
            Durante o processo de cadastro e utilização de nossos serviços, coletamos informações pessoais, como:
          </p>
          <ul>
            <li>Nome completo</li>
            <li>Endereço de e-mail</li>
            <li>Número de telefone</li>
            <li>Endereço completo (rua, cidade, estado e CEP)</li>
            <li>Data de nascimento</li>
          </ul>
          <p>
            Esses dados são necessários para garantir a entrega dos serviços contratados e para manter a segurança de sua conta.
          </p>
        </section>

        <section>
          <h2>3. Finalidade do Uso dos Dados</h2>
          <p>
            Utilizamos os dados coletados para as seguintes finalidades:
          </p>
          <ul>
            <li>Processar e entregar as keys adquiridas.</li>
            <li>Enviar notificações relacionadas ao seu pedido ou conta.</li>
            <li>Oferecer suporte técnico e atendimento ao cliente.</li>
            <li>Melhorar nossos serviços e personalizar sua experiência na plataforma.</li>
            <li>Enviar promoções e ofertas exclusivas, caso você tenha autorizado.</li>
          </ul>
        </section>

        <section>
          <h2>4. Compartilhamento de Dados</h2>
          <p>
            A KeyFlix não compartilha suas informações pessoais com terceiros, exceto quando necessário para:
          </p>
          <ul>
            <li>Processamento de pagamentos por meio de parceiros confiáveis.</li>
            <li>Cumprir obrigações legais ou regulatórias.</li>
            <li>Proteger os direitos e a segurança da KeyFlix e de seus usuários.</li>
          </ul>
        </section>

        <section>
          <h2>5. Segurança</h2>
          <p>
            Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum sistema é completamente seguro, e não podemos garantir a segurança absoluta de seus dados.
          </p>
        </section>

        <section>
          <h2>6. Direitos do Usuário</h2>
          <p>
            Você tem o direito de:
          </p>
          <ul>
            <li>Acessar, corrigir ou excluir suas informações pessoais.</li>
            <li>Solicitar a interrupção do envio de comunicações promocionais.</li>
            <li>Revogar seu consentimento para o uso de dados, quando aplicável.</li>
          </ul>
          <p>
            Para exercer seus direitos, entre em contato conosco pelo e-mail <strong>contato@keyflix.com</strong>.
          </p>
        </section>

        <section>
          <h2>7. Alterações nos Termos</h2>
          <p>
            A KeyFlix pode atualizar estes Termos e Condições periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre quaisquer alterações.
          </p>
        </section>

        <section>
          <h2>8. Contato</h2>
          <p>
            Caso tenha dúvidas ou preocupações sobre nossos Termos e Condições, entre em contato conosco pelo e-mail <strong>contato@keyflix.com</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Terms;