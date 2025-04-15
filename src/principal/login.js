async function loginModal() {
    const modal = document.querySelector('.Login-modal')
  const actualStyle = modal.style.display
  if(actualStyle == 'block') {
    modal.style.display = 'none'
  }
  else {
    modal.style.display = 'block'
  }
};

export default loginModal;