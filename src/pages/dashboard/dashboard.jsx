import { useState, useEffect } from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading';
import MenuToggleProvider from '../../components/MenuToggleProvider';

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    cep: '',
    address: '',
    number: '',
    complement: '',
    city: '',
    state: '',
    birthdate: '',
    keys: '',
  });


  const [carouselIndex, setCarouselIndex] = useState(0);

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev === 0 ? promoCards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev === promoCards.length - 1 ? 0 : prev + 1));
  };

  const promoCards = [
    {
      img: "https://img.icons8.com/color/48/windows-10.png",
      alt: "Windows Key",
      title: "Windows 10 Pro",
      price: "R$ 99,90"
    },
    {
      img: "https://img.icons8.com/color/48/microsoft-office-2019.png",
      alt: "Office Key",
      title: "Microsoft Office 2021",
      price: "R$ 149,90"
    },
    {
      img: "https://img.icons8.com/fluency/48/crunchyroll.png",
      alt: "Crunchyroll Key",
      title: "Crunchyroll Premium",
      price: "R$ 19,90"
    },
    {
      img: "https://img.icons8.com/fluency/48/spotify.png",
      alt: "Spotify Key",
      title: "Spotify Premium",
      price: "R$ 29,90"
    },
    {
      img: "https://img.icons8.com/fluency/48/discord-logo.png",
      alt: "Discord Key",
      title: "Discord Nitro",
      price: "R$ 49,90"
    },
    {
      img: "https://img.icons8.com/fluency/48/steam.png",
      alt: "Steam Key",
      title: "Steam Wallet",
      price: "R$ 49,90"
    },
    {
      img: "https://img.icons8.com/material-rounded/48/epic-games.png",
      alt: "Epic Games Key",
      title: "Epic Games Wallet",
      price: "R$ 49,90"
    }
  ];

  const [userColor, setUserColor] = useState('');

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev === promoCards.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [promoCards.length]);

  useEffect(() => {
    document.title = "KeyFlix - Dashboard";

    // Recupera os dados do usuário do localStorage
    const storedUser = localStorage.getItem('user');

    if (storedUser && storedUser !== '{}') {
      setUser(JSON.parse(storedUser));
    }

    setUserColor(getRandomColor());

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);


    return () => clearTimeout(timer);
  }, []);


  if (isLoading) {
    return <Loading />;
  }

  return (
    <MenuToggleProvider>
      {({ isMenuOpen, menuSwitch }) => (
    <>
      <div className='header-container'>
        <button className='btn-menu-keyflix' id='menu-switch' onClick={menuSwitch}>
          <img src="/public/menuicon.svg" alt="" />
        </button>
        <div className='header-keyflix'>
          <div className='header-logo'>
            <img src="/public/keyflix.svg" alt="" width={30} height={30} id='keyflix-icon' />
            <h1 className='keyflix-title' id='keyflix-title'>KeyFlix</h1>
          </div>

          <div className='header-options'>
            <img src="/public/notification.svg" alt="" className='header-notifications' />
            <Link to="/profile"><button className='btn-header-user'>Meu Perfil</button></Link>
          </div>
        </div>
      </div>

      <div className="dashboard-flex-wrapper">
        <div className={`menu-keyflix${isMenuOpen ? ' open' : ''}`} id='menu-keyflix'>
          <div className='menu-keyflix-user'>
            {user.image ? (
              <img src={user.image} alt="Foto do usuário" className='user-image' id='user-image' width={40} height={40} />
            ) : (
              <div
                className='user-initial'
                style={{
                  backgroundColor: userColor,
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#fff',
                  margin: '0 15px'
                }}
              >
                {user.name ? user.name.charAt(0).toUpperCase() : '?'}
              </div>
            )}
            <h1 className='menu-user-name'>{user.name} {user.surname}</h1>
          </div>

          <div className='menu-search-box'>
            <img src="/public/search.svg" alt="" />
            <input type="text" placeholder='Procurar' className='menu-input-search' />
          </div>

          <div className='menu-options-box'>

            <div className='menu-options-dashboard'>
              <img src="/public/home.svg" alt="" />
              <Link to="/dashboard"><p>Dashboard</p></Link>
            </div>
            <div className='menu-options-user'>
              <img src="/public/user.svg" alt="" />
              <Link to="/profile"><p>Meu Perfil</p></Link>
            </div>

            <div className='menu-options-cart'>
              <img src="/public/cart.svg" alt="" width={24} height={24} />
              <p>Produtos</p>
            </div>

            <div className='menu-options-support'>
              <img src="/public/support.svg" alt="" />
              <p>Suporte KeyFlix</p>
            </div>
          </div>
        </div>

        <div className={`dashboard-container${isMenuOpen ? ' menu-open' : ''}`}>
          <div className='dashboard-header'>
            <h1 className='dashboard-title'>Dashboard</h1>
            <p className='dashboard-subtitle'>Bem-vindo(a) a KeyFlix, <font color='#0356bb'>{user.name}!</font></p>
          </div>

          <div className='dashboard-content'>

            <div className='dashboard-add-informations'>
              <h2 className='dashboard-section-title'>Dados Cadastrais</h2>
              <div className='add-informations-content'>
                <h1 className='dashboard-informations-text'>Adicione seus dados e informações e disfrute dos nossos produtos!</h1>
                <Link to="/profile"><button className='btn-header-user'>Meu Perfil</button></Link>
              </div>
            </div>

            <div>
              <h2 className='dashboard-section-title'>Promoções de Keys</h2>
              <div className='dashboard-carousel'>
                <div className='dashboard-promo-card'>
                  <img
                    src={promoCards[carouselIndex].img}
                    alt={promoCards[carouselIndex].alt}
                    className='dashboard-promo-image'
                    width={48}
                    height={48}
                  />
                  <h3 className='dashboard-promo-title'>{promoCards[carouselIndex].title}</h3>
                  <p className='dashboard-promo-price'>{promoCards[carouselIndex].price}</p>
                  <button className='dashboard-promo-button'>Comprar</button>
                  <div className="carousel-dots">
                    {promoCards.map((_, idx) => (
                      <button
                        key={idx}
                        className={`carousel-dot${carouselIndex === idx ? ' active' : ''}`}
                        onClick={() => setCarouselIndex(idx)}
                        aria-label={`Ir para o item ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className='dashboard-many-buys'>
              <h2 className='dashboard-section-title'>Quantidades de Keys</h2>

              <div className='many-buys-content'>
                <h1 className='dashboard-informations-text'>Você tem {user.keys} keys adquiridas com a gente, muito obrigado!</h1>
              </div>
            </div>

          </div>


        </div>
      </div>
    </>
    )}
    </MenuToggleProvider>

  );

}

export default Dashboard;
