import React from "react"
import './signup.css'
import { Link } from "react-router-dom";
import menuSwitch from "./menu";

function SignUp () {
    return(
        <>
            <div className='header-container'>
                    <div className='header-keyflix'>
                      <div className='header-logo'>
                        <img src="/public/keyflix.svg" alt="" width={30} height={30} id='keyflix-icon' />
                        <h1 className='keyflix-title' id='keyflix-title'>KeyFlix</h1>
                      </div>
                      <div className='header-options'>
                        <Link to="/signup">
                            <button className='btn-header-login'>Cadastre-se ou Faça Login</button>
                        </Link>
                      </div>
                    </div>
            </div>

            <section className="section-signup">
                <div className="div-box-signup">
                <div className="div-title-signup">
                    <h2>Cadastro KeyFlix</h2>
                </div>
                <form action="">
                    <div className="form-signup">
                        <label htmlFor="">Nome</label>
                        <input type="text" name="name" id="signup-name" placeholder="Nome" className="inputs-signup" />

                        <label htmlFor="">Sobrenome</label>
                        <input type="text" name="surname" id="signup-surname" placeholder="Sobrenome" className="inputs-signup" />
                        
                        <label htmlFor="">E-mail</label>
                        <input type="email" name="email" id="signup-email" placeholder="E-mail" className="inputs-signup"/>

                           

                            
                        
                    </div>
                </form>
                </div>
            </section>
                
        </>
    )
}

export default SignUp;