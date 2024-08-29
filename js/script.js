document.addEventListener('DOMContentLoaded', (event) => {
    const overlays = document.querySelectorAll('.overlay');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');

    if (!modal || !modalImg) {
        console.error('Modal or modalImg element not found.');
        return;
    }

    function showModal(imgSrc, imgAlt) {
        if (imgSrc) {
            console.log('Showing modal with image:', imgSrc);
            modalImg.src = imgSrc;
            modalImg.alt = imgAlt;
            modal.style.display = "flex";
        }
    }

    overlays.forEach(overlay => {
        if (overlay) {
            overlay.addEventListener('click', () => {
                const img = overlay.previousElementSibling;
                if (img) {
                    showModal(img.src, img.alt);
                }
            });
        }
    });

    modal.addEventListener('click', (event) => {
        if (event.target !== modalImg) {
            modal.style.display = "none";
            modalImg.src = "";
            modalImg.alt = "";
        }
    });
});


// Does the full screen image on click function
const overlays = document.querySelectorAll('.overlay');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

// Function to show modal only when image is clicked
function showModal(imgSrc, imgAlt) {
    if (imgSrc) {
        modalImg.src = imgSrc;
        modalImg.alt = imgAlt;
        modal.style.display = "flex";
    }
}

// Event listener for each overlay to trigger the modal
overlays.forEach(overlay => {
    overlay.addEventListener('click', () => {
        const img = overlay.previousElementSibling;
        showModal(img.src, img.alt);
    });
});

// Close modal when clicking outside of the image
modal.addEventListener('click', (event) => {
    if (event.target !== modalImg) {
        modal.style.display = "none";
        modalImg.src = ""; // Clear the image source
        modalImg.alt = ""; // Clear the alt text
    }
});

// End of does the full screen image on click function

