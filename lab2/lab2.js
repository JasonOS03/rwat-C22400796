let box = document.getElementById("salmon-box");
let dragging = false;
let x = 0;
let y = 0;
let newx = 0;
let newy = 0;

box.addEventListener("mousedown",(e) =>{
 dragging = true;
 x = e.clientX;
 y = e.clientY;
});

document.body.addEventListener("mousemove" , (e) =>
{
    e.preventDefault();
    if(dragging){
    newx =  e.clientX - x;
    newy =  e.clientY - y;

    x = e.clientX;
    y = e.clientY;

    box.style.top = (box.offsetTop + newy) + "px";
    box.style.left = (box.offsetLeft + newx) + "px";
    }

});

document.body.addEventListener("mouseup" , (e) =>
{
   dragging = false;

   localStorage.setItem("top",box.style.top);
   localStorage.setItem("left",box.style.left);
}
);

window.addEventListener("load", () =>
{
    const savetop = localStorage.getItem("top");
    const saveleft = localStorage.getItem("left");

    if(savetop && saveleft)
    {
        box.style.position = "absolute";
        box.style.top = savetop;
        box.style.left = saveleft;
    }
});

document.body.addEventListener("click", (e) =>
{
    document.body.style.backgroundColor
});

