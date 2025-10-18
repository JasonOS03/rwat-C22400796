let filter_form = document.getElementById("filter_form");
let firstname = document.getElementById("firstname");
let surname = document.getElementById("surname");
let favourite = document.getElementById("fav_course");
let dining_type = document.getElementById("dining_type");
let table = document.getElementById("data_container");
let apply_button = document.getElementById("apply_results");

let parsed_data = [];
function get_data()
{

    fetch("./dining.json").then((resolve) => {
        if(resolve.ok)
        {
            return resolve.json();
        }
        else
        {
            alert("error fetching data");
        }
    }).then((data) =>
    {
        parsed_data = data;
        render(parsed_data);
    }).catch(() =>
    {
        alert("error displaying data");
    });
    
}
function render(data)
{
    table.innerHTML = `
    <tr>
        <th>ID</th>
        <th>First Name:</th>
        <th>Last Name:</th>
        <th>Favourite Course:</th>
        <th> Dining Type:</th>
    </tr>

    ${data.map(person =>`
        <tr>
            <td>${person.id}</td>
            <td>${person.first_name}</td>
            <td>${person.last_name}</td>
            <td>${person.fav_course}</td>
            <td>${person.fav_dining_type}</td>
        </tr>
    `).join('')



    }
    `
    ;
        
}
get_data();

let input_filter = "";
firstname.addEventListener("click", ()=>
    {
        const form = document.createElement("form");
        const input = document.createElement("input");
        const paragraph = document.createElement("p");
        paragraph.textContent = "First name should match regular expression"
        form.appendChild(paragraph);
        form.appendChild(input);

        input.type = "text";
        filter_form.appendChild(form);
        let data_to_filter = parsed_data;

        input.addEventListener("input", () =>{
            input_filter = input.value.toLowerCase().trim();
        })
        apply_button.addEventListener("click", (e)=>{
                e.preventDefault();
                    let filtered_data;
                    if(input_filter){
                        filtered_data = data_to_filter.filter(person =>
                         person.first_name.toLowerCase().includes(input_filter)
                       
                    
                       
                );
            }
            else
            {
                filtered_data = data_to_filter;
            }
                render(filtered_data);
           
               
            });
                    
               
            });
            


        
        
        
    

