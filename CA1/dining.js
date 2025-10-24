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



let firstname_input = "";
let lastname_input = "";



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

        input.addEventListener("input", () =>{
            firstname_input = input.value.toLowerCase().trim();
        });

        
                    
               
    });
    surname.addEventListener("click", ()=>
    {
        const form = document.createElement("form");
        const input = document.createElement("input");
        const paragraph = document.createElement("p");
        paragraph.textContent = "Last name should match regular expression"
        form.appendChild(paragraph);
        form.appendChild(input);

        input.type = "text";
        filter_form.appendChild(form);

        input.addEventListener("input", () =>{
            lastname_input = input.value.toLowerCase().trim();
        });

        
                    
               
    });
     const select = [];
     let filtered_form = null;
    favourite.addEventListener("click", ()=>
    {
        if(filtered_form)
        {
            return;
        }
        const form = document.createElement("form");
        filtered_form = form;
        const paragraph = document.createElement("p");
        const course_options = ["Starter","Main","Dessert"];
        paragraph.textContent = "Please select your favourite course(s)";
        form.appendChild(paragraph);

        course_options.forEach( option =>
        {
            const input = document.createElement("input");
            input.type = "checkbox";
            input.value = option.toLowerCase();
            input.id = `option_${option}`;

            const label = document.createElement("label");
            label.setAttribute("for", input.id);
            label.textContent = option;

            form.appendChild(input);
            form.appendChild(label);
            

        }
        )



        filter_form.appendChild(form);
               
               
    });
    let dining_form = null;
    dining_type.addEventListener("click", ()=>
    {
        if(dining_form)
        {
            return;
        }
        const form = document.createElement("form");
        dining_form = form;
        const paragraph = document.createElement("p");
        const dining_types = ["Restaurant","Home","Picnic","Takeaway"];
        paragraph.textContent = "Please select your favourite dining type";
        form.appendChild(paragraph);

        dining_types.forEach( type =>
        {
            const input = document.createElement("input");
            input.type = "checkbox";
            input.value = type.toLowerCase();
            input.name = `${type}`;

            const label = document.createElement("label");
            label.setAttribute("for", input.name);
            label.textContent = type;

            form.appendChild(input);
            form.appendChild(label);
            

        }
        )



        filter_form.appendChild(form);
               
               
    });


    apply_button.addEventListener("click", (e)=>{
            e.preventDefault();
            let data_to_filter = parsed_data;

            if(firstname_input)
            {

                data_to_filter = data_to_filter.filter(person =>
                    person.first_name.toLowerCase().includes(firstname_input)
                
                
                    
                );
            }
            if(lastname_input)
            {
                data_to_filter = data_to_filter.filter(person =>
                person.last_name.toLowerCase().includes(lastname_input)
                );
            }
            if(filtered_form){
            const boxes = filtered_form.querySelectorAll('input[type="checkbox"]');
            let selected_options = [];
            for(let i =0;i<boxes.length;i++)
            {
                let checked = boxes[i].checked;
                if(checked){
                selected_options.push(boxes[i].value);
                }
            }

        
            if(selected_options.length > 0)
            {
                data_to_filter = data_to_filter.filter(person => selected_options.includes(person.fav_course.toLowerCase().trim()));
            } 
               
            }
            if(dining_form)
            {
            const dining_boxes = dining_form.querySelectorAll('input[type="checkbox"]');
            let selected_types = [];
            for(let i =0;i<dining_boxes.length;i++)
            {
                let checked = dining_boxes[i].checked;
                if(checked){
                selected_types.push(dining_boxes[i].value);
                }
            }

        
            if(selected_types.length > 0)
            {
                data_to_filter = data_to_filter.filter(person => selected_types.includes(person.fav_dining_type.toLowerCase().trim()));
            }
        }
            render(data_to_filter);
        });
    
    