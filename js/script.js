function openLightbox1() {
    const lightbox = document.getElementById("lightbox_monster");
    lightbox.style.display = "block";
    const captionText = document.getElementById("caption");
    captionText.innerHTML = "Who is the monster?";
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox_monster");
    lightbox.style.display = "none";
}