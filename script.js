const isOwner = true;
if (isOwner) document.getElementById('maintenanceBtn').style.display = 'inline';

function goMaintenance() {
  window.location.href = '../maintenance/maintenance.html';
}

// Infinite Scroll Logic for Short Videos
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    addMoreVideos();
  }
});

function addMoreVideos() {
  const container = document.getElementById('infiniteScroll');
  for (let i = 0; i < 3; i++) {
    const div = document.createElement('div');
    div.className = 'short-video';
    div.innerHTML = `<img src="https://via.placeholder.com/300x500?text=More+Video+${Math.floor(Math.random()*1000)}" />`;
    container.appendChild(div);
  }
}
