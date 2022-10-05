// const bilangan = 6;

const button = document.getElementById("btn");
const inputNumber = document.getElementById("input");
const info = document.querySelector(".alert");

button.addEventListener("click", function () {
  if (inputNumber.value !== "") {
    setResult(inputNumber.value);
  } else {
    info.classList.add("error");
    info.innerHTML = "The field is required number!";
    setTimeout(() => {
      info.classList.remove("error");
    }, 2000);
  }
});

function setResult(number) {
  console.log(number);
  // Looping dulu nilai bilangan
  // hasil lopping dikalikan
  // return nilai nya
  let bill = [];
  for (let i = 1; i <= number; i++) {
    bill.push(`${i}`);
  }

  let pasrsNumber = bill.map((b) => parseInt(b));
  const result = pasrsNumber.reduce((acc, curr) => acc * curr);
  info.innerHTML = result;
  info.classList.add("active");
}
