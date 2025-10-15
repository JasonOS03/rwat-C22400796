let val = document.getElementById("display_promise");

document.addEventListener("DOMContentLoaded", () => {
function getNewPromise(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { 
      resolve(value);
    }, delay);
  }).then((res) => {
    val.innerHTML = res;
  });
}
getNewPromise("promise created",2000);
});