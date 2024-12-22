// Countdown Timer
const countdown = () => {
    const weddingDate = new Date("2025-02-22T00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
};

setInterval(countdown, 1000);
countdown();

// Photo Upload Logic
const form = document.getElementById("photo-upload-form");
const fileInput = document.getElementById("file-input");
const gallery = document.getElementById("gallery");

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
        gallery.appendChild(img);
    };
    reader.readAsDataURL(file);

    fileInput.value = ""; // Reset the input
});
