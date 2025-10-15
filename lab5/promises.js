document.addEventListener("DOMContentLoaded", () => {
let val = document.getElementById("display_promise");
let paragraph_2 = document.getElementById("string_promise");
let sentence = "This is a new string promise";
function getNewPromise(value, delay,sentence) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { 
      resolve(value);
    }, delay);
  }).then((res) => {
    val.innerHTML = res;
    return sentence;
  }).then((result) =>{
    result = result.toUpperCase();
    return result;
  }).then((result) =>{
    result = result.split("").reverse().join("");
    return result;
  }).then((result) => {
    paragraph_2.innerHTML = result;
  })
  
}
getNewPromise("promise created",2000,sentence);
});