// function openLightbox1() {
//     const lightbox = document.getElementById("lightbox_monster");
//     lightbox.style.display = "block";
//     const captionText = document.getElementById("caption");
//     captionText.innerHTML = "Who is the monster?";
// }

function closeLightbox() {
    const lightbox = document.getElementById("lightbox_monster");
    lightbox.style.display = "none";
}

document.querySelector("#monster_img").addEventListener("click", function(){
    const lightbox = document.getElementsByClassName("lightbox");
    lightbox.style.display = "block";
    const captionText = document.getElementById("caption");
    captionText.innerHTML = "Who is the monster?";
});