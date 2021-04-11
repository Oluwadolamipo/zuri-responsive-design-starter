const togglebutton = document.querySelector('.togglebutton'); //Selects the class div with textcontent 'Menu'
const navbarlinks = document.querySelector('.navbarlinks'); //nav class 



togglebutton.addEventListener('click', ()=>{
    navbarlinks.classList.toggle('active')
    togglebutton.textContent = togglebutton.textContent == 'close' ? 'togglebutton' : 'close'
}
)

navbarlinks.addEventListener('click', ()=>{
    navbarlinks.classList.toggle('active')
    Navbarlinks.textContent = 'close' ? 'navbarlinks' : 'close'
}
)