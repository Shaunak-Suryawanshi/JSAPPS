const passwordInput = document.querySelector(".password");
const rangeInput = document.querySelector(".range");
const numberCheckbox = document.querySelector(".numberAllowed");
const charCheckbox = document.querySelector(".charAllowed");
const lengthValue = document.querySelector(".lengthValue");
const copybtn = document.querySelector(".copy");

let length = rangeInput.value;

copybtn.addEventListener("click", () => {
  if (!passwordInput.value) {
    alert("NOTHING TO COPY!!!!");
    return;
  }

  navigator.clipboard
    .writeText(passwordInput.value)
    .then(() => {
      copybtn.innerHTML = "COPIED";
      setTimeout(() => {
        copybtn.innerHTML = "COPY";
      }, 1500);
    })
    .catch(() => {
      alert("FAILED");
    });
});

const passwordGenerator = () => {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if (numberCheckbox.checked) {
    str += "0123456789";
  }

  if (charCheckbox.checked) {
    str += "@#$%^&";
  }

  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * str.length);
    pass += str.charAt(index);
  }

  passwordInput.value = pass;
};

rangeInput.addEventListener("input", () => {
  length = rangeInput.value;
  lengthValue.innerHTML = length;
  passwordGenerator();
});

numberCheckbox.addEventListener("change", passwordGenerator);
charCheckbox.addEventListener("change", passwordGenerator);

passwordGenerator();
