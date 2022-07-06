
const modalSearchCloseButton = document.querySelector('.modal-search__close-button');
const modal = document.querySelector('.modal');
const buttonSearch = document.querySelector('.button_search');
const toggleModal = () => {
   modal.classList.toggle('modal_open');
}

modalSearchCloseButton.addEventListener('click', toggleModal)
buttonSearch.addEventListener('click', (e)=>{
  console.log(e);
  e.preventDefault();
  toggleModal();

})
