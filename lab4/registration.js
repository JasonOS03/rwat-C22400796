document.addEventListener("DOMContentLoaded", function() {
    let reg_form = document.getElementById("sectionform"); 
    let u_name = document.getElementById("username");
    let p_word = document.getElementById("passw");
    let image = document.getElementById("background");
    let submit_button = document.getElementById("submitform");

    function validate_uname(u_name) {
        try {
            if (!u_name || u_name.length < 8) throw "Username is too short or value has not been entered";
            return true;
        } catch(err) {
            alert(err);
            return false;
        }
    }

    image.addEventListener("change", function(event) {
        const file = event.target.files[0]; // 'files', not 'file'
        if (file) {
            const tempURL = URL.createObjectURL(file);
            document.body.style.backgroundImage = `url('${tempURL}')`;
        }
    });

    function closeDialog() {
        const dialog = document.getElementsByTagName("dialog")[0];
        if(dialog) {
            dialog.close();
        }
    }

    function handleSubmit() {
        let username = u_name.value; // always get current value
        if(validate_uname(username)) {
            closeDialog();
        }
    }

    submit_button.addEventListener("click", handleSubmit);
});



