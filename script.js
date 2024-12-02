// Redirect to WhatsApp
function openWhatsApp() {
  window.location.href = "https://wa.me/917356211870";
}

// File Upload Handler
document.getElementById("fileUpload").addEventListener("change", function () {
  const files = this.files;
  const fileGrid = document.getElementById("fileGrid");
  fileGrid.innerHTML = ""; // Clear previous files

  Array.from(files).forEach((file) => {
    const fileDiv = document.createElement("div");
    fileDiv.textContent = file.name;
    fileGrid.appendChild(fileDiv);
  });
});