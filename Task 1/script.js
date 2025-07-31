const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');

function updateTogglePosition() {
  const sidebarRect = sidebar.getBoundingClientRect();
  
  if (sidebar.classList.contains('closed')) {
    
    toggleBtn.style.left = `${sidebarRect.right + 10}px`;
  } else {
    
    toggleBtn.style.left = `${sidebarRect.right + 10}px`;
  }
}

function toggleSidebar() {
  sidebar.classList.toggle('closed');
  
  
  const icon = toggleBtn.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
  
  
  setTimeout(updateTogglePosition, 300); 
}


toggleBtn.addEventListener('click', toggleSidebar);


window.addEventListener('load', updateTogglePosition);
window.addEventListener('resize', updateTogglePosition);


sidebar.addEventListener('transitionend', updateTogglePosition);