import { useState, useEffect } from 'react';
import './dashboard.css';
import menuSwitch from '../components/menu';
import Loading from '../components/Loading';

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({ name: '', surname: '' });

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  useEffect(() => {
    document.title = "KeyFlix - Dashboard";

    // Recupera os dados do usuário do localStorage
    const storedUser = localStorage.getItem('user');

    if (storedUser && storedUser !== '{}') {
      setUser(JSON.parse(storedUser));
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
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
            <button className='btn-header-user'>Meu Perfil</button>
          </div>
        </div>
      </div>

      <div className='menu-keyflix' id='menu-keyflix'>
        <div className='menu-keyflix-user'>
          {user.image ? (
            <img src={user.image} alt="Foto do usuário" className='user-image' id='user-image' width={40} height={40} />
          ) : (
            <div
              className='user-initial'
              style={{
                backgroundColor: getRandomColor(),
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
          <div className='menu-options-user'>
            <img src="/public/user.svg" alt="" />
            <p>Meu Perfil</p>
          </div>

          <div className='menu-options-dashboard'>
            <img src="/public/home.svg" alt="" />
            <p>Dashboard</p>
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
    </>
  );
}

export default Dashboard;
