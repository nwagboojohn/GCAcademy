const faqs = document.querySelectorAll(".faq-folder");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        // Close all other FAQs
        faqs.forEach(otherFaq => {
            if (otherFaq !== faq) {
                otherFaq.classList.remove("active");
                const otherAnswer = otherFaq.querySelector(".faq-answer");
                if (otherAnswer) {
                    otherAnswer.style.maxHeight = "0";
                }
            }
        });

        // Toggle the clicked FAQ
        faq.classList.toggle("active");
        const answer = faq.querySelector(".faq-answer");
        if (faq.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = "0";
        }
    });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.style.background = '#fff';
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
    } else {
        header.style.background = '';
        header.style.boxShadow = '';
    }
});

const navLinks = document.querySelectorAll('.nav-links a');
const navContainer = document.querySelector('.nav-links');  // selects the container
const header = document.getElementById('header');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        header.style.display = 'none'; // hides the header
        navContainer.style.left = '-500px'; //hides the nav container
        // navigation happens automatically via href
    });
});

function toggleMenu(){
    navContainer.style.left = "0";
}
function closeMenu(){
    navContainer.style.left = "-500px";
}