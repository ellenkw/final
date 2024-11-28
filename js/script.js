const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxDescription = document.querySelector('.lightbox-description');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.movie').forEach(movie => {
    movie.addEventListener('click', () => {
        const img = movie.querySelector('img'); // Get the image inside the movie
        const content = movie.getAttribute('data-lightbox-content'); // Get the data-lightbox-content attribute

        lightbox.style.display = 'flex'; // Show the lightbox
        lightboxImg.src = img.src; // Set the clicked image in lightbox
        lightboxDescription.innerHTML = content; // Set the dynamic HTML content
    });
});

// Close lightbox
function openLightbox() {
    document.getElementById("lightbox").style.display = "block";
}
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
