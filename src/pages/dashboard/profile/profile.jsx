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

    const userInfo = [
        { label: "Nome Completo", value: `${user.name} ${user.surname}` },
        { label: "Email", value: user.email },
        { label: "Telefone", value: user.phone },
        { label: "Data de Nascimento", value: user.birthDate },
        { label: "Quantidade de Keys", value: user.keys.toString() }
    ];

    const addressInfo = [
        { label: "CEP", value: user.cep },
        { label: "Endereço", value: user.address },
        { label: "Número", value: user.number },
        { label: "Complemento", value: user.complement },
        { label: "Cidade", value: user.city },
        { label: "Estado", value: user.state }
    ];

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

                    <div className='notification-btn'>
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

                    <div className='dashboard-content-container'>
                        <div className='dashboard-content-profile'>
                            <div className='user-info-container'>
                                <div className='user-image-container'>
                                    <img src="" alt="" srcset="" />
                                    {user.image ? (
                                        <img src={user.image} alt="Foto do usuário" className='user-image' id='user-image' width={80} height={80} />
                                    ) : (
                                        <div
                                            className='user-initial'
                                            style={{
                                                backgroundColor: userColor,
                                                width: '80px',
                                                height: '80px',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                fontSize: '26px',
                                                fontWeight: 'bold',
                                                color: '#fff'
                                            }}
                                        >
                                            {user.name ? user.name.charAt(0).toUpperCase() : '?'}
                                        </div>
                                    )}
                                </div>
                                <div className='user-details'>
                                    <h2 className='user-name'>{user.name} {user.surname}</h2>
                                    <p className='user-email'>{user.email}</p>
                                    <p className='keys-quantity'>{user.keys} Keys</p>

                                    <Link to="/edit-profile" className='edit-profile-link'>
                                        <button className='btn-edit-profile'>Editar Perfil</button>
                                    </Link>
                                </div>
                            </div>
                            <div className='user-details-container'>
                                <div className='user-details-info'>
                                    <h2 className='user-details-title'>Informações Pessoais</h2>
                                    <div className='user-info-grid'>

                                        <div>
                                            <label htmlFor="user-name" className='info-label'>Nome Completo:</label>
                                            <p>{user.name} {user.surname}</p>

                                            <label htmlFor="user-email" className='info-label'>E-mail:</label>
                                            <p>{user.email}</p>
                                        </div>

                                        <div>
                                            <label htmlFor="user-phone" className='info-label'>Telefone:</label>
                                            <p>{user.phone}</p>

                                            <label htmlFor="user-birthDate" className='info-label'>Data de Nascimento:</label>
                                            <p>{user.birthdate}</p>
                                        </div>

                                    </div>
                                </div>

                                <div className='user-address-container'>
                                    <h2 className='user-details-title'>Endereço:</h2>
                                    <div className='user-info-grid'>
                                        <div>
                                            <label htmlFor="user-address" className='info-label'>Logradouro:</label>
                                            <p>{user.address}</p>

                                            <label htmlFor="user-cep" className='info-label'>CEP:</label>
                                            <p>{user.cep}</p>

                                            <label htmlFor="user-number" className='info-label'>Número:</label>
                                            <p>{user.number}</p>

                                            <label htmlFor="user-complement" className='info-label'>Complemento:</label>
                                            <p>{user.complement}</p>
                                        </div>

                                        <div>
                                            <label htmlFor="user-city" className='info-label'>Cidade:</label>
                                            <p>{user.city}</p>

                                            <label htmlFor="user-state" className='info-label'>Estado:</label>
                                            <p>{user.state}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>





        </>

    );
};

export default Profile;