import React, { useEffect } from "react"
import './signup.css'
import { Link } from "react-router-dom";
import menuSwitch from "./menu";

function SignUp() {

    useEffect(() => {
        const btnSignup = document.getElementById('header-options');
        btnSignup.style.display = 'none';

        const telefoneInput = document.getElementById('signup-number');

        telefoneInput.addEventListener('input', function (e) {
            let input = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito

            if (input.length > 11) input = input.slice(0, 11); // Limita a 11 dígitos

            let formatted = input;

            if (input.length > 0) {
                formatted = '(' + input.substring(0, 2);
            }
            if (input.length >= 3) {
                formatted += ') ' + input.substring(2, 7);
            }
            if (input.length >= 8) {
                formatted += '-' + input.substring(7, 11);
            }

            e.target.value = formatted;
        });


    }, []);
    return (
        <>
            <div className='header-container'>
                <div className='header-keyflix'>
                    <div className='header-logo'>
                        <img src="/public/keyflix.svg" alt="" width={30} height={30} id='keyflix-icon' />
                        <h1 className='keyflix-title' id='keyflix-title'>KeyFlix</h1>
                    </div>
                    <div className='header-options' id='header-options'>
                        <Link to="/signup">
                            <button className='btn-header-login'>Cadastre-se ou Faça Login</button>
                        </Link>
                    </div>
                </div>
            </div>

            <section className="section-signup">
                <div className="div-box-signup">
                    <div className="div-title-signup">
                        <h2 className="title-signup">Cadastro KeyFlix</h2>
                    </div>
                    <form action="">
                        <div className="form-signup">

                            <div className="div-inputs-signup">
                                <div className="div-name-user">
                                    <label htmlFor="signup-name" className="label-name">Nome</label>
                                    <input type="text" name="name" id="signup-name" placeholder="Nome" className="inputs-signup" />
                                </div>

                                <div className="div-surname-user">
                                    <label htmlFor="signup-surname" className="label-surname">Sobrenome</label>
                                    <input type="text" name="surname" id="signup-surname" placeholder="Sobrenome" className="inputs-signup" />
                                </div>
                            </div>

                            <div className="div-email-password">
                                <div className="div-email-user">
                                    <label htmlFor="signup-email">E-mail</label>
                                    <input type="email" name="email" id="signup-email" placeholder="E-mail" className="inputs-signup" />
                                </div>

                                <div className="div-number-user">
                                    <label htmlFor="signup-number">Número Telefone</label>
                                    <input type='text' id="signup-number" mask="(99) 99999-9999" placeholder="(99) 99999-9999" maxLength={15}/>
                                </div>
                            </div>

                            <div className="div-password">
                                <label htmlFor="signup-password">Senha</label>
                                <input type="password" name="password" id="signup-password" placeholder="Senha" className="inputs-signup" />

                                <label htmlFor="signup-password-confirm">Confirmar Senha</label>
                                <input type="password" name="password" id="signup-password-confirm" placeholder="Digite a senha novamente" className="inputs-signup" />
                            </div>
                        </div>
                    </form>
                </div>
            </section>

        </>
    )
}

export default SignUp;