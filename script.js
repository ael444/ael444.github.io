document.addEventListener('DOMContentLoaded', () => {
    const categoryLinks = document.querySelectorAll('#category-list a');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalGallery = document.getElementById('modal-gallery');
    const closeModal = document.querySelector('.close');

    categoryLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const category = link.getAttribute('data-category');
            modalTitle.textContent = link.textContent;
            loadCategoryContent(category);
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    function loadCategoryContent(category) {
        // Clear previous content
        modalGallery.innerHTML = '';

        // Load new content based on the category
        // This is a placeholder function. Replace this with your actual content loading logic.
        const content = {
            'digital-transformation': [
                { src: 'images/digital1.jpg', alt: 'Digital Transformation 1' },
                { src: 'images/digital2.jpg', alt: 'Digital Transformation 2' },
                // Add more images or content as needed
            ],
            'learning-development': [
                { src: 'images/learning1.jpg', alt: 'Learning 1' },
                { src: 'images/learning2.jpg', alt: 'Learning 2' },
                // Add more images or content as needed
            ],
            'creator-innovator': [
                { src: 'images/creator1.jpg', alt: 'Creator 1' },
                { src: 'images/creator2.jpg', alt: 'Creator 2' },
                // Add more images or content as needed
            ]

            // Add more categories as needed
        };

        if (content[category]) {
            content[category].forEach(item => {
                const img = document.createElement('img');
                img.src = item.src;
                img.alt = item.alt;
                modalGallery.appendChild(img);
            });
        }
    }
});
