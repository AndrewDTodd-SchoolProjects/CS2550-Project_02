document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('carousel-image-modal');
    const modalImage = document.getElementById('image-modal-image');

    const targetImage = document.getElementById('selfie');

    targetImage.addEventListener('click', function() {
        modalImage.src = 'selfie_large.jpg';

        modal.style.display = 'block';
    });

    var closeBtn = document.querySelector('.image-modal-close');
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if(event.target === modalImage) {
            modal.style.display = 'none';
        }
    });
});