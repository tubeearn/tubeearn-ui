const isOwner = true;
if (isOwner) document.getElementById('maintenanceBtn').style.display = 'inline';

function closePopup() {
  document.getElementById('apkPopup').style.display = 'none';
  localStorage.setItem('apkClosed', 'true');
}

function goMaintenance() {
  window.location.href = 'maintenance/maintenance.html';
}

setTimeout(() => {
  if (!localStorage.getItem('apkClosed')) {
    document.getElementById('apkPopup').style.display = 'block';
  }
}, 5000);

function searchNow() {
  const value = document.getElementById("searchInput").value.trim();
  if (value) {
    window.location.href = "search.html?q=" + encodeURIComponent(value);
  }
}

function startVoice() {
  if (!('webkitSpeechRecognition' in window)) {
    alert("Voice search not supported.");
    return;
  }
  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'en-IN';
  recognition.onresult = (event) => {
    document.getElementById("searchInput").value = event.results[0][0].transcript;
    searchNow();
  };
  recognition.onerror = (event) => alert("Mic error: " + event.error);
  recognition.start();
}

function addMoreVideos() {
  const container = document.getElementById('infiniteScroll');
  for (let i = 0; i < 3; i++) {
    const div = document.createElement('div');
    div.className = 'short-video';
    div.innerHTML = `<img src="https://via.placeholder.com/300x500?text=More+Video+${Math.floor(Math.random()*1000)}" />`;
    container.appendChild(div);
  }
}

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    addMoreVideos();
  }
});

// Optional: Auto-scroll Stories
setInterval(() => {
  const container = document.getElementById("storySlider");
  container.scrollBy({ left: 70, behavior: 'smooth' });
}, 3000);
