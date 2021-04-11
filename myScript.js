const toggleButton = document.querySelector(".togglebutton"); //Selects the class div with textcontent 'togglebutton'
//const navbarlinks = document.querySelector('.navbarlinks'); //nav class //



const clickfunction = toggleButton.addEventlistener('click', event => {
    toggleButton.innerHTML = `I was clicked ${event.details} times `})
   
//navbarlinks.addEventListener('click', ()=>{
    //navbarlinks.classList.toggle('active')
 //   Navbarlinks.textContent = 'close' ? 'navbarlinks' : 'close' }