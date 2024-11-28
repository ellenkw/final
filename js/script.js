// function openLightbox1() {
//     const lightbox = document.getElementById("lightbox_monster");
//     lightbox.style.display = "flex";
//     const captionText = document.getElementById("caption");
//     captionText.innerHTML = "Who is the monster?";
// }

document.querySelector("#monster_img").addEventListener("click", function(){
    console.log("it works");
    const lightbox = document.getElementById("lightbox_monster");
    lightbox.style.display = "flex";
    const captionText = document.getElementById("caption");
    captionText.innerHTML = "Who is the monster?";
});

function closeLightbox() {
    const lightbox = document.getElementById("lightbox_monster");
    lightbox.style.display = "none";
}