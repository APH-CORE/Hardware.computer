function showInfo(hardware) {
  const info = document.getElementById("info");
  const buttons = document.querySelectorAll(".controls button");

  // RESET tombol aktif
  buttons.forEach(btn => btn.classList.remove("active"));

  // SET tombol aktif sesuai yang diklik
  if (hardware === "cpu") {
    buttons[0].classList.add("active");
    info.innerHTML =
      "<h2>CPU</h2><p>CPU adalah otak komputer yang bertugas memproses instruksi dan perhitungan.</p>";
  } 
  else if (hardware === "gpu") {
    buttons[1].classList.add("active");
    info.innerHTML =
      "<h2>GPU</h2><p>GPU berfungsi mengolah grafis dan tampilan visual agar lebih halus.</p>";
  } 
  else if (hardware === "ram") {
    buttons[2].classList.add("active");
    info.innerHTML =
      "<h2>RAM</h2><p>RAM menyimpan data sementara agar aplikasi berjalan lebih cepat.</p>";
  }

  <script>
const model = document.getElementById("pcModel");

function focusCPU() {
  model.cameraOrbit = "30deg 70deg 1.5m";
  model.fieldOfView = "30deg";
}

function focusGPU() {
  model.cameraOrbit = "-40deg 80deg 1.7m";
  model.fieldOfView = "30deg";
}
</script>
  
  // animasi info (kalau kamu pakai yang fade)
  info.classList.remove("show");
  setTimeout(() => {
    info.classList.add("show");
  }, 100);
}
