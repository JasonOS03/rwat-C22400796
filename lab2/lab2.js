let box = document.getElementById("salmon-box");

box.addEventListener("dragstart",(e) =>{
let offx = e.offsetX;
let offy = e.offsetY;
e.dataTransfer.setData("text/plain",offx + "," + offy)});

document.body.addEventListener("dragover" , (e) =>
{
    e.preventDefault();
});

document.body.addEventListener("drop" , (e) =>
{
    e.preventDefault()
}
)

