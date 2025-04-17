async function menuSwitch() {
    const menuSwitch = document.getElementById('menu-switch')
    menuSwitch.style.position = 'absolute'
    menuSwitch.style.zIndex = '2'


    const keyflixIcon = document.getElementById('keyflix-icon')
    keyflixIcon.style.zIndex = '3'
    keyflixIcon.style.marginLeft = '100px'

    const keyflixTitle = document.getElementById('keyflix-title')
    keyflixTitle.style.zIndex = '3'
    
    const menuKeyflix = document.getElementById('menu-keyflix')
    menuKeyflix.style.display = 'block'
    menuKeyflix.style.position = 'absolute'

    const userImg = document.getElementById('user-img')
    const userName = document.getElementById('menu-keyflix-user')

    menuKeyflix.addEventListener('mouseleave', function() {
        menuKeyflix.style.display = 'none'
        keyflixIcon.style.zIndex = '0'
        keyflixIcon.style.marginLeft = '57px'
    });

};



export default menuSwitch;