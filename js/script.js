// lightbox settings
function openLightbox1() {
    const lightbox = document.getElementById("lightbox_monster");
    lightbox.style.display = "flex";
};
// document.querySelector("#monster_img").addEventListener("click", function(){
//     const lightbox = document.getElementById("lightbox_monster");
//     lightbox.style.display = "flex";
// });

function openLightbox2() {
    const lightbox = document.getElementById("lightbox_ai");
    lightbox.style.display = "flex";
};
// document.querySelector("#ai_img").addEventListener("click", function(){
//     const lightbox = document.getElementById("lightbox_ai");
//     lightbox.style.display = "flex";
// });

function openLightbox3() {
    const lightbox = document.getElementById("lightbox_loveletter");
    lightbox.style.display = "flex";
};

// document.querySelector("#loveletter_img").addEventListener("click", function(){
//     const lightbox = document.getElementById("lightbox_loveletter");
//     lightbox.style.display = "flex";
// });

function openLightbox4() {
    const lightbox = document.getElementById("lightbox_EEA");
    lightbox.style.display = "flex";
};

// document.querySelector("#EEA_img").addEventListener("click", function(){
//     const lightbox = document.getElementById("lightbox_EEA");
//     lightbox.style.display = "flex";
// });

function openLightbox5() {
    const lightbox = document.getElementById("lightbox_mononoke");
    lightbox.style.display = "flex";
};

// document.querySelector("#mononoke_img").addEventListener("click", function(){
//     const lightbox = document.getElementById("lightbox_mononoke");
//     lightbox.style.display = "flex";
// });

// Close lightbox
function closeLightbox1() {
    const lightbox = document.getElementById("lightbox_monster");
    lightbox.style.display = "none";
}

function closeLightbox2() {
    const lightbox = document.getElementById("lightbox_ai");
    lightbox.style.display = "none";
}

function closeLightbox3() {
    const lightbox = document.getElementById("lightbox_loveletter");
    lightbox.style.display = "none";
}

function closeLightbox4() {
    const lightbox = document.getElementById("lightbox_EEA");
    lightbox.style.display = "none";
}

function closeLightbox5() {
    const lightbox = document.getElementById("lightbox_mononoke");
    lightbox.style.display = "none";
}

// Music Play
let isPlaying = false;

function music1() {
    const video = document.getElementById("vid_monster");
    const player = document.getElementById("play_monster");

    if (isPlaying) {
        video.src = "https://www.youtube.com/embed/s2cdsG3g-Xk";
        isPlaying = false;
        player.src = "img/play.png"
        console.log("Video stopped");
    } else {
        video.src = "https://www.youtube.com/embed/s2cdsG3g-Xk?autoplay=1";
        isPlaying = true;
        player.src = "img/pause.png"
        console.log("Video playing");
    }
}

let isPlaying2 = false;

function music2() {
    const video = document.getElementById("vid_ai");
    const player = document.getElementById("play_ai");

    if (isPlaying2) {
        video.src = "https://www.youtube.com/embed/a9ayCJMz0n0";
        isPlaying2 = false;
        player.src = "img/play.png"
        console.log("Video stopped");
    } else {
        video.src = "https://www.youtube.com/embed/a9ayCJMz0n0?autoplay=1";
        isPlaying2 = true;
        player.src = "img/pause.png"
        console.log("Video playing");
    }
}

let isPlaying3 = false;
function music3() {
    const video = document.getElementById("vid_loveletter");
    const player = document.getElementById("play_loveletter");

    if (isPlaying3) {

        video.src = "https://www.youtube.com/embed/P9KLXJs-mM0";
        isPlaying3 = false;
        player.src = "img/play.png"
        console.log("Video stopped");
    } else {
        video.src = "https://www.youtube.com/embed/P9KLXJs-mM0?autoplay=1";
        isPlaying3 = true;
        player.src = "img/pause.png"
        console.log("Video playing");
    }
}

let isPlaying4 = false;
function music4() {
    const video = document.getElementById("vid_EEA");
    const player = document.getElementById("play_EEA");

    if (isPlaying4) {
        video.src = "https://www.youtube.com/embed/STRjuwjL8g0";
        isPlaying4 = false;
        player.src = "img/play.png"
        console.log("Video stopped");
    } else {
        video.src = "https://www.youtube.com/embed/STRjuwjL8g0?autoplay=1";
        isPlaying4 = true;
        player.src = "img/pause.png"
        console.log("Video playing");
    }
}

let isPlaying5 = false;
function music5() {
    const video = document.getElementById("vid_mononoke");
    const player = document.getElementById("play_mononoke");

    if (isPlaying5) {
        video.src = "https://www.youtube.com/embed/jBzE8Sll_r4";
        isPlaying5 = false;
        player.src = "img/play.png"
        console.log("Video stopped");
    } else {
        video.src = "https://www.youtube.com/embed/jBzE8Sll_r4?autoplay=1";
        isPlaying5 = true;
        player.src = "img/pause.png"
        console.log("Video playing");
    }
}
