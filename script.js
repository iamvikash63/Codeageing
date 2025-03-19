
  


document.addEventListener("DOMContentLoaded", function () {
    const counterElement = document.querySelector('.js-clients-counter');
    let count = 0;
    const target = 500; // Change this to your desired number
    const speed = 20; // Adjust speed of counting
    
    function updateCounter() {
        if (count < target) {
            count += 5; // Increment count step
            counterElement.innerHTML = `${count} +`;
          
      
            setTimeout(updateCounter, speed);
        } else {
            counterElement.textContent = `${count}+`;
        }
    }
    
    updateCounter();
});


document.querySelectorAll('.quick-scroll').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
  
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust offset for better alignment
                behavior: 'smooth'
            });
        }
    });
  });

