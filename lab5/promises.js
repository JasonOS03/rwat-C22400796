document.addEventListener("DOMContentLoaded", () => {
  let val = document.getElementById("display_promise");
  let paragraph_2 = document.getElementById("string_promise");
  let sentence = "This is a new string promise";

  function getNewPromise(value, delay, sentence) {
    return new Promise((resolve, reject) => {
      setTimeout(() => { 
        resolve(value);
      }, delay);
    })
    .then((res) => {
      val.innerHTML = res;
      return sentence;
    })
    .then((result) =>{
      result = result.toUpperCase();
      return result;
    })
    .then((result) =>{
      result = result.split("").reverse().join("");
      return result;
    })
    .then((result) => {
      paragraph_2.innerHTML = result;
    });
  }

  // Original string promise
  getNewPromise("promise created", 2000, sentence);

  // Added numeric promise chain
  getNewPromise(42, 3000)
    .then(result => result * 2)
    .then(result => {
      getNewPromise(result + 16, 1000)
        .then(result => console.log("Nested result: ", result))
        .catch((e) => { })
      return result;
    })
    .then(result => console.log("Final result: ", result * -1))
    .catch((e) => console.error("Failed: ", e.message));
});
