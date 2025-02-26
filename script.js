
  


document.addEventListener("DOMContentLoaded", function () {
    const counterElement = document.querySelector('.js-clients-counter');
    let count = 0;
    const target = 500; // Change this to your desired number
    const speed = 20; // Adjust speed of counting
    
    function updateCounter() {
        if (count < target) {
            count += 5; // Increment count step
            counterElement.innerHTML = `${count} +`;
            console.log(count);
      
            setTimeout(updateCounter, speed);
        } else {
            counterElement.textContent = `${count}+`;
        }
    }
    
    updateCounter();
});



// quiries questions's answer
document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.questions');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isOpen = content.style.display === 'block';

            document.querySelectorAll('.answer').forEach(item => {
                item.style.display = 'none';
            });

            if (!isOpen) {
                content.style.display = 'block';
            }
        });
    });
});
