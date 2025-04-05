const links = document.querySelectorAll('a[data-page]');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 

        const page = event.target.getAttribute('data-page');
        
        showPage(page);
    });
});

function showPage(page) {
    // Hide all sections
    const sections = document.querySelectorAll('.page-content');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected page
    const selectedPage = document.getElementById(page);
    if (selectedPage) {
        selectedPage.style.display = 'block';
    }
}


/* type-writer effect */
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".typeWriter");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const textElement = entry.target;
                const text = textElement.getAttribute("data-text");
                typeEffect(textElement, text);
                observer.unobserve(textElement); // Stop observing after animation
            }
        });
    }, { threshold: 0.5 });

    elements.forEach(element => observer.observe(element));
});

function typeEffect(element, text) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
            setTimeout(type, 100);
        } else {
            element.style.borderRight = "none";
        }
    }
    type();
}