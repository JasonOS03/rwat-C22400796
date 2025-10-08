let reg_form = document.getElementById("sectionform"); 
let u_name = document.getElementById("username");
let p_word = document.getElementById("passw");
let image = document.getElementById("background");
let submit_button = document.getElementById("submitform");

function validate_uname(u_name)
{
    try{
        if(u_name.length < 8) throw "Username is too short";
        return true;
        
    }
    catch(err)
    {
        alert(err)
        return false;
    }
}

image.addEventListener("change", function(event) {
    const file = event.target.files[0]; // 'files', not 'file'
    if (file) {
        const tempURL = URL.createObjectURL(file);
        document.body.style.backgroundImage = `url('${tempURL}')`; // use backticks
    }
});

function closeDialog()
{
     const dialog = document.getElementsByTagName("dialog")[0];
    if(dialog)
    {
        dialog.close();
    }
}

function handleSubmit()
{
    const uname = document.getElementById("username").value;
    if(validate_uname(uname))
    {
        closeDialog();
    }
}


