const navToggle = document.querySelector('.nav-toggle'); // sets a variable for the class nav-toggle form the HTML page
const navLinks = document.querySelectorAll('.nav__link'); //creates a node list and finds all nav__link


navToggle.addEventListener('click',() => {
    document.body.classList.toggle('nav-open'); 
});//when the variable is clicked you want the function document.body.classLIst.toggle to toggle the class nav-open

navLinks.forEach(link => {//for each link indeisde the node list we are creating a function
    link.addEventListener('click', () =>{//on each link we are creating an event listener that will activate with click
        document.body.classList.remove('nav-open');//function when someone clicks, remove nav-open from the class list
    })
});//we could toggle the nav-open, document.body.classList.toggle, but this is safer, stoping accidental clicks when it is off screen. Not super clear from video