let filter_form = document.getElementById("filter_form");
let firstname = document.getElementById("firstname");
let surname = document.getElementById("surname");
let favourite = document.getElementById("fav_course");
let dining_type = document.getElementById("dining_type");
let table = document.getElementById("data_container");


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
        render(data);
    }).catch(() =>
    {
        alert("error displaying data");
    });
    
}
function render(data)
{
    const parsed_data = data;
    table.innerHTML = `
    <tr>
        <th>ID</th>
        <th>First Name:</th>
        <th>Last Name:</th>
        <th>Favourite Course:</th>
        <th> Dining Type:</th>
    </tr>

    ${parsed_data.map(person =>`
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

function filter_data()
{
    
}
