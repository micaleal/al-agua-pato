document.addEventListener('DOMContentLoaded', function() {
    // smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // animation class 
    document.querySelectorAll('.animated').forEach(element => {
        element.classList.add('animated');
    });

    // Toggle item
    document.querySelectorAll('.toggle-button').forEach(button => {
        button.addEventListener('click', function () {
            const description = this.previousElementSibling;
            description.classList.toggle('show-description');
        });
    });
});



  
  
  
  
  
 
 



