import React from 'react'
import './principal.css'
import { Link } from 'react-router-dom'
import loginModal from './login'

function Home() {

  return (
    <>
      
      <div className='header-container'>
        <div className='header-keyflix'>
          <div className='header-logo'>
            <img src="/public/keyflix.svg" alt="" width={30} height={30} id='keyflix-icon' />
            <h1 className='keyflix-title' id='keyflix-title'>KeyFlix</h1>
          </div>
          <div className='header-options'>
                <button className='btn-header-login' onClick={loginModal}>Cadastre-se ou Faça Login</button>
          </div>
        </div>
      </div>
      
      <section className='KeyFlix'>
        <div className='principal-container'>
          <h1 className='principal-title'>Aqui você encontra as melhores keys de diversos serviços pelo melhor preço!</h1>
          <p className='principal-description'>Temos keys de Spotify Premium, Prime Video, Youtube Premium, Netflix, Crunchyroll e muito mais!</p>
          <p className='principal-description-2'>Aproveite as ofertas fazendo parte de nossa comunidade no Discord!</p>
        </div>
      </section>

      <form action="">
            <section className='Login-modal' id='login-modal'>
                <div className='login-container'>
                    <div className="login-close">
                            <button className='btn-login-close' id='btn-close'>X</button>
                    </div>
                
                    <h1 className='login-title'>KeyFlix Login</h1>
                    <p className='login-description'>Faça login para acessar sua conta, ou cadastre-se!</p>
                    <div className='login-inputs'>
                        <label htmlFor="">E-mail:
                            <input type="text" placeholder='Digite seu E-mail' className='login-input'/>
                        </label>
                        <label htmlFor="">Senha:
                            <input type="password" placeholder='Digite sua Senha' className='login-input'/>
                        </label>
                        <div className='login-checkbox'>
                            <input type="checkbox" className='login-checkbox'/>
                            <label htmlFor="">Manter-me conectado</label>
                        </div>
                        
                    </div>
                        <button className='btn-login'>Entrar</button>
                        
                          <p className='login-description-2'>Não tem uma conta? <Link to="/signup">Crie uma agora! </Link></p>
                       
                    </div>
            </section>
            </form>

    </>
  )
}

export default Home;