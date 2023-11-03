document.addEventListener('DOMContentLoaded', function() {
    const intervalForm = document.getElementById("interval-form");
    const startButton = document.getElementById("start");
    const bannerContainer = document.querySelector(".banner-container");
    const images = bannerContainer.querySelectorAll("img");

    let intervalId;
    let currentIndex = 0;
    let rotationInterval = 3000;

    function rotateBanners() {
        images[currentIndex].style.opacity = 0;
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.opacity = 1;
    }

    function startBannerRotation() {
        stopBannerRotation();
        intervalId = setInterval(rotateBanners, rotationInterval);
    }

    function stopBannerRotation() {
        clearInterval(intervalId);
        images.forEach(img => (img.style.opacity = 0));
        currentIndex = 0;
        images[currentIndex].style.opacity = 1;
    }

    function handleFocusChange() {
        if (document.hasFocus()) {
            startBannerRotation();
        } else {
            stopBannerRotation();
        }
    }

    startButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the form submission
        rotationInterval = parseInt(document.getElementById("interval").value) * 1000;
        startBannerRotation();
    });

    // Attach event listeners for focus and blur
    window.addEventListener('focus', handleFocusChange);
    window.addEventListener('blur', handleFocusChange);

    // Start banner rotation when the page initially loads
    startBannerRotation();
});
