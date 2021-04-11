const toggleButton = document.querySelector(".togglebutton"); //Selects the class div with textcontent 'togglebutton'



const clickfunction= toggleButton.addEventlistener('click', event => {
 toggleButton.innerHTML = `I was clicked ${event.details} times `
})