function showInfo(hardware) {
  let info = document.getElementById("info");

  if (hardware === "cpu") {
    info.innerHTML = "<h2>CPU</h2><p>CPU adalah otak komputer yang mengolah semua perintah.</p>";
  } 
  else if (hardware === "gpu") {
    info.innerHTML = "<h2>GPU</h2><p>GPU berfungsi untuk mengolah grafis dan tampilan visual.</p>";
  } 
  else if (hardware === "ram") {
    info.innerHTML = "<h2>RAM</h2><p>RAM menyimpan data sementara agar komputer bekerja lebih cepat.</p>";
  }
}
