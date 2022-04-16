const generateBtn = document.querySelector(".form button");
const wrapper = document.querySelector(".wrapper");
let qrInput = document.querySelector(".form input");
let qrImg = document.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue) return;
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
  generateBtn.innerText = "Generating QR Code...";
  qrImg.addEventListener("load", () => {
    wrapper.classList.add("active");
    generateBtn.innerText = "QR Code Generated";
  });
});

qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    wrapper.classList.remove("active");
    generateBtn.innerText = "Generate QR Code";
  }
});
