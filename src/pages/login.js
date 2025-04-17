function loginModal() {
    const modal = document.getElementById('login-modal')

    const actualStyle = modal.style.display
  if(actualStyle == 'block') {
    modal.style.display = 'none'
  }
  else {
    modal.style.display = 'block'
  }

    const btnClose = document.getElementById('btn-close')
    btnClose.addEventListener('click', function(){
        modal.style.display = 'none'
    })
}

export default loginModal;