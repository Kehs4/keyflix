import { React, useState, useEffect } from "react";
import Loading from "../../../components/Loading";
import { Link } from "react-router-dom";
import './profile.css'
import '../dashboard.css'


const Profile = () => {
    const [isLoading, setIsLoading] = useState(true);

    const user = JSON.parse(localStorage.getItem("user"));

    const [userColor, setUserColor] = useState('');

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function menuSwitch() {
        setIsMenuOpen((prev) => !prev);
    }

    if (!user) {
        return <p>Usuário não encontrado. Por favor, faça login novamente.</p>;
    }

    useEffect(() => {
        document.title = "KeyFlix - Perfil";

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
                        <h1 className='dashboard-title'>Meu Perfil</h1>
                        <p className='dashboard-subtitle'>Olá <font color='#0356bb'>{user.name},</font> esses são seus dados e informações.</p>
                    </div>

                    <div className='dashboard-content'>
                        <div style={{ padding: "20px" }}>
                            <h1>Perfil do Usuário</h1>
                            <div>
                                <p><strong>Nome:</strong> {user.name}</p>
                                <p><strong>Sobrenome:</strong> {user.surname}</p>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Telefone:</strong> {user.phone}</p>
                                <p><strong>CEP:</strong> {user.cep}</p>
                                <p><strong>Endereço:</strong> {user.address}</p>
                                <p><strong>Número:</strong> {user.number}</p>
                                <p><strong>Complemento:</strong> {user.complement}</p>
                                <p><strong>Cidade:</strong> {user.city}</p>
                                <p><strong>Estado:</strong> {user.state}</p>
                                <p><strong>Data de Nascimento:</strong> {user.birthDate}</p>
                                <p><strong>Quantidade de Keys:</strong> {user.keys}</p>
                                {/* Adicione outros campos conforme necessário */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </>

    );
};

export default Profile;