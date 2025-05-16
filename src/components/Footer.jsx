import React, { useState } from 'react';
import './footer.css';
import { FaInstagram, FaDiscord, FaWhatsapp } from 'react-icons/fa';

function Footer() {
    const [activeModal, setActiveModal] = useState(null);

    const openModal = (modalName) => {
        setActiveModal(modalName);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    const handleOutsideClick = (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal();
        }
    };

    return (
        <footer className="footer-container">
           <div className='footer-content'>
                <div className="footer-logo-section">
                    <img src="/public/keyflix.svg" alt="KeyFlix Logo" width={50} height={50} />
                    <h2 className="footer-title">KeyFlix</h2>
                </div>

                <div className="footer-links">
                    <button className="footer-question" onClick={() => openModal('quemSomos')}>
                        Quem somos?
                    </button>
                    <button className="footer-question" onClick={() => openModal('contato')}>
                        Contato
                    </button>
                    <button className="footer-question" onClick={() => openModal('comoFunciona')}>
                        Como funciona a KeyFlix?
                    </button>
                </div>

                <div className="footer-social">
                <h3>Redes Sociais</h3>
                <div className="social-icons">
                    <a href="https://instagram.com/seuPerfil" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="social-icon" />
                    </a>
                    <a href="https://discord.gg/seuConvite" target="_blank" rel="noopener noreferrer">
                        <FaDiscord className="social-icon" />
                    </a>
                    <a href="https://wa.me/seuNumero" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="social-icon"/>
                    </a>
                </div>
            </div>

            </div> 
            

            <div className="footer-bottom">
                <p>&copy; 2025 KeyFlix. Todos os direitos reservados.</p>
            </div>

            {/* Modals */}
            {activeModal === 'quemSomos' && (
                <div className="modal" onClick={handleOutsideClick}>
                    <div className="modal-content">
                        <button className="modal-close" onClick={closeModal}>
                            X
                        </button>
                        <h3 className='modal-title'>Quem somos</h3>
                        <p>
                            A KeyFlix é uma plataforma inovadora que nasceu com o propósito de democratizar o acesso aos melhores serviços digitais do mercado.
                            Nossa missão é oferecer aos nossos clientes as melhores keys de serviços como Spotify Premium, Netflix, YouTube Premium, Prime Video,
                            Crunchyroll e muito mais, sempre com preços acessíveis e competitivos.
                        </p>
                        <br></br>
                        <p>
                            Valorizamos a confiança e a segurança de nossos usuários, por isso garantimos uma experiência de compra simples, rápida e confiável.
                            Além disso, contamos com uma comunidade ativa no Discord, onde você pode tirar dúvidas, aproveitar promoções exclusivas e interagir
                            com outros membros.
                        </p>
                        <br></br>
                        <p>
                            Na KeyFlix, acreditamos que todos merecem acesso a entretenimento de qualidade sem complicações. Estamos comprometidos em oferecer
                            um serviço de excelência, com suporte dedicado e uma equipe pronta para atender você. Venha fazer parte da nossa história e descubra
                            como é fácil economizar enquanto aproveita o melhor do mundo digital!
                        </p>
                    </div>
                </div>
            )}
            {activeModal === 'contato' && (
                <div className="modal" onClick={handleOutsideClick}>
                    <div className="modal-content">
                        <button className="modal-close" onClick={closeModal}>
                            X
                        </button>
                        <h3 className='modal-title'>Contato</h3>
                        <p>Email: contato@keyflix.com</p>
                        <p>Telefone: (11) 99999-9999</p>
                    </div>
                </div>
            )}
            {activeModal === 'comoFunciona' && (
                <div className="modal" onClick={handleOutsideClick}>
                    <div className="modal-content">
                        <button className="modal-close" onClick={closeModal}>
                            X
                        </button>
                        <h3 className='modal-title'>Como funciona a KeyFlix?</h3>
                        <p>
                            A KeyFlix foi criada para simplificar o acesso aos melhores serviços digitais. Nosso processo é rápido, seguro e eficiente:
                        </p>
                        <br />
                        <p>
                            1. Escolha o seu produto: Navegue pela nossa plataforma e selecione a key do serviço digital que você deseja adquirir, como Spotify Premium, Netflix, YouTube Premium, entre outros.
                        </p>
                        <br />
                        <p>
                            2. Receba por e-mail: Após a confirmação do pagamento, enviamos a key diretamente para o seu e-mail cadastrado. Tudo de forma prática e segura.
                        </p>
                        <br />
                        <p>
                            3. Resgate ou acesse: Para serviços que permitem o resgate, você poderá ativar sua key diretamente na plataforma do serviço escolhido. Para aqueles que não possuem essa opção, fornecemos uma conta pronta para você acessar e aproveitar o serviço.
                        </p>
                        <br />
                        <p>
                            Nosso objetivo é garantir que você tenha acesso ao melhor do entretenimento digital sem complicações. Caso tenha dúvidas ou precise de suporte, nossa equipe está sempre pronta para ajudar!
                        </p>
                    </div>
                </div>
            )}
        </footer>
    );
}

export default Footer;