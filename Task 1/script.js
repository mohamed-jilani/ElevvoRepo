const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');

function updateTogglePosition() {
  const sidebarRect = sidebar.getBoundingClientRect();
  
  if (sidebar.classList.contains('closed')) {
    // Position en mode fermé
    toggleBtn.style.left = `${sidebarRect.right + 10}px`;
  } else {
    // Position en mode ouvert
    toggleBtn.style.left = `${sidebarRect.right + 10}px`;
  }
}

function toggleSidebar() {
  sidebar.classList.toggle('closed');
  
  // Changement d'icône
  const icon = toggleBtn.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
  
  // Mise à jour position après la transition
  setTimeout(updateTogglePosition, 300); // Correspond à la durée de la transition CSS
}

// Événements
toggleBtn.addEventListener('click', toggleSidebar);

// Mise à jour initiale et au redimensionnement
window.addEventListener('load', updateTogglePosition);
window.addEventListener('resize', updateTogglePosition);

// Animation plus fluide
sidebar.addEventListener('transitionend', updateTogglePosition);