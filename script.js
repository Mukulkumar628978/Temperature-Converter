const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

let isUpdating = false;

celsius.addEventListener("input", () => {
  if (isUpdating) return;
  isUpdating = true;

  const c = parseFloat(celsius.value);
  if (!isNaN(c)) {
    fahrenheit.value = (c * 9/5 + 32).toFixed(2);
    kelvin.value = (c + 273.15).toFixed(2);
  }

  isUpdating = false;
});

fahrenheit.addEventListener("input", () => {
  if (isUpdating) return;
  isUpdating = true;

  const f = parseFloat(fahrenheit.value);
  if (!isNaN(f)) {
    celsius.value = ((f - 32) * 5/9).toFixed(2);
    kelvin.value = ((f - 32) * 5/9 + 273.15).toFixed(2);
  }

  isUpdating = false;
});

kelvin.addEventListener("input", () => {
  if (isUpdating) return;
  isUpdating = true;

  const k = parseFloat(kelvin.value);
  if (!isNaN(k)) {
    celsius.value = (k - 273.15).toFixed(2);
    fahrenheit.value = ((k - 273.15) * 9/5 + 32).toFixed(2);
  }

  isUpdating = false;
});

function resetFields() {
  celsius.value = "";
  fahrenheit.value = "";
  kelvin.value = "";
}
