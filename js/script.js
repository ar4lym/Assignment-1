// Add interactivity if needed (optional)
document.addEventListener('DOMContentLoaded', () => {
    console.log("ENHYPEN website loaded.");
});
// Pause the animation on hover
document.querySelector('.film-container').addEventListener('mouseenter', () => {
    document.querySelector('.film-strip').style.animationPlayState = 'paused';
});
