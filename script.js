const model = document.getElementById("pcModel");
const text = document.getElementById("infoText");

const SIDE_ANGLE = "90deg 75deg";

/* ===== INTERAKSI 3D ===== */
// klik / grab = auto rotate ON
model.addEventListener("mousedown", () => {
  model.autoRotate = true;
});

// lepas = stop rotate
model.addEventListener("mouseup", () => {
  model.autoRotate = false;
});

// mobile
model.addEventListener("touchstart", () => {
  model.autoRotate = true;
});

model.addEventListener("touchend", () => {
  model.autoRotate = false;
});

/* ===== UI ===== */
function resetButtons() {
  document.querySelectorAll("button").forEach(b => b.classList.remove("active"));
}

function showText(msg) {
  text.style.animation = "none";
  text.offsetHeight;
  text.style.animation = null;
  text.innerText = msg;
}

function zoom(radius, msg, btn) {
  resetButtons();
  btn.classList.add("active");

  model.cameraOrbit = `${SIDE_ANGLE} ${radius}m`;
  model.fieldOfView = "30deg";

  showText(msg);
}

/* ===== KOMPONEN ===== */
function focusCPU(btn) {
  zoom(1.6, "CPU (Central Processing Unit) adalah otak komputer yang memproses semua instruksi.", btn);
}

function focusGPU(btn) {
  zoom(1.7, "GPU atau VGA berfungsi mengolah grafis dan tampilan visual.", btn);
}

function focusRAM(btn) {
  zoom(1.8, "RAM menyimpan data sementara agar aplikasi berjalan cepat.", btn);
}

function focusMB(btn) {
  zoom(2.0, "Motherboard adalah papan utama yang menghubungkan semua komponen.", btn);
}

function focusFan(btn) {
  zoom(2.1, "Fan menjaga suhu komponen agar tidak overheat.", btn);
}

function focusStorage(btn) {
  zoom(2.2, "Storage menyimpan sistem operasi, aplikasi, dan data.", btn);
}

function focusPSU(btn) {
  zoom(2.3, "PSU menyuplai dan mengatur daya listrik ke seluruh komponen.", btn);
}
