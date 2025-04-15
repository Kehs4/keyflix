import { useState } from 'react'
import './dashboard.css'
import menuSwitch from '../menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header-container'>
      <button className='btn-menu-keyflix' id='menu-switch' onClick={menuSwitch}><img src="/public/menuicon.svg" alt=""/></button>
          <div className='header-keyflix'>
            <div className='header-logo'>
              <img src="/public/keyflix.svg" alt="" width={30} height={30} id='keyflix-icon'/>
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
              <img src="/public/me.jpeg" alt="" className='user-image' id='user-image' width={40} height={40}/>
              <h1 className='menu-user-name'>Kleyton Holanda</h1>

          </div>

          <div className='menu-search-box'>
            <img src="/public/search.svg" alt=""/>
            <input type="text" placeholder='Procurar' className='menu-input-search'/>
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
              <img src="/public/cart.svg" alt="" width={24} height={24}/>
              <p>Produtos</p>
            </div>

            <div className='menu-options-support'>
              <img src="/public/support.svg" alt="" />
              <p>Suporte KeyFlix</p>
            </div>
          </div>
      </div>

    </>
  )
}

export default Dashboard
