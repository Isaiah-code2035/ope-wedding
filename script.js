// Countdown Timer
const countdown = () => {
    const weddingDate = new Date("2025-02-22T00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;
    
    const countdownTimer = document.querySelector(".countdown-timer");
    const currentDate = new Date();
    const isWeddingDay = currentDate.getDate() === 22 && 
                        currentDate.getMonth() === 1 && // February (0-based)
                        currentDate.getFullYear() === 2025;
    
    // Check if it's the wedding day
    if (isWeddingDay) {
        countdownTimer.innerHTML = `
            <div class="celebration-message">
                <h2>Today is the day! 💑</h2>
                <p>Join us in celebrating our special day!</p>
                <p class="time-now">${currentDate.toLocaleTimeString()}</p>
            </div>
        `;
        return;
    }
    
    // If the wedding date has passed
    if (timeLeft < 0) {
        countdownTimer.innerHTML = `
            <div class="celebration-message">
                <h2>Thank you for celebrating with us! ❤️</h2>
                <p>The wedding celebration has concluded.</p>
            </div>
        `;
        return;
    }

    // Regular countdown display
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update countdown display
    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
};

// Update countdown every second
setInterval(countdown, 1000);
countdown(); // Initial call

// Photo Upload Logic
const form = document.getElementById("photo-upload-form");
const fileInput = document.getElementById("file-input");
const gallery = document.getElementById("gallery");

if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const file = fileInput.files[0];

        if (!file) {
            alert("Please select a file first.");
            return;
        }

        // Simulate File Upload
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = document.createElement("img");
            img.src = event.target.result;
            img.classList.add('gallery-image');
            gallery.appendChild(img);
        };
        reader.readAsDataURL(file);

        fileInput.value = ""; // Reset the input
    });
}
