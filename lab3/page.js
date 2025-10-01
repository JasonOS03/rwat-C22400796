function create_page()
{
    let heading = document.createElement("h1");
    heading.textContent = "In Brief";
    document.body.appendChild(heading);

    let paragraph1 = document.createElement("p");
    paragraph1.textContent = "This is a very short page. It includes some text, an image and a list.";
    document.body.appendChild(paragraph1);

    let image1 = document.createElement("img")
    image1.src = "https://jelena-vk-itt.github.io/jvk-tudt-notes/rwat/res/images/logo.png";
    document.body.appendChild(image1);

    let heading_2 = document.createElement("h2");
    heading_2.textContent = "TODO";
    document.body.appendChild(heading_2);

    let list_heading = document.createElement("ul");
    document.body.appendChild(list_heading);

    let list_element1 = document.createElement("li");
    list_element1.textContent = "finish lab";

    let list_element2 = document.createElement("li");
    list_element2.textContent = "practice";

    let list_element3 = document.createElement("li");
    list_element3.textContent = "practice some more";

    list_heading.appendChild(list_element1);
    list_heading.appendChild(list_element2);
    list_heading.appendChild(list_element3);

    document.body.appendChild(list_heading);

}
create_page();