let sidebarBtn = document.getElementById("sidebar-triggerer");
let sidebarCloseBtn = document.getElementById("sidebar-close-btn");
let sidebar = document.getElementById("sidebar");

sidebarBtn.addEventListener("click", () => {
  sidebar.style.left = "0";
});

sidebarCloseBtn.addEventListener("click", () => {
  sidebar.style.left = "100%";
});
