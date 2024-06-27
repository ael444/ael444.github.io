document.addEventListener('DOMContentLoaded', () => {
    const categoryLinks = document.querySelectorAll('#category-list a');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalGallery = document.getElementById('modal-gallery');
    const closeBtn = document.querySelector('.close');
    const scrollArrow = document.querySelector('.scroll-arrow');

    // Sample project data (replace with your own)
    const projects = {
        'web-design': [
            { title: 'Project 1', image: 'path/to/image1.jpg' },
            { title: 'Project 2', image: 'path/to/image2.jpg' },
        ],
        'graphic-design': [
            { title: 'Design 1', image: 'path/to/design1.jpg' },
            { title: 'Design 2', image: 'path/to/design2.jpg' },
        ],
        'photography': [
            { title: 'Photo 1', image: 'path/to/photo1.jpg' },
            { title: 'Photo 2', image: 'path/to/photo2.jpg' },
        ],
    };

    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.getAttribute('data-category');
            showModal(category);
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    scrollArrow.addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });

    function showModal(category) {
        modalTitle.textContent = category.replace('-', ' ').toUpperCase();
        modalGallery.innerHTML = '';

        projects[category].forEach(project => {
            const img = document.createElement('img');
            img.src = project.image;
            img.alt = project.title;
            img.title = project.title;
            modalGallery.appendChild(img);
        });

        modal.style.display = 'block';
    }

    // Hide scroll arrow when scrolling down
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollArrow.style.opacity = '0';
        } else {
            scrollArrow.style.opacity = '1';
        }
    });
});