document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const myLinks = document.getElementById('myLinks');

    menuIcon.addEventListener('click', () => {
        myLinks.classList.toggle('active');
        menuIcon.classList.toggle('active');
    });
});


/*************************************/

document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.querySelector('.overlay').style.opacity = 1;
        });
        item.addEventListener('mouseout', () => {
            item.querySelector('.overlay').style.opacity = 0;
        });
    });

    // Optional: Add a fade-in effect when the page loads
    const fadeInElements = document.querySelectorAll('.portfolio-item img');

    fadeInElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transition = 'opacity 1s ease-in-out';
        setTimeout(() => {
            element.style.opacity = 1;
        }, 500);
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.querySelector('.overlay').style.opacity = 1;
        });
        item.addEventListener('mouseout', () => {
            item.querySelector('.overlay').style.opacity = 0;
        });
    });
});


const mailOptions = {
    from: email,
    to: 'manivel.it21@mamcet.com',
    subject: `Contact Form Submission from ${name}`,
    text: `Message from ${name} (${email}):\n\n${message}`
};

fetch('http://localhost:3000/send', {
    method: 'POST',
    body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    }),
    headers: {
        'Content-Type': 'application/json'
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            alert(`You clicked on ${card.dataset.title}`);
            // You can add more complex interactions or navigation here
        });
    });
});
