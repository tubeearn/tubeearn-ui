// Example: Random videos auto-load on scroll
document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".main-content");

  function loadMoreVideos() {
    for (let i = 0; i < 5; i++) {
      const box = document.createElement("div");
      box.className = "video-box";
      box.innerHTML = `
        <video controls>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
          Your browser does not support HTML video.
        </video>
      `;
      content.appendChild(box);
    }
  }

  // Load initial videos
  loadMoreVideos();

  // Infinite scroll simulation
  window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
      loadMoreVideos();
    }
  });
});
