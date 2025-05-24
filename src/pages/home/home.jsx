import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../principal.css'
import { Link } from 'react-router-dom'
import loginModal from '../../components/login'
import Footer from '../../components/Footer'
import Loading from '../../components/Loading'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [modalBorder, setModalBorder] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "KeyFlix - Home";
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:9000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setErrorMessage('');
        setModalBorder('');
        setShowSuccessModal(true);

        // Armazena os dados do usuário no localStorage
        localStorage.setItem('user', JSON.stringify({ 
          name: data.UserName,
          surname: data.UserSurname,
          email: data.UserEmail,
          phone: data.UserPhone,
          cep: data.UserCEP,
          address: data.UserAddress,
          number: data.UserNumber,
          complement: data.UserComplement,
          city: data.UserCity,
          state: data.UserState,
          birthdate: data.UserBirthdate,
          keys: data.UserKeys }));

        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      } else {
        setErrorMessage(data.error);
        setModalBorder('red');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setErrorMessage('Erro ao conectar com o servidor.');
      setModalBorder('red');
    }
  };

  if (isLoading) {
    return <Loading />;
  }

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

      <form onSubmit={handleSubmit}>
        <section className='Login-modal' id='login-modal'>
          <div className="login-container">
            <div className="login-close">
              <button className="btn-login-close" id="btn-close">
                X
              </button>
            </div>

            <h1 className="login-title">KeyFlix Login</h1>
            <p className="login-description">Faça login para acessar sua conta, ou cadastre-se!</p>
            <div className="login-inputs">
              <label htmlFor="" className="label-email">
                E-mail:
                <input
                  type="text"
                  placeholder="Digite seu E-mail"
                  className="login-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label htmlFor="" className="label-senha">
                Senha:
                <div className="password-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Digite sua Senha"
                    className="login-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <Visibility style={{ fontSize: '20px' }} /> 
                    ) : (
                      <VisibilityOff style={{ fontSize: '20px' }} />
                    )}
                  </button>
                </div>
              </label>
              {errorMessage && <p className="login-error">{errorMessage}</p>}
              <div className="login-checkbox">
                <input type="checkbox" className="login-checkbox" />
                <label htmlFor="" className="label-checkbox">
                  Manter-me conectado
                </label>
              </div>
            </div>
            <button className="btn-login">Entrar</button>
            <p className="login-description-2">
              Não tem uma conta? <Link to="/signup">Crie uma agora! </Link>
            </p>
          </div>
        </section>
      </form>
      {showSuccessModal && (
        <div className="modal-overlay-success">
          <div className="modal-container-success">
            <div className="modal-icon-success">
              <span className="modal-checkmark">✔</span>
            </div>
            <h2 className="modal-title-success">SUCESSO</h2>
            <p className="modal-message-success">Login realizado, você será redirecionado para o painel.</p>
          </div>
        </div>
      )}
      <Footer />
    </>
  )
}

export default Home;