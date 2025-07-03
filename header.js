function toggleSrpNav() {
  document.getElementById("srp-navbar").classList.toggle("show");
}

function toggleDropdown(e, id) {
  e.preventDefault();
  const parent = document.getElementById(id).parentElement;
  parent.classList.toggle("open");
}
