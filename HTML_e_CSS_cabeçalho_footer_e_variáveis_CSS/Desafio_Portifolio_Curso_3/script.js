const inputColor = document.getElementById("input-color");
const bodyElement = document.body;

inputColor.addEventListener("input", () => {
  inputColor.style.borderColor = inputColor.value;
  inputColor.style.backgroundColor = inputColor.value;
  bodyElement.style.setProperty("--cor-terciaria", inputColor.value);
  localStorage.setItem("corEscolhida", inputColor.value);
});

const corSalva = localStorage.getItem("corEscolhida");
if (corSalva) {
  inputColor.style.borderColor = corSalva;
  inputColor.style.backgroundColor = corSalva;
  bodyElement.style.setProperty("--cor-terciaria", corSalva);
  inputColor.value = corSalva;
}
