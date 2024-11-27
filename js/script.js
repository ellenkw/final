const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxDescription = document.querySelector('.lightbox-description');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.movie').forEach(movie => {
    movie.addEventListener('click', async () => {
        const img = movie.querySelector('img'); // Get the image inside the movie
        const contentUrl = movie.getAttribute('data-lightbox-content'); // Get the URL of the content file

        lightbox.style.display = 'flex'; // Show the lightbox
        lightboxImg.src = img.src; // Set the clicked image in lightbox

        try {
            const response = await fetch(contentUrl); // Fetch the content file
            if (!response.ok) {
                throw new Error('Failed to fetch lightbox content');
            }
            const content = await response.text(); // Read the content as text
            lightboxDescription.innerHTML = content; // Set the dynamic HTML content
        } catch (error) {
            console.error(error);
            lightboxDescription.innerHTML = '<p>Failed to load content.</p>'; // Display an error message
        }
    });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close lightbox on outside click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
