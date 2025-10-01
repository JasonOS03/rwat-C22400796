function story_fix(){
    let new_h1 = document.createElement("h1")
    new_h1.textContent = "Little Red Riding Hood";

    let ARTICLE = document.querySelector("article");
    ARTICLE.parentNode.insertBefore(new_h1,ARTICLE)

    let paragraphs = document.querySelectorAll("article p");

    let frog = paragraphs[3];

    frog.parentElement.removeChild(frog);

    let swap_1 = paragraphs[6];
    let swap_2 = paragraphs[7];

    swap_1.parentNode.insertBefore(swap_2,swap_1);

    let ending_swap = ARTICLE.children[ARTICLE.children.length -1];
    let new_swap = document.createElement("p");

    let the_swap = new_swap.appendChild(document.createTextNode("However, the good hunter was passing by and heard what was happening. He was able to cut open the wolf and save both girl and granny."))
    ARTICLE.replaceChild(the_swap,ending_swap)




}

document.addEventListener("mousedown", (e)  =>
{
    story_fix();
});